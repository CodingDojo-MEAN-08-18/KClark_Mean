// Assignment: Deck of Cards
// Karen Clark
// 2018-08-12

// Part One:
// Create a Card class. A card should have the following functionality:
// * Each Card should have a suit ('Hearts', 'Clubs', 'Diamonds', 'Spades')
// * Each Card should have a string value (eg, 'Ace', 'Two', ...., 'Queen', 'King')
// * Each Card should have a numerical value (1-13)
// * Each Card should have a show method (log the card's information to the console)
class Card {
    constructor(suit, stringVal) {
        this._suit = suit;
        this._stringVal = stringVal;
        const numValMap = {
            'Ace': 1,
            'Two': 2,
            'Three': 3,
            'Four': 4,
            'Five': 5,
            'Six': 6,
            'Seven': 7,
            'Eight': 8,
            'Nine': 9,
            'Ten': 10,
            'Jack': 11,
            'Queen': 12,
            'King': 13
        }
        this._numVal = numValMap[stringVal];
    }

    show() {
        console.log(`Suit: ${this._suit}, String value: ${this._stringVal}, Numeric value: ${this._numVal}`);
    }
}

// Testing Card class!
// var card1 = new Card('Hearts', 'Ace');
// var card2 = new Card('Spades', 'Four');
// card1.show();
// card2.show();

// Part II
// Create a Deck class. A deck should have the following functionality:
// * The Deck should contain the 52 standard Cards
// * The Deck should be able to shuffle
// * The Deck should be able to reset
// * The Deck should be able to deal a random Card
// * Deal should return the Card that was dealt and remove it from the Deck
class Deck {
    constructor() {
        this.deck = [];
        this.reset();
        }

    reset() {
        this.deck = [];
        const suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
        const stringValues = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
        
        for (let suit in suits ) {
            for (let v in stringValues) {
                this.deck.push(`${stringValues[v]} of ${suits[suit]}`);
            }
        }
    }

    shuffle() {
        const { deck } = this;
        let m = deck.length, t, i;

        while (m) {
            i = Math.floor(Math.random() * m--);

            t = deck[m];
            deck[m] = deck[i];
            deck[i] = t;
        }
        return deck;
    }

    deal() {
        return this.deck.pop();
    }

    cardCount() {
        return this.deck.length;
    }
}

// Testing Deck class!
// var deck1 = new Deck();
// console.log('New deck: ');
// console.log(deck1);
// deck1.shuffle();
// console.log('Shuffled deck: ');
// console.log(deck1);
// deck1.reset();
// console.log('Reset deck: ');
// console.log(deck1);
// console.log('Deck card count: ');
// console.log(deck1.cardCount());
// console.log('Deal one: ');
// console.log(deck1.deal());
// console.log('Dealt one from deck: ');
// console.log(deck1);
// console.log('Deck card count: ');
// console.log(deck1.cardCount());
// console.log('Deal two: ');
// console.log(deck1.deal());
// console.log('Dealt another from deck: ');
// console.log(deck1);
// console.log('Deck card count: ');
// console.log(deck1.cardCount());

// Part III
// Now create a Player class. A Player should have the following functionality:
// * The Player should have a name
// * The Player should have a hand (an array of cards taken from a Deck)
// * The Player should be able to take a Card (use the deck.deal method)
// * The Player should be able to discard a Card
class Player {
    constructor(name) {
        this._name = name;
        this._hand = [];
    }

    makeHand(deck, numCards) {
        this.deck = deck;
        this.numCards = numCards;

        for (let count = 1; count < numCards + 1; count++ ) {
            let newCard = deck.deal();
            this._hand.push(`${newCard}`);
        }
    }

    takeCard(deck) {
        this.deck = deck;
        let newCard = deck.deal();
        this._hand.push(`${newCard}`);
    }

    discardCard() {
        this._hand.pop();
    }
}

// Testing Player
// var player1 = new Player('Masako');
// console.log(player1._name);
// var deck1 = new Deck();
// deck1.shuffle();
// console.log(deck1);
// console.log(deck1.cardCount());
// player1.makeHand(deck1, 5);
// console.log(player1._hand);
// console.log(deck1);
// console.log(deck1.cardCount());
// player1.takeCard(deck1);
// console.log(player1._hand);
// console.log(deck1);
// console.log(deck1.cardCount());
// console.log("Orig hand: ");
// console.log(player1._hand);
// player1.discardCard();
// console.log("New hand: ");
// console.log(player1._hand);
// console.log("Deck card count: ")
// console.log(deck1.cardCount());