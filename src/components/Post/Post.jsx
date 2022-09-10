import React, { useEffect } from "react";
import "./Post.css";
import { Avatar, Button } from "@material-ui/core";
import VerifiedIcon from "@mui/icons-material/Verified";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RepeatIcon from "@mui/icons-material/Repeat";
import PublishIcon from "@mui/icons-material/Publish";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CloseIcon from "@mui/icons-material/Close";
const Post = ({ data, remove }) => {
  // console.log(data);
  const [likeCount, setLikeCount] = React.useState(0);
  const [liked, setLiked] = React.useState("");

  const likePost = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };
  useEffect(() => {
    localStorage.setItem("likeCount", JSON.stringify(likeCount));
    localStorage.setItem("liked", JSON.stringify(liked));
  }, []);

  const heartFill = liked ? "crimson" : "currentColor";

  return (
    <div className="post">
      <div className="post__header">
        <div className="post__avatar">
          <Avatar />

          <h3 className="post__headerText">
            {data.author}
            <span className="post__headerSpecial">
              <VerifiedIcon className="post__badge" />
              @username
            </span>
          </h3>
        </div>
        <p onClick={() => remove(data.id)}>
          {" "}
          <CloseIcon className="btn-close" />{" "}
        </p>
      </div>
      <div className="post__body">
        <div className="post__headerDesc">
          <p key={data.id}>{data.textTweet}</p>
        </div>

        <div className="post__footer">
          <button className="btn">
            <ChatBubbleOutlineIcon />
          </button>
          <button className="btn">
            <RepeatIcon />
          </button>
          <button className="btn" onClick={likePost}>
            <FavoriteBorderIcon style={{ fill: heartFill }} />
            <p className="like-count">{likeCount}</p>
          </button>
          <button className="btn">
            <PublishIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
