import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };
    //ref is an object that consist current property
    this.imageRef = React.createRef(); //reference to current element
  }

  componentdidMount() {
    // console.log(this.imageRef);
    // console.log(this.imageRef.current.clientHeight);
    //gives height 0 because too early
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setSpans({ spans });
  };
  render() {
    const { description, urls } = this.props.image; //description
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
