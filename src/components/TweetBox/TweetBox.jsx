import React, { useEffect, useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import PollOutlinedIcon from "@material-ui/icons/PollOutlined";
import GifOutlinedIcon from "@material-ui/icons/GifOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import ScheduleIcon from "@material-ui/icons/Schedule";
import TweetBoxOption from "./TweetBoxOption";
import Post from "../Post/Post";
import { v4 as uuidv4 } from "uuid";
const TweetBox = () => {
  const getAuhtorArr = localStorage.getItem("user_login");
  const userData = JSON.parse(getAuhtorArr);

  const [inputPost, setInputPost] = useState({
    id: uuidv4(),
    author: userData[0].name,
    textTweet: "",
  });
  const [dataPosts, setDataPosts] = useState(() => {
    const getPostArr = JSON.parse(localStorage.getItem("posts"));
    return getPostArr ?? [];
  });

  const charLimit = 20;

  const getTweet = (e) => {
    const { value, name } = e.target;

    setInputPost(() => {
      return {
        ...inputPost,
        [name]: value,
      };
    });
  };
  const addTweet = () => {
    setDataPosts((prev) => {
      const newPosts = [...prev, inputPost];
      const jsonPosts = JSON.stringify(newPosts);
      localStorage.setItem("posts", jsonPosts);
      return newPosts;
    });

    setInputPost("");
  };

  return (
    <>
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />

            <input
              type="text"
              placeholder="What's happening"
              name="textTweet"
              onChange={getTweet}
            />
          </div>
          <div className="tweetBoxSocial">
            <TweetBoxOption Icon={ImageOutlinedIcon} />
            <TweetBoxOption Icon={GifOutlinedIcon} />
            <TweetBoxOption Icon={PollOutlinedIcon} />
            <TweetBoxOption Icon={SentimentSatisfiedOutlinedIcon} />
            <TweetBoxOption Icon={ScheduleIcon} />
            <TweetBoxOption Icon={RoomOutlinedIcon} />
          </div>
          {/* <Button> Limit: {charLimit - inputPost.textTweet.length}</Button> */}
          <Button className="tweetBox__tweetButton" onClick={addTweet}>
            Tweet
          </Button>
        </form>
      </div>

      {dataPosts.map((dataPost, index) => (
        <Post key={index} data={dataPost} />
      ))}
    </>
  );
};

export default TweetBox;
