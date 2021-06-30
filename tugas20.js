const word = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.";

function search(searchValue, input){
    console.log(input.match(searchValue));
}

search('are', word);
search('words', word);