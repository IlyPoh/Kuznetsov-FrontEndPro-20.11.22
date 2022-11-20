const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const randomiser = (min, max) => Math.floor(Math.random() * (max - min) + min);

function generateKey(numberOfCharacters, characters) {
    
    let arrayofCharacter = []
    for (let i = 0; i < numberOfCharacters; i++) {
        arrayofCharacter.push(characters[randomiser(0, characters.length)]);
    }
    
    document.getElementById("generateKey").innerHTML = arrayofCharacter.join("")
}