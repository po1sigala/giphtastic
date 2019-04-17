
// add a function here that takes my search bar text and makes a button

// fucntion that takes whatever th etext is of my button and searches jquery for it
$(".btn").on("click", function(){
    searchGiphy($(this).text());

})
//below is my search giphy function which runs when I click a button with the argument of the titile of that button

    var searchGiphy= function(search){
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=q3Jf5W8DlmFwyTKVeLoy1bQh7GH7tp0D&q="+search+"&limit=10&offset=0"
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method:"GET"
    }).then(function(response){


    image_url
    title

        })
    }
