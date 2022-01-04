// output images to screen
const imageOutput = document.getElementById("images-el");
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]



function outputImgs(arr){
    // to hold generated html
    let listItems = "";

    for(let i=0; i<arr.length; i++){
        listItems += `
        <img class="team-img" src="${arr[i]}"  alt = "profile pic">
        `;
        console.log(listItems);

    }
    imageOutput.innerHTML = listItems;
}

outputImgs(imgs);

// const description = "best fruits";
// const countries = ["Apples", "Bananas"];
// const fruits = ["Apples", "Bananas"];

// function generateSentence(desc, arr) {
//     let baseString = `The ${arr.length} ${desc} are `;
//     let end=arr.length - 1;
//     for(let i=0;i<arr.length;i++){
//         if (i!=end){
//             baseString+=arr[i] + ", ";
//         } else{
//             baseString+=arr[i];
//         }
//     }
//     console.log(baseString);
// }

// generateSentence(description, countries);

// let data = [
//     {
//         player: "Jane",
//         score: 52
//     }, 
//     {
//         player: "Mark",
//         score: 41
//     }
// ]

// const logBtn = document.getElementById("log-btn");

// logBtn.addEventListener("click", function() {
//     console.log("Jane's score: ", data[0].score);
// }
// )


// let name = "Amanda";

// localStorage.setItem("names", name);

// console.log("Output from local storage:", localStorage.getItem("names"));




// let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"];

// function printtoConsole(arr) {
//     for(let i=0; i<arr.length; i++){
//         console.log(arr[i]);
//     }
// }
//  printtoConsole(myCourses);


// const myarray = [1,2,3];

// function getFirst(arr){
//     return arr[0];
// }

// console.log("Returning first element: ", getFirst(myarray));


// function add(num1, num2){
//     return num1+num2;
// }

// sum = add(9,102);
// console.log(sum);


// // function parameters
// const welcomeEL = document.getElementById("welcome-el");

// function greetUser(greeting, name){
//     welcomeEL.textContent = `${greeting} ${name}!`;

// }

// greetUser("Hello","May");





// practice template strings/literals

// const recipient = "James";
// const sender = "Amanda";

// const email = `
//     Hey ${recipient}! 
//     How is it going? 
//     Cheers, ${sender}`;

// console.log(email);



// buyBtn = document.getElementById("container");

// buyBtn.innerHTML = "<button onclick='buy()'>Buy!</button>";

// function buy() {
//     buyBtn.innerHTML += "<p>Thank you for buying!</p>";
// }


// let boxAction = document.getElementById("box");
// boxAction.addEventListener("click", function(){
//     console.log("I want to open the box!")
// })

// // not to be reassigned
// const playerName = "Per";
// // should be reassigned later in code
// let credits = 45;