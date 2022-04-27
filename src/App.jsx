import "./App.css";
import Logo from "./components/Logo";
import Links from "./components/links";
import Button from "./components/button";
function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Logo />
        <Links />
        <Button />
      </div>
    </div>
  );
}

export default App;
