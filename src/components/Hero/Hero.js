import { loadComponent } from "../../js/utilities";

document.addEventListener("DOMContentLoaded", (event) => {
	loadComponent("hero", "./components/Hero/Hero.html").then(() => {
		loadComponent("offer-component", "./components/Offer/Offer.html");
	});
});
