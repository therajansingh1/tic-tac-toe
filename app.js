let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn")
let msg = document.querySelector(".msg");
let msgBox = document.querySelector(".msg-container");
let newGameBtn = document.querySelector("#newbtn");
let turnO = true;

const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            turnO = false;
        } else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disabledBtns = ()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}
const enabledBtns = ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerHTML="";
    }
}
 const resetGame = ()=>{
    turnO = true;
    enabledBtns();
    msgBox.classList.add("hide");
 }

const showWinner = (winner)=>{
    msg.innerHTML= `Congrats Winner is ${winner}`
    msgBox.classList.remove("hide");
    disabledBtns();
}

const checkWinner = () => {
    for (pattern of winningPattern) {
        let valOne = boxes[pattern[0]].innerHTML;
        let valTwo = boxes[pattern[1]].innerHTML;
        let valThree = boxes[pattern[2]].innerHTML;
        if (valOne != "" && valTwo != "" && valThree != "") {
            if (valOne === valTwo && valTwo === valThree && valThree === valOne) {
                showWinner(valOne);
            }
        }

    }
}
resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);