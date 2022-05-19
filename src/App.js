import "./styles.css";
import tone from "./tone.wav";

export default function App() {
  const play = () => {
    var audio = new Audio(tone);
    audio.play();
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={play}>Play tone</button>
    </div>
  );
}
