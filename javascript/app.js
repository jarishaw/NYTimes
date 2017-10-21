$(document).ready(function() {

	$("#searchButton").on("click", function() {

		var userInput = $("#searchTerm").val();
		console.log(userInput);

		var apiKey = "f4e6bf5aa66243ceb886bb4c95e101f2";
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=" + userInput;
		$.ajax({
			url: queryURL,
			method: "GET"
		})
		.done(function(response) {
			console.log(response);
			for(var i = 0; i < response.response.docs.length; i++) {
				console.log(response.response.docs[i]);
				var article = $("<div>");
				article.append(response.response.docs[i].headline.main);
				$("#articles").append(article);
			};
		});
	});

});