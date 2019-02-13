/*
 * Create a list that holds all of your cards
 * Brought the card names from HTML file into an array
 */

const icons = ["fa fa-diamond", "fa fa-diamond",
              "fa fa-paper-plane-o", "fa fa-paper-plane-o",
              "fa fa-anchor", "fa fa-anchor",
              "fa fa-bolt", "fa fa-bolt",
              "fa fa-cube", "fa fa-cube",
              "fa fa-leaf", "fa fa-leaf",
              "fa fa-bicycle", "fa fa-bicycle",
              "fa fa-bomb", "fa fa-bomb"];

const cardsContainer = document.querySelector(".deck"); /* deck class from html file*/
let shownCards = []; /* this array will store cards clicked */
let matchedCards = []; /* this array will store matched cards */

// Creation and visualisation of cards in the board

for (let i = 0; i < icons.length; i++){
  
  const card = document.createElement("li");
  card.classList.add("card");
  card.innerHTML = "<i class ='" + icons[i] + "'</i>"
  cardsContainer.appendChild(card);
  
  card.addEventListener("click", function() {

    //If we have existing SHOWN card
    if(shownCards.length === 1) {

      card.classList.add("open", "show");
      shownCards.push(this);
      
      // Comparing cards
      if(this.innerHTML === shownCards[0].innerHTML) {
        // If we have a match
        console.log("matched");
        this.classList.add("match");
        shownCards[0].classList.add("match");
        matchedCards.push(this,shownCards[0]);

      }else {
        // If we DON'T have a match
        console.log("no matched");
        this.classList.remove("open", "show");
        shownCards[0].classList.remove("open", "show");
        openedCards = [];
      }

      shownCards = [] /* it will reset count so it can check for a match every 2 clicks */
      
    } else {
        // If we don't have any SHOWN cards
        card.classList.add("open", "show");
        shownCards.push(this);
    }
  })
  
}

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
