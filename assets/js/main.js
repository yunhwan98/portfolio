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

//Scroll 부분

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;
  console.log(scrollY);
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    console.log(sectionId);
    console.log(sectionId);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav_menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}
