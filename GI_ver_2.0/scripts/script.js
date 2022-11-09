var m1_zone = document.getElementById("monsterzone1")
var m2_zone = document.getElementById("monsterzone2")
var h1_zone = document.getElementById("handcards1")
var h2_zone = document.getElementById("handcards2")
var charElements1 = []
var charElements2 = []

function generateCards(zone, count, set, isFlip){
    for (let i = 0; i < count; i++) {
        var randomnum=Math.floor(Math.random()*set.length)
        var newCard = document.createElement("div")
        newCard.addEventListener("click", flipping)
        if(isFlip == true){
            newCard.setAttribute("class","cards flip")
        }
        else{
            newCard.setAttribute("class","cards")
        }
        newCard.style.background="url("+set[randomnum].img+")"
        
        var atkv=document.createElement("h2")
        atkv.textContent=set[randomnum].atk
        // atkv.setAttribute("class","atkv "+set[randomnum].element.name)
        newCard.append(atkv)
    
        zone.append(newCard)
        if(count == 4){
            if(isFlip == true){
                charElements1.push(newCard)
            }
            else{
                charElements2.push(newCard)
            }
        }
    };
};

function flipping(event) {
    if(event.currentTarget.classList.contains("flip")){
        for (let i = 0; i< charElements1.length; i=i+1){
           charElements1[i].classList.remove("on-field")
        }
    }
    else{
        for (let i = 0; i< charElements2.length; i=i+1){
           charElements2[i].classList.remove("on-field")
        }
    }

        console.log(event)
        event.currentTarget.classList.toggle("on-field")
};

generateCards(h1_zone, 5, cards, true)
generateCards(m1_zone, 4, characters, true)
generateCards(m2_zone, 4, characters, false)
generateCards(h2_zone, 5, cards, false)