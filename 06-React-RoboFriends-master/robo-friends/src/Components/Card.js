import React from "react";

const Card = ({ name, email, id }) => {
  //destructuring
  //const{name,email,id} = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* eslint-disable no-template-curly-in-string */}
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};
export default Card;
