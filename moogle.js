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

  $("#search").on("click", function(event) {
    event.preventDefault();

    //console.log('clicked')
    var userInput = $("#artist").val();
    userInput = userInput.replace(" ", "-");
    console.log(userInput);
    getArtist(userInput);
    $("#results").show();
  });

  $("#artist").on("click", function() {
    console.log("clicked");
    // $("#artist").val(" ");
    $(".content").empty();
    $("#results").empty();
    tracklist = [];
    //
    $("#results").hide();
  });

  $("#artist").on("click", function() {
    console.log("clicked");
    $(".content").empty();
    $("#results").empty();
    tracklist = [];
    $(".content").hide();
  });
});

function results(name = "", tracklist = []) {
  var resultsContainer = $("<div>");

  var name = $("<p class='tracks'>");

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

  resultsContainer.append(name).append(tracklistContainer);
  $("#results").html(resultsContainer);
}
