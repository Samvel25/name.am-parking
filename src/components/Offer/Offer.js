function initializeOfferComponent() {
	const buyNowRadio = document.getElementById("buyNow");
	const makeOfferRadio = document.getElementById("makeOffer");
	const offerInputGroup = document.getElementById("offer-input-group");
	const buyNowButton = document.getElementById("buyNowButton");
	const makeOfferButton = document.getElementById("makeOfferButton");
	const offBorder = document.getElementById("offBorder");
	const offBorderTwo = document.getElementById("offBorderTwo");
	const purchasingOptionBg = document.getElementById("purchasingOptionBg");

	if (
		!buyNowRadio ||
		!makeOfferRadio ||
		!offerInputGroup ||
		!buyNowButton ||
		!makeOfferButton ||
		!offBorder ||
		!offBorderTwo ||
		!purchasingOptionBg
	) {
		console.error("Offer component elements not found.");
		return;
	}

	function toggleOptions() {
		if (buyNowRadio.checked) {
			offerInputGroup.classList.add("d-none");
			buyNowButton.classList.remove("d-none");
			makeOfferButton.classList.add("d-none");
			offBorder.classList.remove("border-0");
			offBorderTwo.classList.remove("border-0");
			purchasingOptionBg.classList.remove("purchasing-option-bg", "pb-4");
		} else {
			offerInputGroup.classList.remove("d-none");
			buyNowButton.classList.add("d-none");
			offBorder.classList.add("border-0");
			offBorderTwo.classList.add("border-0");
			purchasingOptionBg.classList.add("purchasing-option-bg", "pb-4");

			makeOfferButton.classList.remove("d-none");
		}
	}

	buyNowRadio.addEventListener("change", toggleOptions);
	makeOfferRadio.addEventListener("change", toggleOptions);

	toggleOptions(); // Initialize the correct view
}

// Export the initialize function so it can be called after loading the HTML
export { initializeOfferComponent };
