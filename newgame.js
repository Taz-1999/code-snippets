/*
NEWGAME.JS

Denna modul intierar ett nytt spel. 
- Skapar en kortlek, som har ett ID, som sparas.
- Skapar två högar, Deler och Player, 
- Delar ut kort till player, dealer, player, dealer i den ordningen.
- Adderar dessa kort till respektive hög.

SHUFFLE RESPONSE 
{
    "success": true,
    "deck_id": "3p40paa87x90",
    "shuffled": true,
    "remaining": 52
}

*/

let deck_id = "";
let card = "";

ShuffleDeck();

function ShuffleDeck() {
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })

    .then((data) => {
      deck_id = data.deck_id;

      console.log(
        "ShuffleDeck(data) returns this: success: " +
          data.success +
          " and deck_id: " +
          data.deck_id
      );

      // Använd en separat funktion för att skapa
      // dealer och player stack.
      deal4(deck_id);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}

  // Draw 4 cards, add to dealer and player piles.
async function deal4(deck_id) {
  card = await GetACard(deck_id);
  console.log("Player Card 1: " + card);
}

function GetACard(deck_id) {
  // Skapa variabeln som kommer innehålla url'en till kortet.
  let cardImageURL = "";

  console.log("\n\nNEW CARD DRAWN\n");

  // Hämta ett JSON-objekt med ett kort och gör olika saker om det går bra eller inte.

  fetch(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })

    .then((data) => {
      // Kolla att data finns:

      card = data.cards[0].code;

      console.log(
        "GetACard(data) returns this. success: " +
          data.success +
          " and card is: " +
          data.cards[0].value +
          " of " +
          data.cards[0].suit +
          " Code: " +
          card
      );

      return card;

    })

    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
}
