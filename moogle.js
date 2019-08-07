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
    var queryUrl = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/top?limit=10`;

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      for (var i = 0; i < response.data.length; i++) {
        tracklist.push({
          title: response.data[i].title,
          preview: response.data[i].preview
        });
      }
      console.log(tracklist);

      // console.log(responseData.tracklist)
      // results(responseData)
      results(name, tracklist);
    });
  }

<<<<<<< HEAD
  $(".search").on("click", function(event) {
=======
  



  $("#search").on("click", function(event) {
>>>>>>> 32c0dd8de4e6c9d138b25cd5aa6b3d7fb0c4c7ac
    event.preventDefault();
    $("#results").empty();
    //console.log('clicked')
    var userInput = $("#artist").val();
    console.log(userInput);
    getArtist(userInput);
    $("#results").show();
  });
});

function results(name = "", tracklist = []) {
<<<<<<< HEAD
  var resultsContainer = $("<div>");
  var name = $("<p>").text(name);
  // var tracklistStringrify = JSON.stringify(tracklist,null, 2);
  //  var tracklist = $("<p>").text(tracklistStringrify);
  var tracklistContainer = $("<div>");

  for (var i = 0; i < tracklist.length; i++) {
    var tracklistTitle = $("<p>").html(tracklist[i].title);
    // var tracklistPreview = $("<a>").html(tracklist[i].preview);
    // var tracklistPreview = $("<audio>").attr("controls");
    // var tracklistSource = $("<source>").attr("src", tracklist[i].preview).attr("type", "audio/ogg");
    // tracklistPreview.append(tracklistSource);
    // console.log('source',tracklistSource);
    //audio tag dosen't work in jquery so vanilla audio script
    var sound = document.createElement("audio");
    sound.id = "audio-player";
    sound.controls = "controls";
    sound.src = tracklist[i].preview;
    sound.type = "audio/mpeg";

    tracklistContainer.append(tracklistTitle).append(sound);
    // document.getElementById('results').appendChild(sound);
  }
=======
    var resultsContainer = $("<div>");
    
    var name = $("<p>").text(name);

    // var tracklistStringrify = JSON.stringify(tracklist,null, 2);
    //  var tracklist = $("<p>").text(tracklistStringrify);
    var tracklistContainer = $("<div>");
    
    for(var i=0; i < tracklist.length;i++) {
        var tracklistTitle = $("<p>").html(tracklist[i].title);
        // var tracklistPreview = $("<a>").html(tracklist[i].preview);
        // var tracklistPreview = $("<audio>").attr("controls");
        // var tracklistSource = $("<source>").attr("src", tracklist[i].preview).attr("type", "audio/ogg");
        // tracklistPreview.append(tracklistSource);
        // console.log('source',tracklistSource);
        //audio tag dosen't work in jquery so vanilla audio script 
        var sound = document.createElement('audio');
        sound.id = "audio-player";
        sound.controls = "controls";
        sound.src =  tracklist[i].preview;
        sound.type = "audio/mpeg";

        tracklistContainer.append(tracklistTitle).append(sound);
        // document.getElementById('results').appendChild(sound);

        
    }
    
>>>>>>> 32c0dd8de4e6c9d138b25cd5aa6b3d7fb0c4c7ac

  resultsContainer.append(name).append(tracklistContainer);
  $("#results").html(resultsContainer);
}
