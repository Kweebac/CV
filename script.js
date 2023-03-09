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

let circles = [3, 4, 2, 2, 4, 5, 3];

const GIT_CIRCLES = document.querySelectorAll(".git .circle");
const HTML_CIRCLES = document.querySelectorAll(".html .circle");
const JS_CIRCLES = document.querySelectorAll(".js .circle");
const CPP_CIRCLES = document.querySelectorAll(".cpp .circle");
const PROBLEM_CIRCLES = document.querySelectorAll(".problem .circle");
const ATTENTION_CIRCLES = document.querySelectorAll(".attention .circle");
const COMMS_CIRCLES = document.querySelectorAll(".comms .circle");

changeCircleColor(0, GIT_CIRCLES);
changeCircleColor(1, HTML_CIRCLES);
changeCircleColor(2, JS_CIRCLES);
changeCircleColor(3, CPP_CIRCLES);
changeCircleColor(4, PROBLEM_CIRCLES);
changeCircleColor(5, ATTENTION_CIRCLES);
changeCircleColor(6, COMMS_CIRCLES);
