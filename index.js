
const names = ["Guadalupe", "Ollie", "Aki"]
const eventName = "surprise"

function writeCards(names, event) {
    let cards = []
    for (let i = 0; i < names.length; i++) {
        const greeting = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        cards.push(greeting);
      }

      return cards
    }

    // writeCards(names, eventName)

function countDown(){

    let countDown = 10;
    while (countDown >= 0) {
        console.log(countDown --)
    }
}



