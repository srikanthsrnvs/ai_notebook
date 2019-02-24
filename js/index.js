const retext = require('retext')
const keywords = require('retext-keywords')
const toString = require('nlcst-to-string')
import wiki from 'wikijs';
// const Quill = require('quill')
// const wiki = require('wikijs').default;


const editor = new Quill('.editor', {
    theme: 'snow'
});

const text_processor = retext().use(keywords)
const card_column = document.getElementById('definition-cards')
let current_text = [];
let card_cache = {}

editor.on('text-change', function (delta, oldDelta, source) {
    // if (source == 'api') {
    //     console.log("An API call triggered this change.");
    // } else if (source == 'user') {
    //     console.log("A user action triggered this change.");
    // }
    // console.log(editor.getText())
    text_processor.process(editor.getText(), (err, content) => {
        if (err) throw err
        console.log('Keywords:')
        let new_current_text = []
        content.data.keywords.forEach(function(keyword) {
          new_current_text.push(toString(keyword.matches[0].node))
          console.log(toString(keyword.matches[0].node))
        })
        current_text = new_current_text

    })
});

function update_cards(){
    // console.log(current_text)
    current_text.forEach((word)=>{
        if (!(word in card_cache)){
            const definition = get_definition(word)
            card_cache[word] = definition
        } else {
            card_cache[word]
        }

    })
}

function get_definition(word){
    wiki.search('star wars').then(data => console.log(data.results[0]));
    return "hello"
}

window.setInterval(update_cards, 1000)