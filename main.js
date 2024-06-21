const menuBg = document.querySelector(".menu-bg");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const ul = document.querySelector("ul");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

open.addEventListener("click", () => {
  menuBg.style.transform = "translateX(0)";
  ul.style.display = "flex";
  body.style.overflow = "hidden";
  overlay.style.display = "block";
});

close.addEventListener("click", () => {
  menuBg.style.transform = "translateX(100%)";
  overlay.style.display = "none";
  ul.style.display = "none";
});


overlay.addEventListener("click", () => {
  overlay.style.display = "none";
});
