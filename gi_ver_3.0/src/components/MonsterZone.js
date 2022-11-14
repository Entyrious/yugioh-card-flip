import React from 'react';

function MonsterZone(props) {
    function generateChara(chara) {
        return (
            <div class="cards" style={{
                background: `url(${chara.img})`
            }}>
                <h2>1910</h2>
            </div>
        )
    };

    return (
        <div id="monsterzone1" class="monsterzone">
            {
                props.characters.map(function(char){
                    return generateChara(char)
                })
            }
        </div>

    );
}

export default MonsterZone;