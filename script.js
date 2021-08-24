const $ = e => document.querySelector(e);

const container = document.querySelectorAll('.container');

// animacao de loadpage
const animatedLoad = {
	inital() {
		container.forEach(elem => {
			elem.style.display = 'none';
		});
	},

	loadPage() {
		setTimeout(() => {
			container.forEach(elem => {
				elem.style.display = 'flex';
			});
			
			$('.load').style.display = 'none';
		}, 3000)
	}
}

animatedLoad.inital()
window.onload = animatedLoad.loadPage()