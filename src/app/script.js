const btnHamburger = document.querySelector("#hamburger");
const header = document.querySelector(".header");
const fadeElems = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", () => {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
    body.className = "";
    fadeElems.forEach((fadeElement) => {
      fadeElement.classList.remove("fade-in");
      fadeElement.classList.add("fade-out");
    });
  } else {
    body.className = "no-scroll";
    header.classList.add("open");
    fadeElems.forEach((fadeElement) => {
      fadeElement.classList.add("fade-in");
      fadeElement.classList.remove("fade-out");
    });
  }
});
