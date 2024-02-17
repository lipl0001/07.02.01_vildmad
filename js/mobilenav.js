const burger_icon = document.querySelector(".burger_icon");
const mobile_nav = document.querySelector("ul.mobile");

burger_icon.addEventListener("click", () => {
  burger_icon.classList.toggle("active");
  mobile_nav.classList.toggle("active");
});
