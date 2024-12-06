import "./styles.css";
import Globe from "./Globe.gif";

export default function Title({ text }) {
  return (
    <header>
      <img src={Globe} alt="Globe" width="100px" />
      <h1>{text}</h1>
      <img src={Globe} alt="Globe" width="100px" />
    </header>
  );
}
