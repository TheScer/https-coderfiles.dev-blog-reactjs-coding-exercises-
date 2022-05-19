import "./App.css";
import ClickButton from "./components/ClickButton";

function App() {
  return (
    <div>
      <ClickButton name="button 1" children="button 1"></ClickButton>
      <ClickButton name="button 2" children="button 2"></ClickButton>
      <ClickButton name="button 3" children="button 3"></ClickButton>
    </div>
  );
}

export default App;
