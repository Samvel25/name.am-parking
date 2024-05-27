import { loadComponent } from "../../js/utilities";
import { initializeOfferComponent } from "../../components/Offer/Offer";

document.addEventListener("DOMContentLoaded", (event) => {
	loadComponent("hero", "./components/Hero/Hero.html").then(() => {
		loadComponent("offer-component", "./components/Offer/Offer.html").then(
			() => {
				initializeOfferComponent(); // Initialize the Offer component after its HTML is loaded
			}
		);
	});
});
