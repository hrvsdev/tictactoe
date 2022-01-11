const signArray = document.querySelectorAll(".main-box");
const reset = document.querySelector('.reset')
const text = document.querySelector('.text')
const dark = document.querySelector('.dark')
const mainBox = document.querySelectorAll('.main-box')

const winText = document.querySelector('.win-text')
let winSound = new Audio('Sounds/win.mp3')
let clickSound = new Audio('Sounds/click.wav')

let turn = "X";

function changeTurn() {
  if (turn === "X") {
    return (turn = "O");
  } else {
    return (turn = "X");
  }
}

const win = function () {
  return signArray.forEach((element, index) => {
    if (turn === "X") {
      winText.textContent = "Player O has won";
      element.textContent = "";
      winSound.play()
    } else {
      winText.textContent = "Player X has won";
      element.textContent = "";
      winSound.play()
    }
  });
};

function checkWin() {
  if (
    signArray[0].textContent === signArray[1].textContent &&
    signArray[1].textContent === signArray[2].textContent &&
    signArray[2].textContent !== ""
  ) {
    win();
  }
  if (
    signArray[3].textContent === signArray[4].textContent &&
    signArray[4].textContent === signArray[5].textContent &&
    signArray[5].textContent !== ""
  ) {
    win();
  }
  if (
    signArray[6].textContent === signArray[7].textContent &&
    signArray[7].textContent === signArray[8].textContent &&
    signArray[8].textContent !== ""
  ) {
    win();
  }
  if (
    signArray[0].textContent === signArray[3].textContent &&
    signArray[3].textContent === signArray[6].textContent &&
    signArray[6].textContent !== ""
  ) {
    win();
  }
  if (
    signArray[1].textContent === signArray[4].textContent &&
    signArray[4].textContent === signArray[7].textContent &&
    signArray[7].textContent !== ""
  ) {
    win();
  }
  if (
    signArray[2].textContent === signArray[5].textContent &&
    signArray[5].textContent === signArray[8].textContent &&
    signArray[8].textContent !== ""
  ) {
    win();
  }
  if (
    signArray[0].textContent === signArray[4].textContent &&
    signArray[4].textContent === signArray[8].textContent &&
    signArray[8].textContent !== ""
  ) {
    win();
  }
  if (
    signArray[2].textContent === signArray[4].textContent &&
    signArray[4].textContent === signArray[6].textContent &&
    signArray[6].textContent !== ""
  ) {
    win();
  }
}

signArray.forEach((sign) => {
  sign.addEventListener("click", () => {
    sign.textContent = turn;
    clickSound.play()
    changeTurn();
    checkWin();
  });
});

reset.addEventListener('click', ()=>{
  signArray.forEach((element) => {
    element.textContent = ""
    }
  )
})

dark.addEventListener('click', ()=>{
  document.body.style.backgroundColor = 'black'
  mainBox.forEach(border=>{
    border.style.borderColor = 'white'
    border.style.color = 'white'
  })
  winText.style.color = 'white'
  text.style.color = 'white'
  reset.style.borderColor = 'white'
  dark.style.borderColor = 'white'

})

