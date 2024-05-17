const tweetForm = document.querySelector("#tweetForm");
const tweetsContainer = document.querySelector("#postedTweets");

tweetForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = "";
    tweetInput.value = "";
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement("li");
    const boldTag = document.createElement("b");
    boldTag.append(username);
    newTweet.append(boldTag);
    newTweet.append(` - ${tweet}`)
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener("click", function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
})