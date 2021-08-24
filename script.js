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
			
			const banner = document.querySelectorAll('.banner .content h3');
			let time = 2000

			banner.forEach(elem => {
				anime({
					targets: elem,
					translateX: 250,
					duration: time
				})	

				time +=400;
			})
			

		}, 3000)

	}
}

animatedLoad.inital()
window.onload = animatedLoad.loadPage()