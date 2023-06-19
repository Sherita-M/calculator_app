/** @format */

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonValue = button.textContent;
  });
});

console.log(buttons);

// Get input value on click
// Run function that adds the input value to the main-display
