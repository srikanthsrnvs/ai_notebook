import wiki from 'wikijs';

const retext = require('retext')
const keywords = require('retext-keywords')
const toString = require('nlcst-to-string')
const text_processor = retext().use(keywords)

let current_words = []

let definition_cache = {} // TODO: Replace with LRU cache otherwise this is a memory leak


export function update_cards(view_update_fun, current_text) {
    // Extract keywords, TODO: heavy optimisation
    text_processor.process(current_text, (err, content) => {
        if (err) throw err
        console.log('Keywords:')
        let new_current_words = []
        content.data.keywords.forEach(function (keyword) {
            new_current_words.push(toString(keyword.matches[0].node))
            console.log(toString(keyword.matches[0].node)) // Extract word from retext syntax tred
        })
        current_words = new_current_words
    })
    // Get definitions and add to cache if necessary 
    const current_cards = []
    current_words.forEach(async (word) => {
        const card = {}
        if (!(word in definition_cache)) {
            const [img, def] = await get_definition(word)
            const definition = {
                "img": img,
                "def": def
            }
            // console.log(definition)
            definition_cache[word] = definition
            card[word] = definition
            current_cards.push(card)
            // console.log("card!" + JSON.stringify(card))
            // console.log(definition_cache)
        } else {
            card[word] = definition_cache[word]
            current_cards.push(card)
            // console.log(definition_cache)
        }
    })
    view_update_fun(current_cards)
}

// IO bound, TODO integrate async with parent code
async function get_definition(word) {
    console.log("Getting definition...")
    const data = await wiki().search(word)
    if (data.results) {
        const page = await wiki().page(
            data.results[0]
        )
        return [await
            page.mainImage(),
            await page.summary()
        ]
    }
}