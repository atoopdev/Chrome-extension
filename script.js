
// add event listener to Save Input button
//replaces use of "onclick" in html tags
let inputBtn = document.getElementById("input-btn");
inputBtn.addEventListener("click", function(){
    console.log("Button clicked from event listener.")
})