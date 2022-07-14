
import './App.css';
import Card from "./components/Card"
import Container from "@mui/material/Container"


//card components to display portfolio
//Render the logic in card to render card items
//data will be in a data file 
//Container to add padding

function App() {
  return (
    <div className="App">
      <h1>My portfolio</h1>
      <Card />

    </div>
  );
}

export default App;
