
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('a');
const missed = 0;

const randomPhrase = [
  'but february made me shiver',
  'with every paper i delivered',
  'bad news on the doorstep',
  'i couldnt take one more step',
  'i cant remember if i cried'
];


// Start game button hides the overlay
resetButton.addEventListener('click', (e) => {
  const displayNone = e.target.parentNode;
  overlay.style.display = "none";
});

// selects one of the five strings within randomPhrase
function getRandomPhrasesAsArray() {
  const phraseLength = Math.floor(Math.random()*randomPhrase.length);
  randomPhrase[phraseLength];
  console.log(randomPhrase);
};
// function getRandomPhrasesAsArray(randomPhrase){
// return phraseLength;
// }
