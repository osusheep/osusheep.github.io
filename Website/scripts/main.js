var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/quote1.jpg') {
      myImage.setAttribute ('src','images/quote0.jpg');
    } else {
      myImage.setAttribute ('src','images/quote1.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'welcome to Quoka, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Quoka, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}