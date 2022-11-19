import React from 'react';
import TeamComp from './TeamComp';

function MonsterZone(props) {
    function generateChara(chara) {
        return ( <TeamComp image={chara.img}/>)
    };

    return (
        <div id={"monsterzone" + props.num} class={"monsterzone " + props.rotation}>
            {
                props.characters.map(function(char){
                    return generateChara(char)
                })
            }
        </div>

    );
}

export default MonsterZone;