import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🐒": "Monkey Emoji",
  "🐵": "Monkey Face Emoji",
  "🙈": "See-No-Evil Monkey Emoji",
  "🙉": "Hear-No-Evil Monkey Emoji",
  "🙊": "Speak-No-Evil Monkey Emoji"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("Emoji name will appear here...");

  function onChangeEvent(event) {
    var userInput = event.target.value;

    if (userInput in emojiDictionary) {
      setMeaning(`This is the ${emojiDictionary[userInput]}`);
    } else {
      setMeaning("This not an Monkey Emoji");
    }
  }

  function onClickEvent(input) {
    setMeaning(`This is the ${emojiDictionary[input]}`);
  }

  return (
    <div className="App">
      <h1>Monkey Emoji Interpreter</h1>
      <input onChange={onChangeEvent}></input>
      <div className="emojiMessage">{meaning}</div>
      <h2>Monkey Emojis</h2>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            key={emoji}
            className="emojiShowcase"
            onClick={() => {
              onClickEvent(emoji);
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
