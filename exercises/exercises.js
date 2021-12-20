buyBtn = document.getElementById("container");

buyBtn.innerHTML = "<button onclick='buy()'>Buy!</button>";

function buy() {
    buyBtn.innerHTML += "<p>Thank you for buying!</p>";
}


// let boxAction = document.getElementById("box");
// boxAction.addEventListener("click", function(){
//     console.log("I want to open the box!")
// })

// // not to be reassigned
// const playerName = "Per";
// // should be reassigned later in code
// let credits = 45;