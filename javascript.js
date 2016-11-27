//array of quotes
var jokes = [
  {joke: "Why did the scarecrow win the Nobel Prize?",
  answer: "Because he was out standing in his field!" },

  {joke: "What's the difference between ignorance and apathy?",
  answer:"I don't konw and I don't care." },

  {joke: "Where did George Washington keep his armies?",
  answer:"In his sleevies!" },

  {joke: "What do you get when you cross a joke with a rhetorical question?",
  answer:"..." },

  {joke: "What do you get when you put root beer in a square glass? ",
  answer:"Beer" }
];

var joke = document.querySelector('#joke')
var answer = document.querySelector('#answer')
var more = document.querySelector('#more')

more.addEventListener('click', rand_joke)

function rand_joke(){
  answer.innerHTML = "";
  var randnum = Math.floor(Math.random()*(jokes.length));
  var timer = setTimeout(showAnswer, 2000);
  joke.innerHTML = jokes[randnum]["joke"];
  function showAnswer() {
    answer.innerHTML = jokes[randnum]["answer"];
  }
};

window.onload = rand_joke;
