import logo from "./logo.svg";
import Section from "./Section";
export default function Header() {
  return (
    <div className="header">
      <Section />
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="rct">УЧИ </span> REACT{" "}
        <span className="rct">ПОЛУЧИШЬ КАЧЕСТВА ЗНАК!</span>
      </a>
    </div>
  );
}
