// Function to get input value
function getInputValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldValue = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldAmount;
}

// Function to get element value
function getElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementFieldValue = elementField.innerText;
    const elementFieldAmount = parseFloat(elementFieldValue);
    return elementFieldAmount;
}

// Function to set element value
function setElementValueById(elementId, result) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = result;
}