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

//Api's for each weapon skins
const valorantVandalApi =
  "https://valorant-api.com/v1/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872";
const valorantPhantomApi =
  "https://valorant-api.com/v1/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a";
const valorantMeleeApi =
  "https://valorant-api.com/v1/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7";

//parsing json for Vandal Skins
fetch(valorantVandalApi)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    if (data && data.data && data.data.skins) {
      const skins = data.data.skins;

      skins.forEach((skin) => {
        const displayName = skin.displayName;
        const displayIcon = skin.displayIcon;

        console.log("Vandal Skin Name & Icon:", displayName, displayIcon);
      });
    } else {
      console.error("No skin data found in the response.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//parsing json for Phantom Skins
fetch(valorantPhantomApi)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    if (data && data.data && data.data.skins) {
      const skins = data.data.skins;

      skins.forEach((skin) => {
        const displayName = skin.displayName;
        const displayIcon = skin.displayIcon;

        console.log("Phantom Skin Name & Icon:", displayName, displayIcon);
      });
    } else {
      console.error("No skin data found in the response.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//parsing for Melee skins
fetch(valorantMeleeApi)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    if (data && data.data && data.data.skins) {
      const skins = data.data.skins;

      skins.forEach((skin) => {
        const displayName = skin.displayName;
        const displayIcon = skin.displayIcon;

        console.log("Melee Skin Name & Icon:", displayName, displayIcon);
      });
    } else {
      console.error("No skin data found in the response.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
