import wiki from 'wikijs';

let current_text = [];
let card_cache = {}

export function update_cards(){
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