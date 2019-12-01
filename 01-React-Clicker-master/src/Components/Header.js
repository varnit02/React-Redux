import React from "react";
import propTypes from "prop-types";
const Header = (
  props //Given that you are using a stateless component as a arrow function the content needs to get in parenthesis "()" instead of brackets "{}" and you have to remove the return function.
) => (
  <nav className=" header navbar navbar-dark bg-primary">
    <div className="container">
      <div className="row m-auto">
        <div className="h1 ml-2 my-auto text-light" href="/">
          {props.title}
        </div>
      </div>
    </div>
  </nav>
);
Header.defaultPropTypes = {
  title: "Title"
};

Header.propTypes = {
  title: propTypes.string
};

export default Header;
