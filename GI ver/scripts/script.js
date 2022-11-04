var m1_zone = document.getElementById("monsterzone1")
var m2_zone = document.getElementById("monsterzone2")

for (let i = 0; i < 3; i++) {
    var randomnum=Math.floor(Math.random()*cards.length)
    var newCard = document.createElement("div")
    newCard.addEventListener("click", flipping)
    newCard.setAttribute("class","cards flip")
    newCard.style.background="url("+cards[randomnum].img+")"
    
    var atkv=document.createElement("h2")
    atkv.textContent=cards[randomnum].atk
    atkv.setAttribute("class","atkv "+cards[randomnum].element.name)
    newCard.append(atkv)

    m1_zone.append(newCard)
}

for (let i = 0; i < 3; i++) {
    var randomnum=Math.floor(Math.random()*cards.length)
    var newCard = document.createElement("div")
    newCard.addEventListener("click", flipping)
    newCard.setAttribute("class","cards")
    newCard.style.background="url("+cards[randomnum].img+")"
    
    var atkv=document.createElement("h2")
    atkv.textContent=cards[randomnum].atk
    atkv.setAttribute("class","atkv "+cards[randomnum].element.name)
    newCard.append(atkv)

    m2_zone.append(newCard)
}

function flipping(event) {
        console.log(event)
        event.currentTarget.classList.toggle("back")
}