
const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const resetButton = document.querySelector('a');
const missed = 0;

const randomPhrase = [
  'But February made me shiver',
  'With every paper I delivered',
  'Bad news on the doorstep',
  'I couldnt take one more step',
  'I cant remember if I cried'
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
      if (phrasesArray[i] != ' ') {
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

// sets button as the argument
// default state is false/null
// if button's text content matches the letter, class show is added
function checkLetter (button){
  const clicked = false;
  const letter = document.querySelector('li');
    for (let i = 0; i < letter.length; i++) {
      if(button.target.textcontent === letter[i].textcontent) {
        letter[i].classList.add('show');
        clicked = true;
      }
    return clicked;
  }
}
qwerty.addEventListener('click', (e) => {
  let letterFound = checkLetter(event);
  if (event.target === 'BUTTON') {
    event.target.classList = 'chosen';
    event.target.disabled = true;
  }
})
