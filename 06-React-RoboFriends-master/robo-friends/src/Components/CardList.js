/* eslint-disable no-unused-expressions */

import React from "react";

import Card from "./Card";
//import {robots} from "../robots"

const CardList = ({ robots }) => {
  //const cardComponent=robots.map((user,i)=>{
  //for errorboundary
  // if (true) {
  //   throw new Error("Nooooooo");
  // }
  return (
    // key prop should have something that should not be changed
    <div>
      {robots.map((user, i) => (
        <Card
          key={i}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email}
        />
      ))}
    </div>
  );
};

export default CardList;
