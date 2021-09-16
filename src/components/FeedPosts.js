import { Avatar } from "@material-ui/core";
import React from "react";
import "../assets/styles/Feeds.css";
import FeedsInputOptions from "./FeedsInputOptions";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";

const FeedPosts = ({ AvatarURL, Description, Message, Name }) => {
  return (
    <div className="feedPostContainer">
      <div className="feedPostHeader">
        {AvatarURL == "" ? <Avatar /> : <Avatar src={AvatarURL} />}
        <div className="feedPostHeading">
          <h5>{Name}</h5>
          <p>{Description}</p>
        </div>
      </div>
      <p>{Message}</p>
      <div className="InputOptionsContainer">
        <FeedsInputOptions title="Like" Icon={ThumbUpAltIcon} color="#A9A9A9" />
        <FeedsInputOptions title="Comment" Icon={CommentIcon} color="#A9A9A9" />
        <FeedsInputOptions title="Share" Icon={ShareIcon} color="#A9A9A9" />
        <FeedsInputOptions title="Send" Icon={SendIcon} color="#A9A9A9" />
      </div>
    </div>
  );
};

export default FeedPosts;
