// var m_zone = document.getElementById("monsterzone")
var card1 = document.getElementById("card1")
var card2 = document.getElementById("card2")
var card3 = document.getElementById("card3")
var card4 = document.getElementById("card4")
var card5 = document.getElementById("card5")
var flipped1 = false
var flipped2 = false
var flipped3 = false
var flipped4 = false
var flipped5 = false

// flip_btn.style.backgroundColor="red"

card1.addEventListener("click", flipping1)
card2.addEventListener("click", flipping2)
card3.addEventListener("click", flipping3)
card4.addEventListener("click", flipping4)
card5.addEventListener("click", flipping5)

function flipping1() {
    if (flipped1 == false) {
        card1.style.backgroundImage = "url(./RO_front.png)"
    }

    else {
        card1.style.backgroundImage = "url(./back_card_yugioh.jpg)"
    }
    flipped1 = !flipped1
}
function flipping2() {
    if (flipped2 == false) {
        card2.style.backgroundImage = "url(./RO_front.png)"
    }

    else {
        card2.style.backgroundImage = "url(./back_card_yugioh.jpg)"
    }
    
    flipped2 = !flipped2
}
function flipping3() {
    if (flipped3 == false) {
        card3.style.backgroundImage = "url(./RO_front.png)"
    }

    else {
        card3.style.backgroundImage = "url(./back_card_yugioh.jpg)"
    }
    flipped3 = !flipped3
}
function flipping4() {
    if (flipped4 == false) {
        card4.style.backgroundImage = "url(./RO_front.png)"
    }

    else {
        card4.style.backgroundImage = "url(./back_card_yugioh.jpg)"
    }
    flipped4 = !flipped4
}
function flipping5() {
    if (flipped5 == false) {
        card5.style.backgroundImage = "url(./RO_front.png)"
    }

    else {
        card5.style.backgroundImage = "url(./back_card_yugioh.jpg)"
    }
    flipped5 = !flipped5
}