let boxes = document.querySelectorAll(".box");
let reset_button = document.querySelector("#reset-button"); 
let newgamebutton = document.querySelector(".new-button");
let msgcontainer = document.querySelector(".msg-container");

let turnO = true; // o or x
const windPatters = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

const resetGame = () => {
  turnO = true;
  disableBoxes(); 
  enableBoxes(); 
  msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkwinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
    box.innerText = "";
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
  }
};

const showWinner = (winner) => { 
  msgcontainer.innerText = `Congratulations, Winner ${winner}`; 
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

const checkwinner = () => {
  for (let pattern of windPatters) {
    let pos1vale = boxes[pattern[0]].innerText;
    let pos2vale = boxes[pattern[1]].innerText;
    let pos3vale = boxes[pattern[2]].innerText;

    if (pos1vale !== "" && pos2vale !== "" && pos3vale !== "") {
      if (pos1vale === pos2vale && pos2vale === pos3vale) { 
        console.log("Winner", pos1vale);
        showWinner(pos1vale);
      }
    }
  }
};

newgamebutton.addEventListener("click", resetGame);
reset_button.addEventListener("click", resetGame); 
