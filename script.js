let myLeads = [];
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
    // clear input field
    inputEL.value = "";
    // console.log(myLeads);
    renderLeads();
})

// -----------------------------renderLeads()-------------------------------------
function renderLeads() {
    // hold all html for list items
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        // console.log(myLeads[i]);

        // one way to output to screen - may be better because easily human readable
        // add list items to variable for improved performance
        listItems += "<li><a href=" + myLeads[i] + " target='blank'>" + myLeads[i] + "</a ></li > ";

        // another method - may encounter so good to know
        // create html element
        // const li = document.createElement("li");
        // // set text content
        // li.textContent = myLeads[i];
        // // append closing tag
        // ulEL.append(li);

    }
    // output after for loop for best performance
    ulEL.innerHTML = listItems;
}

// -----------------------------------------------------------------------------------