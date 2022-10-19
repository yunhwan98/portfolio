/* menu show hidden*/
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close");

//Show
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//Hidden
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});

//Remove menu

//.nav_link 클릭시 메뉴 제거
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
