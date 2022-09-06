import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import {
  ChatBubbleOutline,
  Publish,
  Repeat,
  FavoriteBorder,
} from "@material-ui/icons";
const Post = (props) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__headerText">
          <h3>
            {props.data.author}
            <span className="post__headerSpecial">
              <VerifiedUserIcon className="post__badge" />
              @username
            </span>
          </h3>
        </div>
        <div className="post__headerDesc">
          <p key={props.index}>{props.data.textTweet}</p>
        </div>

        <div className="post__footer">
          <ChatBubbleOutline />
          <Repeat />
          <FavoriteBorder />
          <Publish />
        </div>
      </div>
    </div>
  );
};

export default Post;
