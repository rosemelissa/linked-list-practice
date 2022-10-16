import fetch from "node-fetch";

async function doDemo() {
    fetch('https://jokestemp.neillbogie.repl.co/random_joke')
    .then(response => response.json())
    .then(response => console.log(response))
}

doDemo();
console.log('hello world');