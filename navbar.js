console.log("h")
const nav = document.querySelector(".nav");
const hamburger = document.querySelector("#hamburger");
const menuItems = document.querySelectorAll(".nav-link");

menuItems.forEach((menuItem) => {
	menuItem.addEventListener("click", toggleHamburger);
});

hamburger.addEventListener("click", toggleHamburger);

function toggleHamburger() {
	nav.classList.toggle("showNav");
	if (hamburger.getAttribute("aria-expanded") == "false") {
		hamburger.setAttribute("aria-expanded", "true");
	} else {
		hamburger.setAttribute("aria-expanded", "false");
	}
}