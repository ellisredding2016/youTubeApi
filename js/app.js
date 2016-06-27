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
			html+="<p>" + snippet.snippet.title + "<p> <a href=\"https://www.youtube.com/watch?v=" + snippet.id.videoId + "\"> <img src=\"" + snippet.snippet.thumbnails.high.url + "\" alt=\"" + snippet.snippet.description + "\" style=\"height: 5rem;\"> </a>"
			//console.log(value.title);
		});
		$('#search-results').html(html);
	}

	//<a href="https://www.youtube.com/watch?v="snippet.id" > <img src="snippet1" alt = "snippet2" style="height: 5rem;"> </a>
});