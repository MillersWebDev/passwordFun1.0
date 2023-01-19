const pA = document.getElementById('pA')
const pB = document.getElementById('pB')
const pC = document.getElementById('pC')
const button = document.getElementById('toggle')
const pElements = [pA, pB, pC]
const hackerMsg = document.getElementById('hackerMsg')

const displayOn = (value) => {
value.style.display = 'block';
}

const displayOff = (value) => {
    value.style.display = 'none';
}

const removeElement = (array) => {
    array.shift()
}

const showMsg = (value) => {
    value.style.display = 'block'
}

const checkElements = (value) => {
    if (value.length === 0) {
displayOff(pA);
displayOff(pB);
displayOff(pC);
showMsg(hackerMsg)
    }
} 

button.addEventListener('click', () => {
    displayOn(pElements[0]);
    removeElement(pElements);
    checkElements(pElements);
})