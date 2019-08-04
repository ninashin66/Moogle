$(document).ready(function() {
  $(".content").hide();

  function getTourDateInfo(searchTerm) {
    // var artist = "";
    
    var queryURL =
      "https://rest.bandsintown.com/artists/" +
      searchTerm +
      "?app_id=" +
      apiKey;
    console.log("working");
    $.ajax({
      method: "GET",
      url: queryURL
    }).then(function(responseData) {
      console.log(responseData);
      var artistImage = $("<img>").attr("src", responseData.thumb_url);
      artistImage.addClass("band-image");
      var artistName = $("<h2>").text(responseData.name);
      artistName.addClass("artistName");
      var artistFacebook = $("<a>").attr("href", responseData.facebook_page_url).text("Facebook");
      artistFacebook.addClass("artist-fb");
      var upcomingEvents = $("<h2>").text(responseData.upcoming_event_count + " upcoming events");
      var goToArtist = $("<a>").attr("href", responseData.url).text("See Tour Dates");
      // var fbIcon = $("<i>").attr("href", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
      // fbIcon.addClass("fab fa-facebook");
      
      $(".content").append(artistName, artistImage, artistFacebook, upcomingEvents, goToArtist);
    });
  }

  $("#search").on("click", function(event) {
    event.preventDefault();
    $(".content").empty();

    var artist = $("#artist").val();
    console.log(artist);
    if (artist) {
      getTourDateInfo(artist);
    }

    $(".content").show();
  });
});
