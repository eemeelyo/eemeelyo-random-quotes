
var quotes = {
  "John Lennon" : 'Imagine all the people, living for today',
  "Queen" : 'Mama, Just killed a Man...',
  "Beatles" : 'Yesterday, all my troublesseemed so far away!',
  "Simon and Garfunkel" : 'Hello Darkness my old friend',
  "ColdPlay" : 'Look at the stars, look how they shine on you',
  "REM" : 'Oh.. Life, its bigger, its bigger of you or not me.',
  "Guns N Roses" : 'Woh oh! oh! Sweet child of mine',
  "John Fogerty" : 'Have you ever seen the rain?',
  "Nazareth" : 'Love hurts, Oooh Oohh, Love hurts!',
  "Aerosmith" : 'I dont wanna close my eyes! I dont wanna fall asleep!',
}



function getQuote() {
  var authors = Object.keys(quotes);
  
  var author = authors[Math.floor(Math.random() * authors.length)]
  
  var quote = quotes[author];

  document.getElementById("quote").innerHTML = `"${quote}"`;

  document.getElementById("author").innerHTML = `- ${author} -`;
}


function addQuote() {
  var inName = document.getElementById("inputName").value;

  var inQuote = document.getElementById("inputQuote").value;

  document.getElementById("quote").innerHTML = `"${inQuote}"`;
  document.getElementById("author").innerHTML = `- ${inName} -`;

  quotes.inName = inQuote

  console.log(quotes)
}
