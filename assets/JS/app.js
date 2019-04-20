
// add a function here that takes my search bar text and makes a button
//first create a listener that is looking at the submit buton next to the search bar
$(".submitBtn").on("click", function(){

   //create a button with class btn-info 
   var newButton = $("<button>");
   newButton.addClass("btn").addClass("btn-info");
   newButton.text($(".form-control").val());
   //set that buttons value to the text in the search bar
   $(".buttonGroup").append(newButton);
   //append that button to the div buttonGroup
})


// fucntion that takes whatever th etext is of my button and searches jquery for it
$(document).on("click", ".btn-info", function(){
    console.log("clicked");
    searchGiphy($(this).text());

})
//below is my search giphy function which runs when I click a button with the argument of the titile of that button

    var searchGiphy= function(search){
        var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=q3Jf5W8DlmFwyTKVeLoy1bQh7GH7tp0D&q="+search+"&limit=10&offset=0"
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method:"GET"
        })
        .then(function(response){
            console.log(response);
            console.log(response.data[0].images.original.url);
            //create variable to hold the gif url
            var gifURL= response.data[0].images.original.url;
            //make a new div with the class of card
            var newCard= $("<div>").addClass("card");
                    //make a new link that leads to the gif
            var newGif= $("<img>").attr("src", gifURL);
            newCard.append(newGif)//append our gif into the card
            $("#gifSection").prepend(newCard);// append our dynamically created card with a gif to our gif section

    // image_url
    // title

        })
    }
