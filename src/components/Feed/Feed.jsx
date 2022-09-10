import React from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
const TweetBoxMemo = React.memo(TweetBox);
const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBoxMemo />
    </div>
  );
};

export default Feed;
