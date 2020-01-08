//Image Changer
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/rocketship.svg') {
        myImage.setAttribute('src', 'images/alien.svg');}
    else {
        myImage.setAttribute('src', 'images/rocketship.svg');}
}

//Change User
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name:');
    if(!myName || myName === null) {
        setUserName();}
    else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome to space ' + myName;}}

if(!localStorage.getItem('name')) {
    setUserName();}
else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to space ' + storedName;}

myButton.onclick = function() {
    setUserName();}
