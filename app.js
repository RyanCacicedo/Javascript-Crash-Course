let celsius = 10
let fahrenheit = celsius * 1.8 +32

console.log(fahrenheit)

let subscribe = true
let logged = true

if (subscribe === true) {
    console.log(`show the video`)
}
else if (logged === true) {
    console.log(`tell the user to upgrade their subscription`)
}
else {
    console.log(`tell user to log into account`)
}

let cash = 150
let price = 200

if (cash > price) {
    console.log(`you paid extra - here's ${cash-price} dollars change`)
}
else if (cash===price) {
    console.log(`you paid the exact amount, have a nice day!`)
}
else [
    console.log(`not enough money - you still owe ${price - cash} dollars`)
]

let hot = true

hot ? console.log(`weather is hot outisde`) : console.log(`weather is cold`)

let subscribed = true
let loggedIn = false

let str = subscribed && loggedIn ? `show the video` : `hide the video`
console.log(str)