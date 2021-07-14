/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
*/

//TESTER DATA
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
};

$(document).ready(function() {
  
  const $tweet = createTweetElement(tweetData);
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  // $('#tweets-container').append($tweet); 
  // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  $('#tweet-container').append($tweet);



});


//-------FUNCTIONS------------------------------------------------------------------------------

const createTweetElement = function(tweetObject) {

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
  // document.body.innerHTML = htmlMarkup;
  // console.log(document.body.innerHTML); //entire page becomes htmlMarkup

  return $tweet;
};


