import { React } from "react";
import "../App.css";
import Header from "./Header.js";
import Filter from "./Filter.js";
import Card from "./Card.js";
import EmphasizedBox from "./Emphasized-box.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Filter />
        <Card />
        <EmphasizedBox />
        <Footer />
      </div>
    </div>
  );
}

export default App;
