const deck = [];
const index = [];

document.addEventListener ("DOMContentLoaded", event =>
{
    initDeck ();
    deal ();
});

function initDeck ()
{   //  Build an array representing the deck of cards.

    const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
    const cards = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];

    for (let x=0; x<4; x++)
    {
        for (let y=0; y<13; y++)
        {
            let src = cards[y].charAt(0);
            if (src == "1") src += "0";
            src += suits[x].charAt(0) + ".png";

            const img = document.createElement("img");
            img.setAttribute ("src", "../deck/" + src);
            deck.push (img);

            index.push ((x * 13) + y);
        }
    }
}

function shuffle ()
{
    for (let x=0; x<52; x++)
    {
        const ind = Math.floor(Math.random() * (52 - x));
        const img = index.splice(ind, 1);
        index.push (img[0]);
    }
}

function deal ()
{
    shuffle ();

    const field = document.getElementById ("field");
    const stacks = field.getElementsByClassName ("stack");

    for (let x=0; x<7; x++)
    {
        for (let y=x; y<7; y++)
        {
            const card = document.createElement ("div");
            card.setAttribute ("class", "card");
            const top = x * 3;
            card.style.top = top + "px";
            card.append(deck[index[(x * 7) + y]]);
            stacks[y].append(card);
        }
    }
}
