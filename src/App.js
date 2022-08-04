import "./App.css";
import Navigation from "./Navigation";
import Card from "./Card";
import Data from "./Data.js";

function App() {
  const items = Data.map((data) => <Card {...data} />);
  return (
    <div className="container">
      <Navigation />
      <div className="card--container">{items}</div>>
    </div>
  );
}

export default App;
