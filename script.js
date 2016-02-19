//////////////////////////
////GLOBAL VARIABLES/////
////////////////////////

var waitForHover;

//////////////////////////
///WHEN DOCUMENT LOADS///
////////////////////////

$(function(){
  $('body').on('mouseenter', '.smallTitleCard', getRating);
  $('body').on('mouseleave', '.smallTitleCard', mouseLeftMovie);
});


//////////////////////////
///////FUNCTIONS/////////
////////////////////////

function getRating(){
  var movieTitle = $(this).attr('aria-label');

  waitForHover = setTimeout(function(){
    $.ajax({
      url: 'http://www.omdbapi.com/?t=' + movieTitle + '&y=&plot=short&r=json',
      success: function(response){
        var imdbRat = response.imdbRating;
        console.log(imdbRat);
        $('body').append('<div class="imdbrating">IMDB Rating: '+imdbRat+'</div>');
      },
      error: function(){
        console.log('error');
      }
    });
  }, 1000);
}

function mouseLeftMovie(){
    $('.imdbrating').remove();
    clearTimeout(waitForHover);
};
