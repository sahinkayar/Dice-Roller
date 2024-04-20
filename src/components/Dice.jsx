import React, { useState, useEffect } from "react";
import SoundEffect from "../../public/İsimsiz video ‐ Clipchamp ile yapıldı.mp4";
function Dice({ sides }) {
  const [state, setState] = useState({
    dice1: "one",
    dice2: "three",
    rolling: false,
    totalScore: 0,
  });
  useEffect(() => {
    // Preload the audio file
    const audio = new Audio(SoundEffect);
    audio.load();
  }, []); // Run once on component mount

  const roll = () => {
    const audio = new Audio(SoundEffect);
    audio.play();
    const newDice1 = sides[Math.floor(Math.random() * sides.length)];
    const newDice2 = sides[Math.floor(Math.random() * sides.length)];
    console.log(newDice1);
    const score1 = Object.values(newDice1)[0];
    const score2 = Object.values(newDice2)[0];
    console.log(score1);
    setState({
      dice1: Object.keys(newDice1),
      dice2: Object.keys(newDice2),
      rolling: true,
      totalScore: score1 + score2,
    });
    setTimeout(() => {
      setState((prev) => ({ ...prev, rolling: false }));
    }, 1000);
  };
  return (
    <div>
      <div className="Roll-dices">
        <audio src={SoundEffect}>sa</audio>
        <i
          className={` dice1  fa-solid fa-dice-${state.dice1} ${
            state.rolling && "animate"
          } `}
        ></i>
        <i
          className={` dice2   fa-solid fa-dice-${state.dice2} ${
            state.rolling && "animate"
          } `}
        ></i>
      </div>
      <div className="btn-h2">
        <button onClick={roll} disabled={state.rolling}>
          {state.rolling ? "Rolling..." : "Roll Dice"}
        </button>
        <h2>Total Score:{state.totalScore}</h2>{" "}
      </div>
    </div>
  );
}

Dice.defaultProps = {
  sides: [
    { one: 1 },
    { two: 2 },
    { three: 3 },
    { four: 4 },
    { five: 5 },
    { six: 6 },
  ],
};

export default Dice;
