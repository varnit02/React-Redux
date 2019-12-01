import React from "react";
import Greeting from "./Greeting";

const LoginControl = props => (
  <div>
    <Greeting isLoggedIn={props.isLoggedIn} />
  </div>
);

export default LoginControl;
