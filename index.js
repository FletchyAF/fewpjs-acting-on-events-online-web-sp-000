// Your code here
let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#239234";

function moveDodgerLeft() {
  let leftNumbers = dodger.style.left.replace("px", "");
  let left = parseInt(leftNumbers, 10);
  
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  let rightNumbers = dodger.style.left.replace("px", "");
  let right = parseInt(leftNumbers, 10);
  
  if (left < 0 ) {
    dodger.style.left = `${left + 1}px`;
  }
}

document.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});