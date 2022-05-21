// Initialise button with user's preferred colour
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({color}) => {
    changeColor.style.backgroundColor = color;

})

let Butt = document.getElementById("changeColor");
        Butt.addEventListener("click", getNewInfo );

// Function will perform actions on click
function getNewInfo() {
    //Creates a new tab
    //window.open('http://google.com','_newtab') 
    // const userAction = async () => {
    //     const response = await fetch("https://kitsu.io/api/edge/anime");
    //     const myJson = await response.json;
    // }

    //console.log(myJson)
    console.log("SampleTextHere")
}

// Fetching Random Results From API //

fetch("https://kitsu.io/api/edge/anime")
    .then(response => {
        console.log("this fetch was called")
        console.log(response.json())
        //return response.json()  
    })
   


