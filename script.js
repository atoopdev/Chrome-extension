// store user input
let myLeads = ["http://www.google.com"];

// const prevents variable from being reassigned
const inputEL = document.getElementById("input-el");

// add event listener to Save Input button
//replaces use of "onclick" in html tags
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");

// local storage - can only store strings
// (key, value)
// localStorage.setItem("myLeads", "http://www.google.com/");
// console.log(localStorage.getItem("myLeads"));

// save leads from localStorage so are preserved if page refreshed
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

// if leadsFromLocalStorage has content, render to screen
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    renderLeads();
} else{
    console.log("leadsFromLocalStorage not truthy");
}

inputBtn.addEventListener("click", function () {
    console.log("Button clicked from event listener.");
    
    // take field input and push into leads array
    myLeads.push(inputEL.value);
    
    // pass myLeads array as string
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    // clear input field
    inputEL.value = "";
    // console.log(myLeads);
    renderLeads();

    console.log("Output from local storage:", localStorage.getItem("myLeads"));

})

// -----------------------------renderLeads()-------------------------------------
function renderLeads() {
    // hold all html for list items
    let listItems = "";

    for (let i = 0; i < myLeads.length; i++) {
        // console.log(myLeads[i]);

        // one way to output to screen - may be better because easily human readable
        // add list items to variable for improved performance
        // listItems += "<li><a href=" + myLeads[i] + " target='blank'>" + myLeads[i] + "</a ></li > ";
        listItems += `
        <li>
            <a href="${myLeads[i]}" target='blank'>
                ${myLeads[i]}
                </a >
                </li > 
            `;

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