/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

//TESTER DATA
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

$(document).ready(function() {

  const rendered = renderTweets(data); //show all tweets from data
  // console.log(rendered);

});


//-------FUNCTIONS------------------------------------------------------------------------------

const createTweetElement = (tweetObject)=> {

  const {name, avatars, handle} = tweetObject.user
  const {text} = tweetObject.content
  
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
  arrayOfTweets.forEach(tweet => {
    //call for each to create DOM
    const $tweet = createTweetElement(tweet);
    // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    $('#tweet-container').append($tweet);
  });
};