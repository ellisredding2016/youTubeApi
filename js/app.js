$(document).ready(function(){
	var searchString = ""

	$("#button").click(function(){
		event.preventDefault();
		searchString = $("input").val();
		
		//console.log(searchString);
		queryOMDB(searchString);
	});

	function queryOMDB (searchString) {
		var params = {
			q: searchString,
			//r: 'json'
			part:'snippet',
			key: 'AIzaSyDmW14y9MBtvwZUFiw1PbxwDqBabKn8CI8'

		} 
		url = "https://www.googleapis.com/youtube/v3/search";

		$.getJSON(url, params, function(data){
	    	/*var myData = data;
	    	$.each(myData.items, function(index,snippet){
	    		console.log(snippet.snippet.title);
	    	});*/ 
	    showResults(data);
	  	});
	}

	function showResults(results){
		var html = "";
		$.each(results.items, function(index,snippet){
			html+= "<div class='row'> <h3 class='col-md-8 well'>" + snippet.snippet.title + "</h3>"
			html+= "<a class='col-md-4' href='https://www.youtube.com/watch?v=" + snippet.id.videoId + "'>"
			html+= "<img src='" + snippet.snippet.thumbnails.high.url 
			html+= "' alt='" + snippet.snippet.description 
			html+= "' style='height: 10rem; margin-top: 17px;'> </a></div><hr>"
			//console.log(value.title);
		});
		$('#search-results').html(html);
	}

	//<a href="https://www.youtube.com/watch?v="snippet.id" > <img src="snippet1" alt = "snippet2" style="height: 5rem;"> </a>
});