import React from "react";
import image from "../components/images/card-image.png";
import "../components/style.css";

export const Data = [
  {
    img: image,
    datee: "3.3.0(14/05/2018)",
    bg: "green",
    name: "Kewin Joe",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    button: "Download",
    spanCssClass: "colors",
  },
  {
    img: image,
    datee: "3.3.0(14/05/2018)",
    bg: "blue",
    name: "Kewin Joe",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    button: "Download",
    spanCssClass: "colors",
  },
  {
    img: image,
    datee: "3.3.0(14/05/2018)",
    bg: "red",
    name: "Kewin Joe",
    content:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    button: "Download",
    spanCssClass: "colors",
  },
  {
    img: image,
    datee: "3.1.0(14/05/2015)",
    bg: "green",
    name: "Kewin Joe",
    content:
      "  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    button: "Download",
    spanCssClass: "colors",
  },
  {
    img: image,
    datee: "3.1.0(14/05/2015)",
    bg: "blue",
    name: "Kewin Joe",
    content:
      " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    button: "Download",
    spanCssClass: "colors",
  },
  {
    img: image,
    datee: "3.1.0(14/05/2015)",
    bg: "red",
    name: "Kewin Joe",
    content:
      "  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    button: "Download",
    spanCssClass: "colors",
  },
  {
    img: image,
    datee: "3.1.0(14/05/2015)",
    bg: "green",
    name: "Kewin Joe",
    content:
      "   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    button: "Download",
    spanCssClass: "colors",
  },
  {
    img: image,
    datee: "3.1.0(14/05/2015)",
    bg: "blue",
    name: "Kewin Joe",
    content:
      "  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    button: "Download",
    spanCssClass: "colors",
  },
  {
    img: image,
    datee: "3.1.0(14/05/2015)",
    bg: "red ",
    name: "Kewin Joe",
    content:
      "   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    button: "Download",
    spanCssClass: "colors",
  },
];
const Card = (props) => {
  return (
    <div class="card">
      <div className="containers">
        <div className="container1">
          <h6>{props.datee}</h6>
        </div>

        <div className="container2">
          <div
            className={props.spanCssClass}
            style={{ backgroundColor: props.bg }}
          >
            New
          </div>
          <img className="image" src={props.img}></img>
          <h6>{props.name}</h6>
        </div>

        <div className="container3">
          <h5>{props.content}</h5>
        </div>
        <div className="container4">
          <button className="button">{props.button}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
