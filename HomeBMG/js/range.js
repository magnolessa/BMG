
// With JQuery
$("#ex6").slider();
$("#ex6").on("slide", function(slideEvt) {
	$("#ex6SliderVal").text(slideEvt.value);
});

$("#ex7").slider();
$("#ex7").on("slide", function(slideEvt) {
	$("#ex7SliderVal").text(slideEvt.value);
});

// $("#ex13").slider({
// 	reversed : true,
// 	ticks: [0, 25, 50, 100],
// 	ticks_labels: ['Nenhuma', 'Até de 25%', 'Entre 25% e 50%', 'Acima de 50%'],
// 	ticks_snap_bounds: 30
// });


// var slider = new Slider("#ex13", {
//     ticks: [0, 100, 50, 25, 0],
//     ticks_labels: ['100', 'Acima de 50%', 'De 25% a 50%', 'Até 25%', 'Nenhuma'],
//     ticks_snap_bounds: 30
// });

// Without JQuery
// var slider = new Slider("#ex6");
// slider.on("slide", function(sliderValue) {
// 	document.getElementById("ex6SliderVal").textContent = sliderValue;
// });