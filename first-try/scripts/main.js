let myImage = document.querySelector("img")

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src")
    if (mySrc === "images/killua-crying.jpeg") {
        myImage.setAttribute("src", "images/killua-happy.jpg")
    } else {
        myImage.setAttribute("src", "images/killua-crying.jpeg")
    }
}

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName () {
    let myName = prompt("Please enter your name")
    if (!myName) {
        setUserName()
    } else {
    localStorage.setItem("name", myName)
    myHeading.innerHTML = `Hey ${myName}, Killua is crying!`
    }
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    let storedName = localStorage.getItem("name")
    myHeading.innerHTML = `Hey ${storedName}, Killua is crying!`
}

myButton.onclick = () => {
    setUserName()
}















