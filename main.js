const load = document.querySelector('.load');
const page = document.querySelector('.page')

// Loading the page
function load_page() {
	page.style.display = 'none'
	load.style.display = 'flex'

	setTimeout(() => {
		page.style.display = 'block'
		load.style.display = 'none'
	}, 3000)
}

// animated the right
function animate_right() {
	const right = document.querySelectorAll('.animate_right');
	const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);

	right.forEach(anima => {
		if ((windowTop) > anima.offsetTop) {
			anima.style.marginLeft = "0px"
			anima.style.opacity = 1	
		}
	})
}

window.addEventListener('scroll', animate_right)
window.onload = load_page()



