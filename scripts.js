/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

//commented these constants out because I will not use them
// const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

//I also won't be using these array of strings
// This is an array of strings (TV show titles)
// let titles = [
//     "Fresh Prince of Bel Air",
//     "Curb Your Enthusiasm",
//     "East Los High"
// ];

//Here is my array and constants, Weapon names for tabs and their image urls
let tabTitles = ["Vandal", "Phantom", "Melee"];

const VANDAL_URL =
  "https://static.wikia.nocookie.net/valorant/images/5/56/Vandal.png/revision/latest/scale-to-width-down/200?cb=20230711205307";
const PHANTOM_URL =
  "https://static.wikia.nocookie.net/valorant/images/e/ec/Phantom.png/revision/latest/scale-to-width-down/200?cb=20230711205302";
const MELEE_URL =
  "https://static.wikia.nocookie.net/valorant/images/8/8f/Melee.png/revision/latest/scale-to-width-down/200?cb=20230711201118";

//A function that adds tabs to the page from the arrays and urls
function showTabs() {
  const tabContainer = document.getElementById("tab-container");
  tabContainer.innerHTML = "";
  const templateTab = document.querySelector(".weapon-tabs");

  for (i = 0; i < tabTitles.length; i++) {
    let weapon = tabTitles[i];

    let imageURL = "";
    if (i == 0) {
      imageURL = VANDAL_URL;
    } else if (i == 1) {
      imageURL = PHANTOM_URL;
    } else if (i == 2) {
      imageURL = MELEE_URL;
    }

    const nextTab = templateTab.cloneNode(true);
    editTabContent(nextTab, weapon, imageURL);
    tabContainer.appendChild(nextTab);
  }
}

function editTabContent(tab, newWeapon, newWeaponImage) {
  tab.style.display = "block";

  const tabHeader = tab.querySelector("h2");
  tabHeader.textContent = newWeapon;

  const tabImage = tab.querySelector("img");
  tabImage.src = newWeaponImage;
  tabImage.alt = newWeapon + "Tab";

  newTabId = tab.id = tab.id + newWeapon;

  console.log(newTabId);

  newButtonId = tab.children[0].id = tab.children[0].id + newWeapon;
}

document.addEventListener("DOMContentLoaded", showTabs);

//A function that changes the card container dynamically based on the tab buttons. 
function tabButton(button) {
  console.log(button.id);
  if (button.id === "button-Vandal") {
    const vandalCards = document.getElementById("vandal-card");
    const phantomCards = document.getElementById("phantom-card");
    const meleeCards = document.getElementById("melee-card");
    vandalCards.style.display = "block";
    phantomCards.style.display = "none";
    meleeCards.style.display = "none";
  } else if (button.id === "button-Phantom") {
    const vandalCards = document.getElementById("vandal-card");
    const phantomCards = document.getElementById("phantom-card");
    const meleeCards = document.getElementById("melee-card");
    phantomCards.style.display = "block";
    vandalCards.style.display = "none";
    meleeCards.style.display = "none";
  } else if (button.id === "button-Melee") {
    const vandalCards = document.getElementById("vandal-card");
    const phantomCards = document.getElementById("phantom-card");
    const meleeCards = document.getElementById("melee-card");
    meleeCards.style.display = "block";
    phantomCards.style.display = "none";
    vandalCards.style.display = "none";
  }
}

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

//I will not use these functions/features from the starter code
// function quoteAlert() {
//     console.log("Button Clicked!")
//     alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
// }

// function removeLastCard() {
//     titles.pop(); // Remove last item in titles array
//     showCards(); // Call showCards again to refresh
// }
