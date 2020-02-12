let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/beaverdam.jpg') {
        myImage.setAttribute('src', 'images/beaver2.jpg');
    } else {
        myImage.setAttribute('src', 'images/beaverdam.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Beavers are important, ' + myName;
  }
}
    if (!localStorage.getItem('name')) {
        setUserName();
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Beavers are important, ' + storedName;
    }
    myButton.onclick = function () {
        setUserName();
    }
