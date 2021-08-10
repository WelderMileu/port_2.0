const $ = e => document.querySelector(e);

const load_page = () => {
	$(".page").style.display = 'none'
	$(".load").style.display = 'flex'

	setTimeout(() => {
		$(".page").style.display = 'block'
		$(".load").style.display = 'none'
	
		// animation uning the gsap
		$('.banner_content').style.marginLeft = "-100px"
		gsap.to('.banner_content', { 
			duration: .5, 
			x: 100 
		});

		$('.banner_image').style.transform = "scale(0)"
		gsap.to('.banner_image', { 
			duration: 1.3,
			ease: "elastic. out( 1, 0.3)", 
			scale: 1, 
			delay: 1.2 
		});

	}, 3000);
}

const card_information = {
	init() {
		$('.message').style.display = "none";
		$('.message').style.opacity = 0;
		$('.message').style.paddingTop = "-500px";

		$('.message_card').style.opacity = 0;
		$('.message_card').style.display = "none";
  	},

  	open() {
  		$('.message').style.opacity = 1;
  		$('.message').style.display = "flex";
		
		setTimeout(() => {
			$('.message_card').style.opacity = 1;
			$('.message').style.paddingTop = "50px";
			$('.message_card').style.display = "flex";
		}, 500)
  	},

  	close() {
		$('.message').style.paddingTop = "1000px";
  				
		setTimeout(() => {
			$('.message').style.opacity = 0;
  			$('.message').style.display = "none";	
		}, 1000);	
  	}
}


window.onload = load_page()
card_information.init()
setTimeout(() => card_information.open(), 6000)
$('.close').addEventListener('click',() =>card_information.close())






