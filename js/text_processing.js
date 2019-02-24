import wiki from 'wikijs';

let current_words = [];
let card_cache = {}
let current_cards = []

export function update_cards(){
    // console.log(current_words)
    const new_current_cards = []
    current_words.forEach((word)=>{
        if (!(word in card_cache)){
            const definition = get_definition(word)
            card_cache[word] = definition
            new_current_cards.push(definition)
        } else {
            new_current_card.push(card_cache[word])
        }
    })

}

export function get_definition(word) {
    wiki().search(word).then(data => {
            if (data.results) {
                wiki().page(
                    data.results[0]
                ).then(page => page.summary()).then(console.log)
            }
        }
    );
    return "hello"
}