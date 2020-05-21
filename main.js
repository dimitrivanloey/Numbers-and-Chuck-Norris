const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const output = document.getElementById('output');

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL)
    .then( response => {
        output.innerHTML = 'Waiting for response...';
    if(response.ok) {
        return response;
    }
    throw Error(response.statusText);
    })
    .then( response => response.text() )
    .then( text => output.innerText = text )
    .catch( error => console.log('There was an error: ', error))
}, false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then( response => {
        output.innerHTML = 'Waiting for esponse...';
        if(response.ok) {
            return response;
        }
    throw Error(response.statusText);
    })
    .then( response => response.json() )
    .then( data => output.innerText = data.value )
    .catch( error => console.log('There was an error: ', error))
}, false);