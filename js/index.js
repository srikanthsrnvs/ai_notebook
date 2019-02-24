const retext = require('retext')
const keywords = require('retext-keywords')
const toString = require('nlcst-to-string')
import {update_cards, current_text} from './text_processing.js';
// const Quill = require('quill')
// const wiki = require('wikijs').default;


const editor = new Quill('.editor', {
    theme: 'snow'
});

const text_processor = retext().use(keywords)
// const card_column = document.getElementById('definition-cards')

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

window.setInterval(update_cards, 1000)

import React from "react";
import ReactDOM from "react-dom";
import DefinitionCards from "./definition_cards.jsx";
ReactDOM.render(<DefinitionCards />, document.getElementById("definition-cards"));