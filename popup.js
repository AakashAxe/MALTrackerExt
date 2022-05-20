// Initialise button with user's preferred colour
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({color}) => {
    changeColor.style.backgroundColor = color;

})

 let Butt = document.getElementById("changeColor");
        Butt.addEventListener("click", newWindowFunc );

        function newWindowFunc() {
            window.open('http://google.com','_newtab') 

        }
