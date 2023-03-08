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

let circles = [2, 3, 2, 1, 3, 4, 3];

const GIT_CIRCLES = document.querySelectorAll(
  ".circle-container.git .circlebox .circle"
);
const HTML_CIRCLES = document.querySelectorAll(
  ".circle-container.html .circlebox .circle"
);
const JS_CIRCLES = document.querySelectorAll(
  ".circle-container.js .circlebox .circle"
);
const CPP_CIRCLES = document.querySelectorAll(
  ".circle-container.cpp .circlebox .circle"
);
const PROBLEM_CIRCLES = document.querySelectorAll(
  ".circle-container.problem .circlebox .circle"
);
const ATTENTION_CIRCLES = document.querySelectorAll(
  ".circle-container.attention .circlebox .circle"
);
const COMMUNICATION_CIRCLES = document.querySelectorAll(
  ".circle-container.communication .circlebox .circle"
);

changeCircleColor(0, GIT_CIRCLES);
changeCircleColor(1, HTML_CIRCLES);
changeCircleColor(2, JS_CIRCLES);
changeCircleColor(3, CPP_CIRCLES);
changeCircleColor(4, PROBLEM_CIRCLES);
changeCircleColor(5, ATTENTION_CIRCLES);
changeCircleColor(6, COMMUNICATION_CIRCLES);
