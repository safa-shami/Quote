var quotes = [
 "Talk is cheap. Show me the code. -Linus Torvalds",
 "Ya Good Morning. -Guess",
 "It will be your INTERSTING week. -Who?", 
"I do not care if it works on your machine! We are not shipping your machine! -Vidiu Platon",
"My code DOES NOT work, I have no idea why. My code WORKS, I have no idea why -Another Guess",
"Things are NOT always #000000 or #FFFFFF.      -Mr Gray Css",
"I am very font of you because you are just my type  -Romntic Developer Romeo",
"One man`s crappy software is another man`s full time job.  -Jessica Gaston",
"Etc End of Thinking Capacity  -Safa and Israa",
"tamam?  -one of our HIR",
"I'm gonna  -HIR",
"What is cheating?",
"If you think you are too small to make a difference, try sleeping with a mosquito– Dalai Lama",
]
//var author =[
//"Linus Torvalds","Guess","Who","Vidiu Platon","another Guess","Think","Romntic Developer Romeo","Jessica Gaston",
//"Safa and Israa"]

function yourQuote() {
	var rand = Math.floor(Math.random() *(quotes.length));
	
document.getElementById('ourQuote').innerHTML = quotes[rand];


}