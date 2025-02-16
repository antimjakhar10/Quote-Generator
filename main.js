const quotes = [
    {quote:  "The purpose of our lives is to be happy."},
    {quote:  "Life is what happens when you're busy making other plans."},
    {quote:  "Get busy living or get busy dying."},
    {quote:  "You only live once, but if you do it right, once is enough."},
    {quote:  "If you want to live a happy life, tie it to a goal, not to people or things."},
    {quote:  "Never let the fear of striking out keep you from playing the game."},
    {quote:  "In order to write about life first you must live it."},
    {quote:  "Turn your wounds into wisdom."},
    {quote:  "Change your thoughts and you change your world."},
    {quote:  "Life is in ourselves and not in the external."}
]

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').innerText = `"${randomQuote.quote}"`;
   
  }