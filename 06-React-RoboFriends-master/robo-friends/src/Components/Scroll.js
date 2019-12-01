import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflow: "scroll",
        border: "5px solid black",
        height: "800px"
      }}
    >
      {props.children} {/*//wrap other custom Components */}
    </div>
  );
};

export default Scroll;
