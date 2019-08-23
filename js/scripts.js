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

	// console.log(days + ':' + hours + ':' + minutes + ':' + seconds)

	}, 1000);
	
		



		// console.log('toDate:' + toDate);
		// console.log('now:' + now);
		// console.log(delta);

	// Start
	
	
	// 3. Poschitat' skolko celyh dney v delte i vivesti v kvadrat dney
	// End

	// 7. Prodelat deystvie 2-6 kazduy secundu

	let options = [
		{
			endpoint:'https://reqres.in/api/users',
			count   : 6,
			target  : 'competitorsUsers',
			class   : null
		},
		{
			endpoint:'https://reqres.in/api/users?page=2',
			count   : 3,
			target  : 'userJury',
			class   : 'user__img-box--round',
		}
	];

	options.forEach(function(option){
		loadUsers(option)
	})


function loadUsers(opt){
	let xhr = new XMLHttpRequest(); 

	xhr.open('GET', opt.endpoint);
	xhr.responseType = 'json';
	xhr.send();

	xhr.onload = function() {
	  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
	    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
	  } else { // если всё прошло гладко, выводим результат
	  	console.log(xhr.response);

		let target = document.getElementById(opt.target),
			users  = xhr.response.data.splice(0, opt.count);

	  	users.forEach(function(user){
	  		// console.log(user.last_name, user.first_name, user.avatar)

	  		let html = `
	  					<div class="user">
						<div class="user__img-box" ${opt.class}>
							<img src="${user.avatar}" alt="" class="user__img">
						</div>
						<div class="user__name">
							${user.first_name} ${user.last_name} 
						</div>
					
						<div class="user__pos">
							${user.email}
						</div>
					</div>`;

			target.innerHTML = target.innerHTML + html;
	  	})}
	  	console.log(xhr)

		xhr.onerror = function() {
	  alert("Запрос не удался");
};
};



};

// (function loadJury(){
// 	let xhr = new XMLHttpRequest(); 

// 	xhr.open('GET', 'https://reqres.in/api/users?page=2');
// 	xhr.responseType = 'json';
// 	xhr.send();

// 	xhr.onload = function() {
// 	  if (xhr.status != 200) { // анализируем HTTP-статус ответа, если статус не 200, то произошла ошибка
// 	    alert(`Ошибка ${xhr.status}: ${xhr.statusText}`); // Например, 404: Not Found
// 	  } else { // если всё прошло гладко, выводим результат
// 	  	console.log(xhr.response);

// 		let target = document.getElementById('userJury');
// 		let users = xhr.response.data.splice(0, 3);

// 	  	users.forEach(function(user, index){
// 	  		// console.log(user.last_name, user.first_name, user.avatar)
// 	  		if (index < 3){
// 	  			  		let html = `
// 	  			  					<div class="user">
// 	  								<div class="user__img-box user__img-box--round">
// 	  									<img src="${user.avatar}" alt="" class="user__img">
// 	  								</div>
// 	  								<div class="user__name">
// 	  									${user.first_name} ${user.last_name} 
// 	  								</div>
// 	  								<div class="user__pos">
// 	  									Creative Director
// 	  								</div>
// 	  							</div>`;
	  		
// 	  					target.innerHTML = target.innerHTML + html;
// 	  		}
// 	  	})}
// };

// console.log(xhr)

// xhr.onerror = function() {
//   alert("Запрос не удался");
// };

// })();

});
