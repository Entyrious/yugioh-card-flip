 var m1_zone = document.getElementById("monsterzone1")
 var m2_zone = document.getElementById("monsterzone2")
// var cards = document.getElementsByClassName("cards")

// for(i=0; i<cards.length; i++){
//     cards[i].addEventListener("click", flipping)
//    }

// function flipping(event) {
//         console.log(event)
//         event.target.classList.toggle("back")
// }

var card1={
        name:"Rainbow Overdragon",
        atk:4000,
        def:0,
        img:"./RO_front.png"
}

var card2={
        name:"Hero Neos",
        atk:2500,
        def:2000,
        img:"./hero_neos.png"
}
var card3={
        name:"Ruby Carbuncle",
        atk:300,
        def:300,
        img:"./ruby_carbuncle.jpg"
}
var card4={
        name:"Sapphire Pegasus",
        atk:1800,
        def:1200,
        img:"./sapphire_pegasus.jpg"
}
var card5={
        name:"Dark Magician",
        atk:2500,
        def:2100,
        img:"./dark_magician.png"
}
var card6={
        name:"Blue-eyes White Dragon",
        atk:3000,
        def:2500,
        img:"./BEWD.jpg"
}

var allcards=[card1,card2,card3,card4,card5,card6]
var cards1=[card1,card2,card3,card4,card5]
var cards2=[card6,card5,card4,card3,card2]

for (let i = 0; i < cards1.length; i++) {
        var newCard = document.createElement("div")
        // newCard.setAttribute("id","card1")
        newCard.setAttribute("class","cards flip")
        newCard.style.background="url("+allcards[Math.floor(Math.random()*5 )].img+")"
        m1_zone.append(newCard)
}

for (let i = 0; i < cards2.length; i++) {
        var newCard = document.createElement("div")
        newCard.setAttribute("class","cards")
        newCard.style.background="url("+allcards[Math.floor(Math.random()*5 )].img+")"
        m2_zone.append(newCard)
}