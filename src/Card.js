import React from "react";
import Map from "./Map.svg";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <img src={`${props.imgUrl}`} alt=""></img>
      <div className="text--area">
        <p className="bold">
            <img className="Map" src ={Map} alt=""></img>
          {props.location}
          <a className="gray" href={props.googleMapUrl}>
            View on Google Maps
          </a>
        </p>
        <h3 className="bold title">{props.title}</h3>
        <p className="bold desc">
          {props.startDate} - {props.endDate}
        </p>
        <p className="desc">{props.description}</p>
      </div>
    </div>
  );
}
