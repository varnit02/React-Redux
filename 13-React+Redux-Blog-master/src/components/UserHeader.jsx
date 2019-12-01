import React from "react";
import { connect } from "react-redux";
//import { fetchUser } from "../actions";

class UserHeader extends React.Component {
  // componentDidMount() {
  //   // console.log(this.props);
  //   this.props.fetchUser(this.props.userId);
  // }
  render() {
    //console.log(this.props.users);

    // console.log(this.props.userId);
    if (!this.props.user) {
      return null;
    }
    // console.log(user.name);
    return <div className="header"> {this.props.user.name} </div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  // console.log(state.users);
  return { user: state.users.find(user => user.id === ownProps.userId) }; //destructuring
};
export default connect(mapStateToProps)(UserHeader);
