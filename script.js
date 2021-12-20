let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
// const prevents variable from being reassigned
const inputEL = document.getElementById("input-el");

// add event listener to Save Input button
//replaces use of "onclick" in html tags
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
    console.log("Button clicked from event listener.");

    // take field input and push into leads array
    myLeads.push(inputEL.value);
    console.log(myLeads);
})

for (let i = 0; i < myLeads.length; i++) {
    // console.log(myLeads[i]);
    ulEL.innerHTML += "<li>" + myLeads[i] + "</li>";
}