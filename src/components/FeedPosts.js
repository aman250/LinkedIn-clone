import React from "react";

const FeedPosts = ({ Avatar, Description, Message, Name }) => {
  return (
    <div className="feedPostContainer">
      <p>{Name}</p>
      <p>{Description}</p>
      <p>{Message}</p>
    </div>
  );
};

export default FeedPosts;
