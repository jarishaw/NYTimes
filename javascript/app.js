$(document).ready(function() {

	$("#").on("click", function() {

		var userInput = $("#").val();

		$.ajax({
			url: queryURL,
			method: "GET"

		})
		.done(function(response) {

		})
	});
});