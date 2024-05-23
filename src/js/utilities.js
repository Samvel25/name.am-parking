// Utility function to load HTML components
export function loadComponent(id, url) {
	return fetch(url)
		.then((response) => response.text())
		.then((html) => {
			const element = document.getElementById(id);
			if (element) {
				element.innerHTML = html;
			} else {
				console.error(`Element with id ${id} not found.`);
			}
		})
		.catch((error) => console.error(`Error loading component ${url}:`, error));
}
