$(document).ready(start);

var cities = ['NYC', 'SF', 'LA', 'ATX', 'SYD']
  
// for (var i = 0; i < cities.length; i++) {
// 	var item = '<option>' + cities[i] + '</option>';
// }

function start() {
	// $('#city-type').append(item);
	$(cities).each(addToSelect);
	$('#city-type').change(doSomething);
}

function doSomething() {
	var rawInput = $('#city-type').val();
	rawInput = rawInput.toLowerCase();
	$('body').attr('class', rawInput);
}

function addToSelect(index, element) {
	var html = '<option>' + element + '</option>'
	$('#city-type').append(html)
}



// function start() {
// 	$('#city-type').change(doSomething);
// }

// function doSomething() {
// 	var rawInput = $('#city-type').val();

// 	if(rawInput == 'NYC') {
// 		updateNYC();
// 	} else if(rawInput == 'SF') {
// 		updateSF();
// 	} else if(rawInput == 'LA') {
// 		updateLA();
// 	} else if(rawInput == 'ATX') {
// 		updateATX();
// 	} else if(rawInput == 'SYD') {
// 		updateSYD();
// 	}
// }
	



// function updateNYC() {
// 	$('body').css('background','url(images/nyc.jpg)');
// }

// function updateSF() {
// 	$('body').css('background','url(images/sf.jpg)');
// }

// function updateLA() {
// 	$('body').css('background','url(images/la.jpg)');
// }

// function updateATX() {
// 	$('body').css('background','url(images/austin.jpg)');
// }

// function updateSYD() {
// 	$('body').css('background','url(images/sydney.jpg)');
// }