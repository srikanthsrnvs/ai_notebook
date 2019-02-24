import React from "react";

function DefinitionCard(props){
    return <div className="card has-margin-bottom-20">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">John Smith</p>
                            <p className="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div className="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                                    <a href="#">#css</a> <a href="#">#responsive</a>
                        <br />
                        <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>
}

export default function DefinitionCardColumn(props) {
    if ("words_and_definitions" in props){
        const cards = props.words_and_definitions.map((word_definition_pair, index) => {
            return <DefinitionCard />
        })
    }
    return (
        // {cards}

        <DefinitionCard />
   )
}


