
$(document).ready(function(){
 var artist="cure"  
 var queryURL ="https://rest.bandsintown.com/artists/"+artist+"?app_id="+apiKey;
  console.log("working")
 $.ajax({
  method:"GET",
  url:queryURL
 }).then(function(responseData){
 console.log(responseData);
});

});