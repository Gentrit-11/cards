import React from "react";
import Card, { Data } from "./components/CardData";
import "./components/style.css";

function App() {
  return Data.map((props) => {
    return (
      <div>
        <Card
          datee={props.datee}
          name={props.name}
          content={props.content}
          button={props.button}
          spanCssClass={props.spanCssClass}
          bg={props.bg}
          img={props.img}
          buttonLink={props.buttonLink}
        />
      </div>
    );
  });
}

export default App;
