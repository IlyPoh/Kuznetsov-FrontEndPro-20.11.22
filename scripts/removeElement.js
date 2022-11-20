let currentArray = [1, 2, 3, 4, 5, 6, 7];

document.getElementById("CurrentArray").innerHTML = currentArray.join(", ")

function removeElement(currentArray, itemToRemove) {

    // 1 Variant - If we need to remove only ONE element (with value == 5)
    let newArray = currentArray.filter(element => element !== itemToRemove)
    
    document.getElementById("CurrentArray").innerHTML = newArray.join(", ")
    console.log(newArray);
    
    
    // 2 Variant - If we need to remove multiple elements (with index 5 (6th element))
    currentArray.splice(itemToRemove, 1);
    
    document.getElementById("CurrentArray").innerHTML = currentArray.join(", ")
    console.log(currentArray);
}