let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset-btn")
let msg = document.querySelector("#msg");
let playAgainButton = document.querySelector("#PAbutn");
let winner_area = document.getElementById("winner-area");



let turnO = true;

const winPattern = [[0,1,2],[3,4,5],[6,7,8],[6,4,2],[8,4,0],[6,3,0],[7,4,1],[8,5,2]];

boxes.forEach((box) =>{
    box.addEventListener("click", ()=>{
        box.innerText= "X";
        if(turnO){
            box.innerText= "O";
            box.style.color="#444444";
            turnO = false;
        }
        else {
            box.innerText="X";
            box.style.color="#5c00ad";
            turnO=true;
        }
        box.disabled = true;
        checkWinner();
    })
});
let counter ;
let hasWinner = false;
const checkWinner = () =>{
    counter = 1;
    for (let pattern of winPattern){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val!=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                hasWinner = true;
                break;
            }                   
        }
    }
    if(!hasWinner){
        counter++;
        if(counter>9){
            drawGame();
        }
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Winner is ${winner}`;
    winner_area.style.display="block"
    disableBoxes();
}

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
        winner_area.style.display="none"
    }
}
const drawGame = ()=>{
    msg.innerText = `Game Is Drawn Please Restart `;
    winner_area.style.display="block"
    disableBoxes();
}

playAgainButton.addEventListener("click",enableBoxes);
reset_button.addEventListener("click",enableBoxes);