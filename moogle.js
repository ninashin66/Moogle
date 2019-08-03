$(document).ready(function(){

    function getArtist(searcBtn) {

       var queryUrl= "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/"+searcBtn;
        
    $.ajax({
        url: queryUrl, 
        method: "GET",

    }).then(function(responseData){
        console.log(responseData)

    })
    }
    getArtist("sia")
})