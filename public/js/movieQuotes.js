// script.js

// Array of iconic movie quotes
const movieQuotes = [
  // Anime quotes
  "It's not the face that makes someone a monster; it's the choices they make with their lives. - Naruto",
  "No matter how deep the night, it always turns to day, eventually. - Brook, One Piece",
  "If you don't take risks, you can't create a future. - Monkey D. Luffy, One Piece",
  "I'm not a cat. I'm Kuro-sensei! - Koro-sensei, Assassination Classroom",
  "People die if they are killed. - Emiya Shirou, Fate/stay night",

  // TV show quotes
  "I am the one who knocks. - Walter White, Breaking Bad",
  "Winter is coming. - Ned Stark, Game of Thrones",
  "I'm not a psychopath, Anderson, I'm a high-functioning sociopath. - Sherlock Holmes, Sherlock",
  "I'm the king of the world! - Jack Dawson, Titanic",
  "You miss 100% of the shots you don't take. - Wayne Gretzky - Michael Scott, The Office",

  // Movie quotes
  "May the Force be with you. - Star Wars",
  "Here's looking at you, kid. - Casablanca",
  "You can't handle the truth! - A Few Good Men",
  "I'll be back. - The Terminator",
  "Life is like a box of chocolates. - Forrest Gump"
];
  // Function to display a random quote
  function displayRandomQuote() {
    const quoteIndex = Math.floor(Math.random() * movieQuotes.length);
    const randomQuote = movieQuotes[quoteIndex];
  
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = randomQuote;
  }
  
  // Call the function to display an initial quote
  displayRandomQuote();
  console.log('script is running');