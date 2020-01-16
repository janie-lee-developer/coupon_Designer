// JavaScript Document

var colorPicker = document.getElementById("colorPicker");
var output = document.getElementById("output");


output.style.borderColor = colorPicker.value;

colorPicker.addEventListener("input", function(event) {
	output.style.borderColor = event.target.value;
}, false);

