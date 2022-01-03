// store user input
let myLeads = [];

// const prevents variable from being reassigned
// input field
const inputEL = document.getElementById("input-el");
// save btn
const inputBtn = document.getElementById("input-btn");
// save tab button
const tabBtn = document.getElementById("tab-btn");
// del button
const deleteBtn = document.getElementById("delete-btn");
// ul output destination
const ulEL = document.getElementById("ul-el");


// save leads from localStorage so are preserved if page refreshed
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);

// if leadsFromLocalStorage has content, render to screen
if(leadsFromLocalStorage){
    myLeads=leadsFromLocalStorage;
    render(myLeads);
} else{
    console.log("leadsFromLocalStorage not truthy");
}

// -----------------------------renderLeads()-------------------------------------
function render(leads) {
    // hold all html for list items
    let listItems = "";

    for (let i = 0; i < leads.length; i++) {
        // console.log(leads[i]);

        // one way to output to screen - may be better because easily human readable
        // add list items to variable for improved performance
        // listItems += "<li><a href=" + myLeads[i] + " target='blank'>" + myLeads[i] + "</a ></li > ";
        listItems += `
        <li>
            <a href="${leads[i]}" target='blank'>
                ${leads[i]}
                </a >
                </li > 
            `;

        // another method - may encounter so good to know
        // create html element
        // const li = document.createElement("li");
        // // set text content
        // li.textContent = leads[i];
        // // append closing tag
        // ulEL.append(li);

    }
    // output after for loop for best performance
    ulEL.innerHTML = listItems;
}

// --------------------Save Button---------------------------------------------

// add event listener to Save Input button
//replaces use of "onclick" in html tags
inputBtn.addEventListener("click", function () {
    console.log("Button clicked from event listener.");
    
    // take field input and push into leads array
    myLeads.push(inputEL.value);
    
    // pass myLeads array as string
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    // clear input field
    inputEL.value = "";
    
    render(myLeads);

    console.log("Output from local storage:", localStorage.getItem("myLeads"));

})

// ----------------------------------- Save Tab Button --------------------------
tabBtn.addEventListener("click", function() {
    console.log("Save tab button clicked.");


    // grab url for current browser tab - active in current window
    // returns a tabs variable
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // push tab into leads array
        myLeads.push(tabs[0].url);

        // pass myLeads array as string to local storage
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
    
        // output tab
        render(myLeads);
     });

    

    console.log("Output from local storage:", localStorage.getItem("myLeads"));
})

// -------------------------Delete Button ----------------------------------------

// add event listener to delete button
deleteBtn.addEventListener("click", function() {
    console.log("delete button");

    // clear everything
    localStorage.clear();
    myLeads = [];
    render(myLeads);
}
)