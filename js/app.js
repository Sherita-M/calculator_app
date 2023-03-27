/** @format */

const displayArea = document.getElementById("main-display");
const keypad = document.querySelectorAll("input");

console.log(keypad);

function getValue() {
  let value = (document.getElementById("display").value = "");
  displayArea.innerHTML = value;
  return;
}

keypad.addEventListener("click", getValue);

// Get input value on click
// Run function that adds the input value to the main-display
