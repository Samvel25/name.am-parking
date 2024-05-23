import "bootstrap/dist/js/bootstrap.bundle";
import "../scss/styles.scss";

// Import component JavaScript
import "../components/Header/Header.js";
import "../components/Hero/Hero.js";
import "../components/Benefits/Benefits.js";
import "../components/SuggestedDomains/SuggestedDomains.js";
import "../components/FixedOffer/FixedOffer.js";

// Import utilities
import { loadComponent } from "./utilities";

// Define the scrollToTop function globally
window.scrollToTop = function () {
	window.scrollTo({ top: 0, behavior: "smooth" });
};

document.addEventListener("DOMContentLoaded", (event) => {
	loadComponent("header", "./components/Header/Header.html");
	loadComponent("hero", "./components/Hero/Hero.html");
	loadComponent("benefits", "./components/Benefits/Benefits.html");
	loadComponent(
		"suggested-domains",
		"./components/SuggestedDomains/SuggestedDomains.html"
	);
	loadComponent("scroll-to-top", "./components/FixedOffer/FixedOffer.html");
});
