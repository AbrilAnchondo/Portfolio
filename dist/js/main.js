const passionsContainer = document.querySelector("#passions");

const nav = document.querySelector("#navbar");

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
