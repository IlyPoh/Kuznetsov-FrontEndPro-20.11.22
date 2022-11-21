let currentArray = [1, 2, 3, 4, 5, 6, 7];

const currentArrayElem = document.getElementById("CurrentArray");

currentArrayElem.innerHTML = currentArray.join(", ")

function removeElement(itemToWork, elementToRemove) {

    // 1 Variant - If we need to remove only ONE element (with value == 5)
    let newArray = itemToWork.filter(element => element !== elementToRemove)
    
    currentArrayElem.innerHTML = currentArray.join(", ")
    console.log(newArray);
    
    
    // 2 Variant - If we need to remove multiple elements (with index 5 (6th element))
    itemToWork.splice(elementToRemove, 1);
    
    currentArrayElem.innerHTML = currentArray.join(", ")
    console.log(itemToWork);
}