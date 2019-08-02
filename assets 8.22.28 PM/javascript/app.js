$(document).ready(function() {
  var genres = [
    "Rock",
    "Hip-Hop",
    "Country",
    "Pop",
    "EDM",
    "Indie",
    "Classical",
    "Blue Grass",
    "Jazz",
    "Heavy metal",
    "Folk",
    "Reggae"
  ];

  function searchBandsInTown(artist) {
    // Querying the bandsintown api for the selected artist, the ?app_id parameter is required, but can equal anything
    var queryURL =
      "https://rest.bandsintown.com/artists/" +
      artist +
      "?app_id=codingbootcamp";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // Printing the entire object to console
      console.log(response);

      // Constructing HTML containing the artist information
      var artistName = $("<h1>").text(response.name);
      var artistImage = $("<img>").attr("src", response.thumb_url);
      var upcomingEvents = $("<h2>").text(
        response.upcoming_event_count + " upcoming events"
      );

      // Empty the contents of the artist-div, append the new artist content
      $("#artist-div").empty();
      $("#artist-div").append(artistName, artistImage, upcomingEvents);
    });
  }

  // Event handler for user clicking the select-artist button
  $("#search-btn").on("click", function(event) {
    // Preventing the button from trying to submit the form
    event.preventDefault();
    // Storing the artist name
    var inputArtist = $("#artist")
      .val()
      .trim();
    // console.log(inputArtist);
    // Running the searchBandsInTown function(passing in the artist as an argument)
    searchBandsInTown(inputArtist);
  });
});
