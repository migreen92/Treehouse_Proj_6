
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
function getRandomPhrasesAsArray(phrasesArray) {
  const phraseIndex = Math.floor(Math.random()*phrasesArray.length);
  phrasesArray[phraseIndex];
  return phrasesArray[phraseIndex];
  // window.phrasesArray = [phrasesArray];
}
getRandomPhrasesAsArray(randomPhrase);

function addPhrasetoDisplay(text) {
  for (i = 0; i < randomPhrase[i].length; i++) {
    const ul = document.getElementById('phrase');
    const li = document.createElement('li');
    li.textContent = 'hi';
    ul.appendChild(li);


  }

}
