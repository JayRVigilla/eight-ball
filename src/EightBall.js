import React, { useState } from "react";

function EightBall({ answers }) {

    const [msg, setMsg] = useState("Think of a question");
    const [color, setColor] = useState("black");
    
    const style = {
        border: "1px solid #333",
        borderRadius: "6px",
        backgroundColor: {color},
        minWidth: "200px",
        display: "inline-block",
        margin: "10px"
      }

    function pickRandom(array) {
        let choiceIdx = Math.floor(Math.random() * answers.length);
        let { newMsg, newColor } = answers[choiceIdx];
        setMsg(newMsg);
        setColor(newColor);
        return array[choiceIdx];
    }


    // QUESTION: better to have short like this or verbose in steps?
    return <div>{

        <button onClick={pickRandom} style={style}>
            {msg}
        </button>


}</div >
}


// default props for answers in EightBall
EightBall.defaultProps = {
    answers: [
        { msg: "It is certain.", color: "green" },
        { msg: "It is decidedly so.", color: "green" },
        { msg: "Without a doubt.", color: "green" },
        { msg: "Yes - definitely.", color: "green" },
        { msg: "You may rely on it.", color: "green" },
        { msg: "As I see it, yes.", color: "green" },
        { msg: "Most likely.", color: "green" },
        { msg: "Outlook good.", color: "green" },
        { msg: "Yes.", color: "green" },
        { msg: "Signs point to yes.", color: "goldenrod" },
        { msg: "Reply hazy, try again.", color: "goldenrod" },
        { msg: "Ask again later.", color: "goldenrod" },
        { msg: "Better not tell you now.", color: "goldenrod" },
        { msg: "Cannot predict now.", color: "goldenrod" },
        { msg: "Concentrate and ask again.", color: "goldenrod" },
        { msg: "Don't count on it.", color: "red" },
        { msg: "My reply is no.", color: "red" },
        { msg: "My sources say no.", color: "red" },
        { msg: "Outlook not so good.", color: "red" },
        { msg: "Very doubtful.", color: "red" },
    ]
};


export default EightBall;