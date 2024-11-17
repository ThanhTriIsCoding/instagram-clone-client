import React from "react";
import { useNavigate } from "react-router-dom";

const StoryCircle = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/story");
  };
  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer flex flex-col items-center"
    >
      <img
        className="w-16 h-16 rounded-full"
        src="https://media.tenor.com/f4PUj7wUIm4AAAAe/cat-tongue.png"
        alt=""
      />
      <p>UserName</p>
    </div>
  );
};

export default StoryCircle;
