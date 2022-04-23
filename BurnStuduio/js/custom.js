var nav = document.getElementById("my-nav");
var btn = document.querySelector(".menu-btn");

var menuOpen = false;
btn.addEventListener("click", function () {
  if (menuOpen == false) {
    nav.style.right = "0%";
    menuOpen = true;
  } else if (menuOpen == true) {
    nav.style.right = "-80%";
    menuOpen = false;
  }
});
