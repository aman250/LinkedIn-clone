import React, { useEffect, useState } from "react";
import FeedsInput from "./FeedsInput";
import FeedPosts from "./FeedPosts";
import { db } from "../firebase";
import "../assets/styles/Feeds.css";

const Feeds = () => {
  const [Posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts")
      .get()
      .then((result) => result.docs)
      .then((docs) =>
        docs.map((doc) => ({
          Avatar: doc.data().Avatar,
          Description: doc.data().Description,
          Message: doc.data().Message,
          Name: doc.data().Name,
        }))
      )
      .then((posts) => setPosts(posts))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(Posts);
  }, [Posts]);

  return (
    <div className="feedsContainer">
      <FeedsInput />
      {Posts &&
        Posts.map((post) => (
          <FeedPosts
            Avatar={post.Avatar}
            Description={post.Description}
            Message={post.Message}
            Name={post.Name}
          />
        ))}
    </div>
  );
};

export default Feeds;
