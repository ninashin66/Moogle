$(document).ready(function() {
  var name = "";
  var tracklist = [];

  function getArtist(searcBtn) {
    var queryUrl =
      "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" +
      searcBtn;

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(responseData) {
      console.log(responseData);
      name = responseData.name;

      getTracklist(responseData.id);

      // console.log(responseData.tracklist)
      
    });
  }

  function getTracklist(id) {
    var queryUrl =
    `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top?limit=10`

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      
      for(var i=0;i < response.data.length; i++){
         tracklist.push({title:response.data[i].title,preview :response.data[i].preview });
      }
      console.log(tracklist);
      
      // console.log(responseData.tracklist)
      // results(responseData)
      results(name, tracklist);
    });
  }

  



  $(".search-btn").on("click", function(event) {
    event.preventDefault();
    //console.log('clicked')
    var userInput = $(".main-search").val();
    console.log(userInput);
    getArtist(userInput);
  });

 
});

function results(name = "", tracklist = []) {
    var resultsContainer = $("<div>");
    var name = $("<p>").text(name);

    // var tracklistStringrify = JSON.stringify(tracklist,null, 2);
    //  var tracklist = $("<p>").text(tracklistStringrify);
    var tracklistContainer = $("<div>");
    
    for(var i=0; i < tracklist.length;i++) {
        var tracklistTitle = $("<p>").html(tracklist[i].title);
        var tracklistPreview = $("<p>").html(tracklist[i].preview);

        tracklistContainer.append(tracklistTitle).append(tracklistPreview);
    }
    

    resultsContainer.append(name).append(tracklistContainer);
    $("#results").append(resultsContainer);
  }