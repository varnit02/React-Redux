import React from "react";
import LanguageContext from "../contexts/LanguageContext";
export default class LangugaeSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    //console.log(this.LanguageContext);
    return (
      <div>
        Select a language:
        <i
          className="flag in"
          onClick={() => this.context.onLanguageChange("hindi")}
        />
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
      </div>
    );
  }
}
