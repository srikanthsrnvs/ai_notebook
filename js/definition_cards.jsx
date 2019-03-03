import React from "react";
import ReactDOM from "react-dom";

function DefinitionCard(props) {
    // console.log("props")
    // console.log(props)
    return <div className="card has-margin-bottom-20">
        <div className="card-image">
            <figure className="image is-4by3">
                <img src={props.main_image} alt="Placeholder image" />
            </figure>
        </div>
        <div className="card-content">
            {/* <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4">John Smith</p>
                    <p className="subtitle is-6">@johnsmith</p>
                </div>
            </div> */}

            <div className="content">
                {props.main_text}
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                                    <a href="#">#css</a> <a href="#">#responsive</a>
                <br />
                <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time> */}
            </div>
        </div>
    </div>
}

import notebookPlaceholder from '../img/nirzar-pangarkar-85500-unsplash.jpg';

export default function RenderCardColumn(props) {
    let cards = {}
    if (props && props.length) {
        cards = props.map((word_definition_pair, index) => {
            // console.log("pair " + Object.keys(word_definition_pair)[0])
            const word_entry = Object.keys(word_definition_pair)[0] // Get word entry
            return <DefinitionCard key={word_entry} main_image={word_definition_pair[word_entry].img} main_text={word_definition_pair[word_entry].def} />
        })
    } else {
        // Literal string representation of empty array used as key for default
        cards = <DefinitionCard key={"[]"} main_image={notebookPlaceholder} main_text="Keywords will be automatically extracted from your notes and its definitions will appear here." />
    }
    ReactDOM.render(cards, document.getElementById("definition-cards"));
}
