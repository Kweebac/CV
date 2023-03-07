const LINKS = document.querySelectorAll("a");
LINKS.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    link.style.textDecoration = "underline";
  });
  link.addEventListener("mouseleave", () => {
    link.style.textDecoration = "none";
  });
});
