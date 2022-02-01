// Declare an array of quotes
quotes = []
// Initialize quotes
const quote1 = {quote:"When you have a dream, you’ve got to grab it and never let go.", source:"Carol Burnett"};
const quote2 = {quote:"Nothing is impossible. The word itself says ‘I’m possible!", source:"Audrey Hepburn", citation: "https://parade.com/973277/jessicasager/inspirational-quotes/", year: "1950" };
const quote3 = {quote:"There is nothing impossible to they who will try.", source:"Alexander the Great" };
const quote4 = {quote:"The bad news is time flies. The good news is you’re the pilot", source:"Michael Altshuler" };
const quote5 = {quote:"Life has got all those twists and turns. You’ve got to hold on tight and off you go.", source:"Nicole Kidman"};

// Add quotes to the array
quotes.push(quote1);
quotes.push(quote2);
quotes.push(quote3);
quotes.push(quote4);
quotes.push(quote5);

// Method to generate random quotes
function getRandomQuote(lowest, size){
	var randInt =	Math.floor(Math.random() * size) + lowest;
    return quotes[randInt];
}

// Method to add generated quote to the html
function printQuote() {
	// get a random quote
 	let randomQuote = getRandomQuote(0,4)
 
	// start building an result html string
 	let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p class='quote'>" + "<p class='source'>"+ randomQuote.source;
		
	// if quote has a citation property add span with the citation
	 if(randomQuote.citation!=null){
	 	PtoHTML1 += "<span class='citation'>" + randomQuote.citation+ "</span>"
 	}
 
	// if quote has a year property add span with the year
 	if(randomQuote.year!=null){
	 	PtoHTML1 += "<span class='year'>" + randomQuote.year+ "</span>"
 	}
 
	// add a closing tag
 	PtoHTML1+= "</p>"
 	
	// add the resulting string to the html 
	let quoteBox = document.getElementById('quote-box')
	quoteBox.innerHTML = PtoHTML1;
	}

// Create an event listener that will change the quote after clicking the "Next quote" button
let btnQuote = document.getElementById('load-quote')
btnQuote.addEventListener("click", printQuote);