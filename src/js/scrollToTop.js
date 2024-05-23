// Define scrollToTop function in the global scope
window.scrollToTop = function () {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", (event) => {
	const scrollToTopButton = document.getElementById("scroll-to-top");
	const heroSection = document.querySelector(".hero");

	window.addEventListener("scroll", () => {
		if (window.scrollY > heroSection.clientHeight) {
			scrollToTopButton.style.display = "block";
		} else {
			scrollToTopButton.style.display = "none";
		}

		if (window.scrollY > heroSection.clientHeight) {
			heroSection.style.visibility = "hidden";
		} else {
			heroSection.style.visibility = "visible";
		}
	});
});
