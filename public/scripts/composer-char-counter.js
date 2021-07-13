$(document).ready(function() {
  console.log("within")


  $("#tweet-text").on('input', function() {
    //use function so that this properly refers to your element

    let tweet = $(this).val();//assigns value of this to text count

    //finds the difference between allowed chars and tweet length
    let charDiff = 140 - tweet.length;

    $('.counter').val(charDiff);//assigns val to charDiff

    if (charDiff < 0) {//changes color if it's negative val
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "#545149");
    }
  })

});
