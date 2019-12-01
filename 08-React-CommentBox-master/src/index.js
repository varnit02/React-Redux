//Parent component

import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

import "./styles.css";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard className="ui container comments">
        {/* props are unique for particulaer element*/}
        <CommentDetail
          author="sam"
          timeAgo="today at 4:45 pm"
          comment="nice blog post"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="jane"
          timeAgo="today at 5:05 pm"
          comment="good work"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="alex"
          timeAgo="yesterday at 9:50 pm"
          comment="excellent layout"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
