const btns = document.querySelectorAll(".btns");
const replay = document.getElementById("replayBtn");
const accordionPanel = document.getElementById("accordion-panel");
const accordionContent = document.getElementById("accordion-content");
const accordionArrow = document.getElementById("accordion-arrow");

const playerDisplay = document.getElementById("playerDisplay");
const compDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

let player;
let comp;
let result;
let dont = true;
let playagain = "";

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (dont) {
      dont = false;
      player = btn.textContent;
      console.log(player);
      computerTurn();
      playerDisplay.textContent += ` ${player}`;
      compDisplay.textContent += ` ${comp}`;
      result = roundResult();
      resultDisplay.textContent = result;
    }
  })
);

replay.addEventListener("click", () => {
  if (!dont) {
    dont = true;
    playerDisplay.innerHTML = "";
    compDisplay.innerHTML = "";
    resultDisplay.innerHTML = "select";
  }
});

function computerTurn() {
  let randomNum = Math.floor(Math.random() * 3 + 1);

  switch (randomNum) {
    case 1:
      comp = "Rock";
      break;
    case 2:
      comp = "Paper";
      break;
    case 3:
      comp = "Scissors";
      break;
    default:
      console.log(comp);
  }
}

function roundResult() {
  if (player == comp) {
    return "Draw";
  } else if (comp == "Rock") {
    return player == "Paper" ? "you win" : "you lose";
  } else if (comp == "Paper") {
    return player == "Scissors" ? "you win" : "you lose";
  } else if (comp == "Scissors") {
    return player == "Rock" ? "you win" : "you lose";
  }
}

accordionPanel.addEventListener("click", () => {
  accordionContent.classList.toggle("open");
  accordionArrow.classList.toggle("rotate");
});
