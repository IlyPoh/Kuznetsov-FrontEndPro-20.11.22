const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const randomiser = (min, max) => Math.floor(Math.random() * (max - min) + min);

function generateKey(numberOfCharacters, itemToWork) {
    
    let arrayofCharacters = []
    for (let i = 0; i < numberOfCharacters; i++) {
        arrayofCharacters.push(itemToWork[randomiser(0, itemToWork.length)]);
    }
    
    document.getElementById("generateKey").innerHTML = arrayofCharacters.join("")
}