const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", 40 < window.scrollY);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  navlist.classList.toggle("open");
  if (90 > window.scrollY) {
    header.classList.toggle("sticky");
  }
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

const topo = document.getElementById("top");

window.addEventListener("scroll", function () {
  topo.classList.toggle("show-top", 140 < window.scrollY);
  topo.classList.toggle("hide-top", 140 > window.scrollY);
});

window.onload = () => {
  topo.classList.toggle("hide-top");
};
