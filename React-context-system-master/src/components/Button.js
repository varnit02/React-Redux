import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
class Button extends React.Component {
  //  /*1sd way */ static contextType /* property*/ = LanguageContext;
  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => this.renderSubmit(language)}
        </LanguageContext.Consumer>
      </button>
    );
  }
  renderSubmit(language) {
    return language === "english" ? "Submit" : "जमा करें";
  }
  /*method*/ render() {
    // console.log(this.context);
    // const text = this.context === "english" ? "Submit" : "Jama karein";
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}
//2nd way-Button.contextType=LanguageContext

export default Button;
