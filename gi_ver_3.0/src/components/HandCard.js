import React from 'react';

function HandCard(props) {
    function generateCards(card) {
        return (
            <div class="cards" style={{
                background: `url(${card.img})`
            }}>
            </div>
        )
    };


    return (
        <div id="handcards2" class={"cardzone " + props.rotation}>
            {
                props.cards.map(function(card){
                    return generateCards(card)
                })
            }
        </div>

    );
}

export default HandCard;