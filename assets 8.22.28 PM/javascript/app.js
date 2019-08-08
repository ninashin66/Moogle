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

      var artistFacebook = $("<a>").attr(
        "href",
        responseData.facebook_page_url
      );

      artistFacebook.add("i").addClass("fab fa-facebook fb-icon fa-5x");
      artistFacebook.addClass("artist-fb");
      var upcomingEvents = $("<h2>").text(
        responseData.upcoming_event_count +
          " upcoming events, click below to see where and when"
      );
      upcomingEvents.addClass("upcomingEvents");
      var goToArtist = $("<a>")
        .attr("href", responseData.url)
        .text("See Tour Dates");
      goToArtist.addClass("seeTour");
      // var fbIcon = $("<i>").attr("href", "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
      // fbIcon.addClass("fab fa-facebook");
      var upcomingEvents = $("<h2>")
        .text(responseData.upcoming_event_count + " upcoming events")
        .attr("class", "events");

      $(".content").append(
        artistName,
        artistImage,
        artistFacebook,
        upcomingEvents,
        goToArtist
      );
    });
  }



  $("#search").on("click", function(event) {
    event.preventDefault();

    $(".content").empty();

    var artist = $("#artist").val();
    // artist = artist.replace(" ", "-");
    console.log(artist);
    
    console.log(artist);
    if (artist) {
      getTourDateInfo(artist);
    }

    $("header").attr("id", "small-head");
    $("p").attr("id", "subtitle");
    $("h1").removeAttr("id");
    $("#search-bar").removeAttr("class");
    $("#search-bar").attr(
      "class",
      "input-group input-group-sm search-bar-small"
    );
    $("#search").removeAttr("class");
    $("#search").attr("class", "search-btn-small");
    $(".content").show();
  });
  
  

  // $("#artist").on("click", function(event) {
    
  //   // $(".container").empty();
  //   // $("#results").empty();
  // $("#artist").val(" ");
  // });
});
