// FixedOffer specific JavaScript

import "./FixedOffer.scss";

document.addEventListener("DOMContentLoaded", (event) => {
	const scrollToTopButton = document.getElementById("scroll-to-top");
	const heroSection = document.querySelector(".hero");

	window.addEventListener("scroll", () => {
		if (window.scrollY > heroSection.clientHeight) {
			scrollToTopButton.style.display = "block";
		} else {
			scrollToTopButton.style.display = "none";
		}
	});
});
