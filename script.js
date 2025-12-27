const title = document.getElementById("title");
const menu = document.getElementById("menu");
const splash = document.getElementById("splash");
const game = document.getElementById("game");

const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

const popup = document.getElementById("resultPopup");
const popupWinner = document.getElementById("popupWinner");

const pvpBtn = document.getElementById("pvpBtn");
const pvcBtn = document.getElementById("pvcBtn");
const yesBtn = document.getElementById("yesBtn");
const quitBtn = document.getElementById("quitBtn");

let board = [];
let currentPlayer = "X";
let gameMode = null;
let gameActive = false;

/* ================= SPLASH TIMELINE ================= */

setTimeout(() => {
  title.classList.add("title-up");
  menu.classList.remove("hidden");
}, 3000);

/* ================= ENTER GAME ================= */

pvpBtn.onclick = () => startApp("pvp");
pvcBtn.onclick = () => startApp("pvc");

function startApp(mode){
  gameMode = mode;
  splash.style.opacity = "0";

  setTimeout(() => {
    splash.classList.add("hidden");
    game.classList.remove("hidden");
    startGame();
  }, 600);
}

/* ================= GAME LOGIC ================= */

const wins = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

cells.forEach(cell => {
  cell.addEventListener("click", () => handleClick(cell));
});

function startGame(){
  board = ["","","","","","","","",""];
  currentPlayer = "X";
  gameActive = true;
  statusText.innerText = "Player X turn";
  hidePopup();

  cells.forEach(c=>{
    c.innerText = "";
    c.className = "cell";
  });
}

function handleClick(cell){
  const i = cell.dataset.i;
  if(!gameActive || board[i] !== "") return;

  board[i] = currentPlayer;
  cell.innerText = currentPlayer;
  cell.classList.add(currentPlayer);

  if(checkEnd()) return;

  if(gameMode === "pvc"){
    currentPlayer = "O";
    statusText.innerText = "Computer thinking...";
    setTimeout(computerMove, 350);
  }else{
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.innerText = `Player ${currentPlayer} turn`;
  }
}

/* ================= COMPUTER AI (DEFENSIVE) ================= */

function computerMove(){
  if(!gameActive) return;

  let move = getBestBlockMove();

  if(move === null) return;

  board[move] = "O";
  cells[move].innerText = "O";
  cells[move].classList.add("O");

  if(!checkEnd()){
    currentPlayer = "X";
    statusText.innerText = "Player X turn";
  }
}

function getBestBlockMove(){
  // 1️⃣ BLOCK USER WIN (highest priority)
  for(let [a,b,c] of wins){
    let line = [board[a], board[b], board[c]];
    if(line.filter(v => v === "X").length === 2 && line.includes("")){
      if(board[a] === "") return a;
      if(board[b] === "") return b;
      if(board[c] === "") return c;
    }
  }

  // 2️⃣ TAKE CENTER
  if(board[4] === "") return 4;

  // 3️⃣ TAKE CORNERS
  const corners = [0,2,6,8];
  for(let i of corners){
    if(board[i] === "") return i;
  }

  // 4️⃣ TAKE EDGES
  const edges = [1,3,5,7];
  for(let i of edges){
    if(board[i] === "") return i;
  }

  return null;
}

/* ================= END CHECK ================= */

function checkEnd(){
  for(let [a,b,c] of wins){
    if(board[a] && board[a] === board[b] && board[a] === board[c]){
      gameActive = false;
      showPopup(`${board[a]} WON 🏆`);
      return true;
    }
  }

  if(!board.includes("")){
    gameActive = false;
    showPopup("DRAW 🤝");
    return true;
  }
  return false;
}

/* ================= POPUP CONTROL ================= */

function showPopup(text){
  popupWinner.innerText = text;
  popup.classList.remove("hidden");
}

function hidePopup(){
  popup.classList.add("hidden");
}

yesBtn.onclick = () => {
  hidePopup();
  startGame();
};

quitBtn.onclick = () => {
  hidePopup();
  location.reload();
};
