import "./Footer.scss";
document.addEventListener("DOMContentLoaded", function () {
	const buyNowRadio = document.getElementById("buyNow");
	const makeOfferRadio = document.getElementById("makeOffer");
	const offerInputGroup = document.getElementById("offer-input-group");
	const buyNowButton = document.getElementById("buyNowButton");
	const makeOfferButton = document.getElementById("makeOfferButton");

	function toggleOptions() {
		if (buyNowRadio.checked) {
			offerInputGroup.classList.add("d-none");
			buyNowButton.classList.remove("d-none");
			makeOfferButton.classList.add("d-none");
		} else {
			offerInputGroup.classList.remove("d-none");
			buyNowButton.classList.add("d-none");
			makeOfferButton.classList.remove("d-none");
		}
	}

	buyNowRadio.addEventListener("change", toggleOptions);
	makeOfferRadio.addEventListener("change", toggleOptions);

	toggleOptions(); // Initialize the correct view
});
