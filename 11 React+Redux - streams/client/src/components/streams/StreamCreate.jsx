import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  // renderError({ error, touched }) {
  //   //  console.log(error);
  //   if (touched && error)
  //     return (
  //       <div className="ui error message">
  //         <div className="header"> {error} </div>
  //       </div>
  //     );
  // }

  // renderInput = ({ input, label, meta }) => {
  //   //  console.log(meta);
  //   const className = `field ${meta.error && meta.touched ? "error" : ""}`;
  //   return (
  //     <div className={className}>
  //       <label>{label}</label>
  //       <input {...input} autoComplete="off" />
  //       {this.renderError(meta)}
  //     </div>
  //   );
  // };

  onSubmit = (/*event*/ formValues) => {
    //event.preventDefault(); automatically called
    // console.log(formValues);
    this.props.createStream(formValues);
  };

  render() {
    // console.log(this.props);
    return (
      // <form
      //   onSubmit={this.props.handleSubmit(this.onSubmit)}
      //   className="ui form error"
      // >
      //   <Field name="title" component={this.renderInput} label="Enter Title" />
      //   <Field
      //     name="description"
      //     component={this.renderInput}
      //     label="Enter Descripton"
      //   />
      //   <button className="ui button primary">Submit</button>
      // </form>

      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

/* const validate = formValues => {
  const error = {};
  if (!formValues.title) {
    error.title = "you must enter the title";
  }
  if (!formValues.description) {
    error.description = "you must enter the description";
  }
  return error;
};
const formWrapped=reduxForm({
  form: "streamCreate",
  validate
})(StreamCreate); */

export default connect(
  null,
  { createStream }
)(StreamCreate);
