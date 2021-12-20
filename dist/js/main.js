//select elements from the Dom
// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');
// const menuNav = document.querySelector('.menu-nav');
// const menuBranding = document.querySelector('.menu-branding');
// const navItems = document.querySelectorAll('.nav-item');
const passionsContainer = document.querySelector("#passions");

const nav = document.querySelector("#navbar");

//this is to chage the state of the menu
// let showMenu = false;

//menuBtn.addEventListener("click", toggleMenu);

// function toggleMenu() {
//   if (!showMenu) {
//     showMenu = true;
//     menuBtn.classList.add("close");
//     menu.classList.add("show");
//     menuNav.classList.add("show");
//     menuBranding.classList.add("show");
//     navItems.forEach((item) => item.classList.add("show"));
//   } else {
//     showMenu = false;
//     menuBtn.classList.remove("close");
//     menu.classList.remove("show");
//     menuNav.classList.remove("show");
//     menuBranding.classList.remove("show");
//     navItems.forEach((item) => item.classList.remove("show"));
//   }
// }

window.onscroll = function () {
  if (document.body.scrollTop > 100) {
    nav.classList.remove("top");
  } else {
    nav.classList.add("top");
  }
};

passionsContainer.addEventListener("click", function (e) {
  console.log(e.target);
  const overlay = e.target.closest(".overlay");
  if (overlay) {
    overlay.classList.toggle("show");
  }
});
