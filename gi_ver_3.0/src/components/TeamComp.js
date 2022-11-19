import React from 'react';
import {useState} from "react"

function TeamComp(props) {
    // var onUse = false
    const [onUse, setOnUse] = useState(false)

    function CheckCard() {
        if (onUse) {
            return " on-field"
        }
        else {
            return ""
        }
    }

    function Switch() {
        // onUse = !onUse
        setOnUse(!onUse)
        console.log(onUse)
    }

    return (
        <div
            class={"cards" + CheckCard()}
            style={{
                background: `url(${props.image})`
            }}
            onClick={Switch}
        >
            <h2>1910</h2>
        </div>
    );
}

export default TeamComp;