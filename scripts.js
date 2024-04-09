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
    const vandalCardContainer = document.getElementById(
      "card-container-vandal"
    );
    const phantomCardContainer = document.getElementById(
      "card-container-phantom"
    );
    const meleeCardContainer = document.getElementById("card-container-melee");
    vandalCardContainer.style.display = "block";
    phantomCardContainer.style.display = "none";
    meleeCardContainer.style.display = "none";
    function showCards() {
      const cardContainer = document.getElementById("card-container-vandal");
      cardContainer.innerHTML = "";
      const templateCard = document.querySelector(".vandal-card");
      for (i = 0; i < vandalDisplayNameList.length; i++) {
        let vandalTitles = vandalDisplayNameList[i];

        if (i >= 0 && i < vandalDisplayIconList.length) {
          imageURL = vandalDisplayIconList[i];
        }

        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, vandalTitles, imageURL);
        cardContainer.appendChild(nextCard);

        //favorite feature for the vandal
        nextCard.addEventListener("click", function () {
          let vandalDiv = this;
          let isModified = vandalDiv.classList.contains('vandal-card-1');
          if (isModified) {
              vandalDiv.classList.replace('vandal-card-1', 'vandal-card');
              vandalDiv.removeChild(vandalDiv.querySelector('img.favorite'));
          } else {
              vandalDiv.classList.replace('vandal-card', 'vandal-card-1');
              let favorite = document.createElement('img');
              favorite.src = 'favorite-35 (1).png';
              favorite.style.width = '50px';
              favorite.style.height = '50px';
              favorite.classList.add('favorite');
              vandalDiv.appendChild(favorite);
          }
      });
      }
    }
    function editCardContent(card, newTitle, newImageURL) {
      card.style.display = "block";

      const cardHeader = card.querySelector("h2");
      cardHeader.textContent = newTitle;

      const cardImage = card.querySelector("img");
      cardImage.src = newImageURL;
      cardImage.alt = newTitle + " Skin";
    }
    showCards();
  } else if (button.id === "button-Phantom") {
    const vandalCardContainer = document.getElementById(
      "card-container-vandal"
    );
    const phantomCardContainer = document.getElementById(
      "card-container-phantom"
    );
    const meleeCardContainer = document.getElementById("card-container-melee");
    vandalCardContainer.style.display = "none";
    phantomCardContainer.style.display = "block";
    meleeCardContainer.style.display = "none";

    function showCards() {
      const cardContainer = document.getElementById("card-container-phantom");
      cardContainer.innerHTML = "";
      const templateCard = document.querySelector(".phantom-card");
      for (i = 0; i < phantomDisplayNameList.length; i++) {
        let phantomTitles = phantomDisplayNameList[i];

        if (i >= 0 && i < phantomDisplayIconList.length) {
          imageURL = phantomDisplayIconList[i];
        }

        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, phantomTitles, imageURL);
        cardContainer.appendChild(nextCard);

        //favorite feature for the phantom
        nextCard.addEventListener("click", function () {
          let phantomDiv = this;
          let isModified = phantomDiv.classList.contains('phantom-card-1');
          if (isModified) {
              phantomDiv.classList.replace('phantom-card-1', 'phantom-card');
              phantomDiv.removeChild(phantomDiv.querySelector('img.favorite'));
          } else {
              phantomDiv.classList.replace('phantom-card', 'phantom-card-1');
              let favorite = document.createElement('img');
              favorite.src = 'favorite-35 (1).png';
              favorite.style.width = '50px';
              favorite.style.height = '50px';
              favorite.classList.add('favorite');
              phantomDiv.appendChild(favorite);
          }
      });
      }
    }
    function editCardContent(card, newTitle, newImageURL) {
      card.style.display = "block";

      const cardHeader = card.querySelector("h2");
      cardHeader.textContent = newTitle;

      const cardImage = card.querySelector("img");
      cardImage.src = newImageURL;
      cardImage.alt = newTitle + " Skin";
    }
    showCards();
  } else if (button.id === "button-Melee") {
    const vandalCardContainer = document.getElementById(
      "card-container-vandal"
    );
    const phantomCardContainer = document.getElementById(
      "card-container-phantom"
    );
    const meleeCardContainer = document.getElementById("card-container-melee");
    vandalCardContainer.style.display = "none";
    phantomCardContainer.style.display = "none";
    meleeCardContainer.style.display = "block";
    function showCards() {
      const cardContainer = document.getElementById("card-container-melee");
      cardContainer.innerHTML = "";
      const templateCard = document.querySelector(".melee-card");
      for (i = 0; i < meleeDisplayNameList.length; i++) {
        let meleeTitles = meleeDisplayNameList[i];

        if (i >= 0 && i < meleeDisplayIconList.length) {
          imageURL = meleeDisplayIconList[i];
        }

        const nextCard = templateCard.cloneNode(true);
        editCardContent(nextCard, meleeTitles, imageURL);
        cardContainer.appendChild(nextCard);

        //favorite feature for the melee
        nextCard.addEventListener("click", function () {
          let meleeDiv = this;
          let isModified = meleeDiv.classList.contains('melee-card-1');
          if (isModified) {
              meleeDiv.classList.replace('melee-card-1', 'melee-card');
              meleeDiv.removeChild(meleeDiv.querySelector('img.favorite'));
          } else {
              meleeDiv.classList.replace('melee-card', 'melee-card-1');
              let favorite = document.createElement('img');
              favorite.src = 'favorite-35 (1).png';
              favorite.style.width = '50px';
              favorite.style.height = '50px';
              favorite.classList.add('favorite');
              meleeDiv.appendChild(favorite);
          }
      });
      }
    }
    function editCardContent(card, newTitle, newImageURL) {
      card.style.display = "block";

      const cardHeader = card.querySelector("h2");
      cardHeader.textContent = newTitle;

      const cardImage = card.querySelector("img");
      cardImage.src = newImageURL;
      cardImage.alt = newTitle + " Skin";
    }
    showCards();
  }
}

//Api's for each weapon skins
const valorantVandalApi =
  "https://valorant-api.com/v1/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872";
const valorantPhantomApi =
  "https://valorant-api.com/v1/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a";
const valorantMeleeApi =
  "https://valorant-api.com/v1/weapons/2f59173c-4bed-b6c3-2191-dea9b58be9c7";

//parsing json for Vandal Skins & making it available globally
const vandalDisplayNameList = [];
const vandalDisplayIconList = [];
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
        const vandalDisplayName = skin.displayName;
        const VandalDisplayIcon = skin.displayIcon;
        vandalDisplayNameList.push(vandalDisplayName);
        vandalDisplayIconList.push(VandalDisplayIcon);
      });
    } else {
      console.error("No skin data found in the response.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//parsing json for Phantom Skins & making it available globally
const phantomDisplayNameList = [];
const phantomDisplayIconList = [];
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
        const phantomDisplayName = skin.displayName;
        const phantomDisplayIcon = skin.displayIcon;
        phantomDisplayNameList.push(phantomDisplayName);
        phantomDisplayIconList.push(phantomDisplayIcon);
      });
    } else {
      console.error("No skin data found in the response.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//parsing for Melee skins & making it available globally
const meleeDisplayNameList = [];
const meleeDisplayIconList = [];
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
        const meleeDisplayName = skin.displayName;
        const meleeDisplayIcon = skin.displayIcon;
        meleeDisplayNameList.push(meleeDisplayName);
        meleeDisplayIconList.push(meleeDisplayIcon);
      });
    } else {
      console.error("No skin data found in the response.");
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });
