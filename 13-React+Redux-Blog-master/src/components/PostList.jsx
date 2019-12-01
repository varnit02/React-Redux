import React from "react";
import { connect } from "react-redux";
import { fetchPostAndUsers } from "../actions";
import UserHeader from "./UserHeader";

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }
  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      );
    });
  }
  render() {
    //console.log(this.props.posts);
    return (
      <div className="ui container">
        <div className="ui relaxed divide list"> {this.renderList()} </div>
      </div>
    );
  }
}

const mapStateTpProps = state => {
  //console.log(state);
  return { posts: state.posts };
};
export default connect(
  mapStateTpProps,
  { fetchPostAndUsers }
)(PostList);
