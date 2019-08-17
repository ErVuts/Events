$(document).ready(function(){
	'use strick';


	$('.slider').slick({
	arrows   : false,
	dots     : false,
	autoplay : true,
	fade     : true,
	
	});

	let toDate = new Date('2019-09-07 16:00:00'); // 1. kogda sobytie

	let countdown = setInterval(function(){

	let	now    = new Date(),                     // ceychas
		delta  = parseInt((toDate - now) / 1000);
		if (delta <= 0){
			clearInterval(countdown);
		}else{

					// 2. Poluchit' raznicu (deltu) vo vremeni mejdu seychas i sobytiem
	let days = Math.floor(delta / (24 * 60 * 60));
	$('#days').text(days.toString().length == 1 ? '0' + days : days);
	// console.log(days)
	// 3a. Vichest dni iz delta
	delta -= days * (24 * 60 * 60);
	// console.log(delta)
	// 4. skolko celyh chasov v delte i vivesti v kvadrat chasov
	let hours = Math.floor(delta / (60 * 60));
	$('#hours').text(hours);
	// console.log(hours)
	// 4a. Vichest chasi iz delty
	delta -= hours * (60 * 60);
	// 5. minut (minuty iz delty) 6. sekund (sekundy iz delty)
	let minutes = Math.floor(delta / 60);
	$('#minutes').text(minutes);
	delta -= minutes * 60;

	let seconds = delta;
	$('#seconds').text(seconds.toString().length == 1 ? '0' + seconds : seconds);
		}

	console.log(days + ':' + hours + ':' + minutes + ':' + seconds)

	}, 1000)
	
		



		// console.log('toDate:' + toDate);
		// console.log('now:' + now);
		// console.log(delta);

	// Start
	
	
	// 3. Poschitat' skolko celyh dney v delte i vivesti v kvadrat dney
	// End

	// 7. Prodelat deystvie 2-6 kazduy secundu

});
