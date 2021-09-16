import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import FeedsInputOptions from "./FeedsInputOptions";
import "../assets/styles/Feeds.css";
import PhotoIcon from "@material-ui/icons/Photo";
import YouTubeIcon from "@material-ui/icons/YouTube";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { db } from "../firebase";
import firebase from "firebase";

const FeedsInput = () => {
  const [EnteredPost, setEnteredPost] = useState("");

  const InputChangehandler = (event) => {
    setEnteredPost(event.target.value);
  };
  const CreatePosthandler = (e) => {
    e.preventDefault();
    db.collection("posts")
      .add({
        Name: "Aman Mohsin",
        Description: "I am a Software Engineer",
        Message: EnteredPost,
        Avatar: "",
        publishedAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .catch(() =>
        alert("OOPS! there was an error storing the data on the database.")
      );

    setEnteredPost("");
  };

  return (
    <div className="feedsInput_container">
      <div className="feedsInput_writePost">
        <Avatar />
        <div className="feedsInput_textContainer">
          <form>
            <input
              type="text"
              className="textInput"
              placeholder="Start a post"
              value={EnteredPost}
              onChange={InputChangehandler}
            />
            <input
              type="submit"
              onClick={CreatePosthandler}
              style={{ display: "none" }}
            />
          </form>
        </div>
      </div>
      <div className="InputOptionsContainer">
        <FeedsInputOptions title="Photo" Icon={PhotoIcon} color="#70B5F9" />
        <FeedsInputOptions title="Video" Icon={YouTubeIcon} color="#7FC15E" />
        <FeedsInputOptions
          title="Event"
          Icon={EventAvailableIcon}
          color="#E7133A"
        />
        <FeedsInputOptions
          title="Write Article"
          Icon={AssignmentIcon}
          color="#FC9295"
        />
      </div>
    </div>
  );
};

export default FeedsInput;
