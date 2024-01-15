let boxes = document.querySelectorAll(".box"); //we use all for there are multiple boxes in div
let resetBtn = document.querySelector("#rst-btn"); // we want to access only one selector thats why
let newBtn = document.querySelector("#new-btn");
let msgeContainer = document.querySelector(".msge_container");
let msge = document.querySelector("#msg");

let turnO = true;
let cnt=0;
const winPatterns = [
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,5,8],
   [2,4,6],
   [3,4,5],
   [6,7,8],

];

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
       
        if(turnO==true){
            box.innerText ="O";
            turnO= false;
            box.style.color = "red";
    
        } 
        else{
            box.innerText="X";
            turnO=true;
            box.style.color="blue"
        }
        box.disabled= true;
        cnt++;

        let isWineer = checkWinner();
        if(cnt===9 && !isWineer ){
            gameDraw();
        }
        
    });
});
const gameDraw = () => {
    msge.innerText = "game draw ho gya bhai";
    msgeContainer.classList.remove("hide");
    disboxes();
  };
const resetGame = ()=>{
    turnO = true;
    cnt=0;
    enbleboxes();
    msgeContainer.classList.add("hide");
}
const enbleboxes =() =>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText = "";
    }
}

const disboxes =() =>{
    for(let box of boxes){
        box.disabled= true;
    }
}

const shoWinner=(winner)=>{
   msge.innerText =`congratulations the winner is ${winner}`;
   msgeContainer.classList.remove("hide");
   disboxes();
}
const checkWinner =()=>{
    for(let patterns of winPatterns){
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;
        
        if(pos1Val!= "" && pos2Val!="" && pos3Val!=""){
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                shoWinner(pos1Val);
            }
        }

    }
}
resetBtn.addEventListener("click",resetGame);
newBtn.addEventListener("click",resetGame);


