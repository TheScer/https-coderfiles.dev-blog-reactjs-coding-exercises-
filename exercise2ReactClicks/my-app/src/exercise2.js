import "./App.css";

function App() {
  return (
    <div className="App">
      <button onClick={buttonclicked}>clickme</button>
    </div>
  );
}

function buttonclicked() {
  alert("button was clicked!");
}

export default App;
