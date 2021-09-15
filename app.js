
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
// splits the array into individual characters
function getRandomPhrasesAsArray(phrasesArray) {
  const random = phrasesArray[Math.floor(Math.random()*phrasesArray.length)];
  let splitArray = random.split('');
  return splitArray;
}

// uses the argument from getRandomPhrasesAsArray
// creates a <li> for each element created by random.split('')
// if ' ' = space, otherwise, letter
function addPhrasetoDisplay(phrasesArray) {
  for (i = 0; i < phrasesArray.length; i++) {
    const ul = document.getElementById('phrase');
    const li = document.createElement('li');
    ul.appendChild(li);
      if (phrasesArray[i] != '') {
        li.className = 'letter'
      } else {
        li.className = 'space'
      }
    }
}

// variable to create the split of a random array
// argument gets saved in phrases and run through the addPhrasetoDisplay function
const phrases = getRandomPhrasesAsArray(randomPhrase);
addPhrasetoDisplay(phrases);
