// var m_zone = document.getElementById("monsterzone")
var cards = document.getElementsByClassName("cards")

for(i=0; i<cards.length; i++){
    cards[i].addEventListener("click", flipping)
   }

function flipping(event) {
        event.target.classList.toggle("back")
        event.target.classList.toggle("front") 
}