let myLeads = [];
// const prevents variable from being reassigned
const inputEL = document.getElementById("input-el");

// add event listener to Save Input button
//replaces use of "onclick" in html tags
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function(){
    console.log("Button clicked from event listener.")
    // console.log(inputEL.value);

    // take field input and push into leads array
    myLeads.push(inputEL.value);
    console.log(myLeads);
})