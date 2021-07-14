$(document).ready(function() {

  $("#tweet-text").on('input', onInput);

});


const onInput = function() {
  //use function so that this properly refers to your element

  let tweet = $(this).val();//assigns value of this to text count

  //finds the difference between allowed chars and tweet length
  let charDiff = 140 - tweet.length;
  //finds the output tag from within textarea 
  const output = $(this).next().find('output');
  //assigns val to charDiff to keep track of chars
  output.val(charDiff);

  if (charDiff < 0) {//changes color if it's negative val
    $("output").css("color", "red");
  } else {
    $("output").css("color", "#545149");
  }
  
}