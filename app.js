// *********** VARIABLES *********** //

const phrases = [
  'But February made me shiver',
  'With every paper I delivered',
  'Bad news on the doorstep',
  'I couldnt take one more step',
  'I cant remember if I cried'
];


const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startGame = document.querySelectorAll(".btn__reset")[0];
const overlay = document.querySelector("#overlay");
let missed = 0;

// *********** FUNCTIONS *********** //


function getRandomPhraseAsArray(arr) {
    var a =  arr[Math.floor(Math.random() * arr.length)];
    const b = [];

    for (let i = 0; i < a.length; i ++) {
        b.push(a.charAt(i));
    }

    return b
}

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

// PUTS PHRASE ON THE VIEWPOINT
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i ++) {
    const letter = document.querySelector("#phrase ul");
    const li = document.createElement("li");

    letter.appendChild(li);
    li.textContent = arr[i].toUpperCase();

    if (li.textContent !== " ") {
        li.className = "letter"

    } else {
        li.className = "space"
    }
  }
}


// HIDES OVERLAY SCREEN
startGame.addEventListener('click', () => {
    overlay.style.display = 'none';

    // Reset the game

        // Resets the phrase to guess
    const letter = document.querySelector('#phrase ul');
    letter.textContent = '';

        // Resets styling of buttons to default
    const resetKeyboard = document.querySelectorAll('.keyrow button');

    for (let i = 0; i < resetKeyboard.length; i += 1) {
        resetKeyboard[i].className = ' ';
        resetKeyboard[i].removeAttribute('disabled');
    }

        // Resets hearts images to default (5 lifes)

    const tries = document.querySelectorAll('.tries');

    for (let i = 0; i < tries.length; i += 1) {
        tries[i].firstChild.setAttribute('src','images/liveHeart.png');
    }

        // Reset missed attempts score

        missed = 0;

    // SETS PHRASE TO GUESS AND REMOVES TRANSITION PROPERTY
    phrase.style.display = 'flex';
    let a = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(a);

});


function checkLetter (chosenLetter) {
    const selectedLetter = chosenLetter.toUpperCase();
    const letters = document.querySelectorAll('.letter');
    let letterFound = 'null';

    for (let i = 0; i < letters.length; i += 1) {

         if (selectedLetter === letters[i].textContent) {
            letterFound = selectedLetter;
            letters[i].className += ' show flip';
        }
    }
    return letterFound
}


function checkWin() {
    const letters = document.querySelectorAll('.letter');
    const flip = document.getElementById('#phrase');
    const shownLetters = document.querySelectorAll('.show');
    const statusMessage = overlay.firstChild.nextElementSibling;
    const ctaReplay = overlay.lastChild.previousElementSibling;

    if (letters.length === shownLetters.length) {
        overlay.style.display = 'flex';
        overlay.className = 'win';
        statusMessage.textContent = 'YOU WON!!!';
        ctaReplay.textContent = 'Play Again';
        phrase.style.display = 'none';
    }

    if (missed >= 5) {
        overlay.style.display = 'flex';
        overlay.className = 'lose';
        statusMessage.textContent = "You'll get it next time!";
        ctaReplay.textContent = 'Play Again';
        phrase.style.display = 'none';
    }
}

/// GAMEPLAY EVENT STARTER

qwerty.addEventListener('click', (event) => {

    const a = event.target;
    const b = a.textContent;

    if (a.tagName == 'BUTTON') {
        a.className = 'chosen';
        a.setAttribute('disabled', true);
        const c = checkLetter(b);

        if (c === 'null') {
            a.className += ' chosen_mistaken';
            const tries = document.querySelectorAll('.tries');
            tries[missed].firstChild.setAttribute('src','images/lostHeart.png');
            missed += 1;
        }
    }
    checkWin();
});
