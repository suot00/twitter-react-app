import React, { useEffect, useState, useMemo, memo, useRef } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import PollOutlinedIcon from "@mui/icons-material/PollOutlined";
import GifBoxOutlinedIcon from "@mui/icons-material/GifBoxOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import RoomIcon from "@mui/icons-material/Room";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import TweetBoxOption from "./TweetBoxOption";
import Post from "../Post/Post";
import { v4 as uuidv4 } from "uuid";
const PostMemo = React.memo(Post);
const TweetBox = () => {
  const getAuhtorArr = localStorage.getItem("user_login");
  const userData = JSON.parse(getAuhtorArr);
  // const nameLikePost = userData[0].name;
  const [inputPost, setInputPost] = useState({
    id: uuidv4(),
    author: userData[0].name,
    textTweet: "",
  });

  const inputRef = useRef();

  const [dataPosts, setDataPosts] = useState(() => {
    const getPostArr = JSON.parse(localStorage.getItem("posts"));
    return getPostArr ?? [];
  });

  // const charLimit = 20;

  const getTweet = (e) => {
    const { value, name } = e.target;
    console.log("getTweet");
    setInputPost(() => {
      return {
        ...inputPost,
        [name]: value,
      };
    });
  };
  const addTweet = () => {
    console.log("addTweet");
    setDataPosts((prev) => {
      const newPosts = [...prev, inputPost];
      const jsonPosts = JSON.stringify(newPosts);

      localStorage.setItem("posts", jsonPosts);
      // const reverseArr = newPosts.reverse();
      // console.log(newPosts);
      // console.log(reverseArr);
      return newPosts;
    });
    inputRef.current.focus();
    // setInputPost((inputPost) => ({
    //   ...inputPost,
    // }));
    let updatedValue = {};
    updatedValue = { id: uuidv4(), author: userData[0].name, textTweet: "" };
    setInputPost((inputPost) => ({
      ...inputPost,
      ...updatedValue,
    }));
  };
  const removeTweet = (id) => {
    const newArrs = [...dataPosts];
    const newArrData = newArrs.filter((newArr) => newArr.id !== id);
    const jsonPosts = JSON.stringify(newArrData);
    localStorage.setItem("posts", jsonPosts);
    setDataPosts(newArrData);
  };

  return (
    <>
      <div className="tweetBox">
        <form>
          <div className="tweetBox__input">
            <Avatar src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" />

            <input
              ref={inputRef}
              type="text"
              placeholder="What's happening"
              name="textTweet"
              onChange={getTweet}
            />
          </div>
          <div className="tweetBoxSocial">
            <TweetBoxOption Icon={ImageIcon} />
            <TweetBoxOption Icon={GifBoxOutlinedIcon} />
            <TweetBoxOption Icon={PollOutlinedIcon} />
            <TweetBoxOption Icon={SentimentSatisfiedAltOutlinedIcon} />
            <TweetBoxOption Icon={ScheduleOutlinedIcon} />
            <TweetBoxOption Icon={RoomIcon} />
          </div>
          {/* <Button> Limit: {charLimit - inputPost.textTweet.length}</Button> */}
          <Button className="tweetBox__tweetButton" onClick={addTweet}>
            Tweet
          </Button>
        </form>
      </div>

      {dataPosts.map((dataPost, index) => (
        <PostMemo key={index} data={dataPost} remove={removeTweet} />
      ))}
    </>
  );
};

export default TweetBox;
