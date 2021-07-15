/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

$(document).ready(function() {

  $('.tweet-form').submit(function (event) {
    //prevents reloading  to another page when someone submits a tweet
    event.preventDefault();

    //serialized the form data
    const formData = $(this).serialize()

    //takes input value (Tweet) assigns to var after trimming extra spaces
    const inputText = escape($('#tweet-text').val().trim());
    
    if (!inputText) { //if tweet is "" or null
      return alert("Tweet was empty!")
    } else if (inputText.length > 140) {
      return alert("Tweet was over character limit!")
    }

    $.ajax({
      url: '/tweets', //path we're sending data to 
      type: 'POST', //post request 
      data: formData //serialized data
    })
    .then(()=>{
      $('#tweet-container').html(""); //HACK: clears whole screen and then load it
      loadTweets();//makes tweets show up on page without refreshing
    })

  });

  loadTweets(); //first time loading the page, shows tweets (per refresh)

});


//-------FUNCTIONS------------------------------------------------------------------------------

const createTweetElement = (tweetObject)=> {

  const {name, avatars, handle} = tweetObject.user
  const text = escape(tweetObject.content.text)//prevents users from hijacking site
  const timeSinceCreation = timeago.format(tweetObject.created_at);
  
  const htmlMarkup = `
    <article class="tweet">
      <header class="user-info">
        <div class="tweet-img-name">
          <img src=${avatars} >
          <span class="name">${name}</span>
        </div>
        <div class="tweet-handle">
          <span>${handle}</span>
        </div>
      </header>
      <p class="tweet-text">
        ${text}
      </p>
      <footer>
        <div class="tweet-footer">
          <span>${timeSinceCreation}</span>
          <div class="tweet-icons">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </div>
      </footer>
    </article>
  `;

  const $tweet = $(htmlMarkup)

  return $tweet;
};

const renderTweets = (arrayOfTweets) => {
  console.log("arrayOfTweets", arrayOfTweets)
  arrayOfTweets.forEach(tweet => {
    //call for each to create DOM
    const $tweet = createTweetElement(tweet);
    // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    $('#tweet-container').prepend($tweet);
  });
};

const loadTweets = function() {
  $.ajax({
    method: "GET",
    url: '/tweets',
  })
  .then(function (moreTweets) {
    // console.log('Success: ', moreTweets);
    renderTweets(moreTweets); //show all tweets from data
  })
}

const escape = function (str) {
  let div = document.createElement("div");//creates temp div 
  div.appendChild(document.createTextNode(str));//creating text for the string and appends to the div
  return div.innerHTML;//returns it
};