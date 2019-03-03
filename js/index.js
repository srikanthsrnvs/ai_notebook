import {
    update_cards
} from './text_processing.js';
// const Quill = require('quill')
// const wiki = require('wikijs').default;
let current_text = ""


const editor = new Quill('.editor', {
    theme: 'snow'
});

// const card_column = document.getElementById('definition-cards')

editor.on('text-change', function (delta, oldDelta, source) {
    current_text = editor.getText()
});


import RenderCardsColumn from './definition_cards'

update_cards(RenderCardsColumn, current_text) // Initial clear side bar
window.setInterval(() => {update_cards(RenderCardsColumn, current_text)}, 3000)