import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./ReqUserPostCar.css";
const ReqUserPostCard = () => {
  return (
    <div className="p-2">
      <div className="post w-60 h-60">
        <img
          className="cursor-pointer"
          src="https://us-tuna-sounds-images.voicemod.net/6a9b3c5d-3cf4-436f-b462-ffcd2f4154ac-1665671787017.jpg"
          alt=""
        />
        <div className="overlay">
          <div className="overlay-text flex justify-between">
            <div>
              <AiFillHeart></AiFillHeart>
              <span>10</span>
            </div>
            <div>
              <FaComment /> <span>30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqUserPostCard;
