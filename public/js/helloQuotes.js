const helloQuotes = [

    `"Hello. My name is Inigo Montoya. You killed my father. Prepare to die." - The Princess Bride`,
    `"Good morning, Vietnam!" - Good Morning, Vietnam`,
    `"Hello, gorgeous." - Funny Girl`,
    `"Say 'hello' to my little friend!" - Scarface`,
    `"Hey! I'm walkin' here!" - Midnight Cowboy`,
    `"Hello, is it me you're looking for?" - Austin Powers: International Man of Mystery`,
    `"Welcome to Jurassic Park." - Jurassic Park`,
    `"Hello, Newman." - Seinfeld`,
    `"Why, hello, Mr. Anderson." - The Matrix`,
    `"Hello, my name is Maximus Decimus Meridius." - Gladiator`,
    `"Hello, Clarice." - The Silence of the Lambs`,
    `"Hello, McFly!" - Back to the Future`,
    `"You had me at 'hello'." - Jerry Maguire`,
    `"Hello, Seattle!" - Sleepless in Seattle`,
    `"Hello there!" - Star Wars Episode III: Revenge of the Sith`,
    `"Hello, boys! I'm baaack!" - Who Framed Roger Rabbit`,
    `"Hello, Newman." - Seinfeld`,
    `"Welcome to the world of tomorrow!" - Cowboy Bebop`,
    `"Oh my god! I can't believe I didn't recognize you! You look so different in clothes!" - One Piece`
]

function displayHelloQuote() {
    const quoteIndex = Math.floor(Math.random() * helloQuotes.length);
    const randomQuote = helloQuotes[quoteIndex];
  
    const quoteElement = document.getElementById('quote');
    quoteElement.textContent = randomQuote;
  }
  
  displayHelloQuote();
  console.log('script is running');