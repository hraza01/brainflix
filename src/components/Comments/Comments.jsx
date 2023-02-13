import React from 'react';
import CommentItem from "./CommentItem.jsx";
import moment from "moment";
import "./_Comments.scss"

const Comments = ({data}) => {
  return (
    <div className="comment__container">
      {data.map((comment) => (
        <CommentItem
          key={comment.id}
          name={comment.name}
          value={comment.comment}
          likes={comment.likes}
          timestamp={moment(comment.timestamp).format("MM/DD/YYYY")}
        />
      ))}
    </div>
  );
};

export default Comments;
