// Button for Manga
let mangaBut = document.getElementById("manga");
        mangaBut.addEventListener("click", getManga );

// Function for the Manga Button
function getManga() {
    //Creates a new tab
    //window.open('http://google.com','_newtab') 
    
    fetch("https://kitsu.io/api/edge/manga")
        .then(response => {
            console.log("Manga: ")
            console.log(response.json())
            //return response.json()  
    })

    //console.log("SampleTextHere")
}

// Button for Anime
let animeBut = document.getElementById("anime");
        animeBut.addEventListener("click", getAnime );


function getAnime() {
    //Creates a new tab
    //window.open('http://google.com','_newtab') 
    
    fetch("https://kitsu.io/api/edge/anime")
        .then(response => {
            console.log("Anime: ")
            console.log(response.json())
            //return response.json()  
    })

    //console.log("SampleTextHere")
}