var suit = ['clubs', 'spades', 'diamonds', 'hearts'];
var picture = ['jack', 'queen', 'king', 'ace'];
var cards = [];

for(var i = 2; i <= 10; i++){
    for(var j = 0; j < suit.length; j++) {
        cardInfo = `<div class="card_info">${i}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`

        cards.push(`<div class="card">
            ${cardInfo}
            ${cardInfo}
        </div>`)
    }
}
// console.log(cards[1])

for(var k = 0; k < picture.length; k++) {
    for(var j = 0; j < suit.length; j++) {
        if(picture[k] == "ace") {
            cardInfo = `<div class="card_info">T<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`
            cardPic = `<img class="person" src="images/${suit[j]}.svg" alt="${suit[j]}">`
        } else {
        cardInfo = `<div class="card_info">${picture[k][0].toUpperCase()}<img src="images/${suit[j]}.svg" alt="${suit[j]}"></div>`
        cardPic = `<img class="person" src="images/${picture[k]}.svg" alt="${suit[j]}">`
        }
        cards.push(`<div class="card">
            ${cardInfo}
            ${cardPic}
            ${cardInfo}
        </div>`)

    }
}

let join = cards.join("");

document.write(`<div class="wrapper">
    ${join}
    </div)`);
