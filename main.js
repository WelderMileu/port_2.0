const $ = e => document.querySelector(e);

const load_page = () => {
	$(".page").style.display = 'none'
	$(".load").style.display = 'flex'

	setTimeout(() => {
		$(".page").style.display = 'block'
		$(".load").style.display = 'none'
	}, 3000)
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
setTimeout(() => card_information.open(), 4000)
$('.close').addEventListener('click',() =>card_information.close())



