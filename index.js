// Your code here
let dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#239234";

document.addEventListener("Keydown", function(e) {
  if (e.key == "ArrowLeft" ) {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
      dodger.style.left = `${left - 1}px`;
  }
});