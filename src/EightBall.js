import React, { useState } from "react";

function EightBall({ answers }) {

  const [myMsg, setMsg] = useState("Think of a question");
  const [myColor, setColor] = useState("black");

  const style = {
    borderRadius: "50%",
    backgroundColor: myColor,
    width: "200px",
    height: "200px",
    margin: "10px",
    color: "#fff",
    fontSize: "22px",
    textAlign: "center",
  }

  function pickRandom() {
    let choiceIdx = Math.floor(Math.random() * answers.length);
    const { msg, color } = answers[choiceIdx];
    setMsg(msg);
    setColor(color);
  }

  return (
    <div>
      <button onClick={pickRandom} style={style}>
        {myMsg}
      </button>
    </div >
  )
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