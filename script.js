const LINKS = document.querySelectorAll("a");
LINKS.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.textDecoration = "underline";
  });
  link.addEventListener("mouseleave", () => {
    link.style.textDecoration = "none";
  });
});

function changeCircleColor(num, CIRCLES) {
  for (let i = 0; i < circles[num]; i++) {
    CIRCLES[i].style.backgroundColor = "wheat";
  }
}

let circles = [5, 4, 5, 3];

const COMPUTER_CIRCLES = document.querySelectorAll(".computer .circle");
const PROBLEM_CIRCLES = document.querySelectorAll(".problem .circle");
const ATTENTION_CIRCLES = document.querySelectorAll(".attention .circle");
const COMMS_CIRCLES = document.querySelectorAll(".comms .circle");

changeCircleColor(0, COMPUTER_CIRCLES);
changeCircleColor(1, PROBLEM_CIRCLES);
changeCircleColor(2, ATTENTION_CIRCLES);
changeCircleColor(3, COMMS_CIRCLES);
