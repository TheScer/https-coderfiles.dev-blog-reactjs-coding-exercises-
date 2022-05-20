import "./App.css";
import { ButtonHolder } from "./components/ButtonHolder";
import ClickButton from "./components/ClickButton";

function App() {
  return (
    <div>
      <ButtonHolder name="button 1" children="button 1" />
      <ButtonHolder name="button 2" children="button 2" />
      <ButtonHolder name="button 3" children="button 3" />
    </div>
  );
}

export default App;