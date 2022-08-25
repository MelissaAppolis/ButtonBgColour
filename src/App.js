import './App.css';
import ButtonColour from './components/ButtonColour';


function App() {
  const colourClasses = ["success", "warning", "danger", "info"];

  return (
    <div className="App">
      <h1>Click to change colour of button</h1>
      <ButtonColour colourClasses={colourClasses} />
    </div>
  );
}

export default App;
