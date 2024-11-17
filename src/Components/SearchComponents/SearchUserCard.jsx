import React from "react";

const SearchUserCard = () => {
  return (
    <div className="py-2 cursor-pointer">
      <div className="flex items-center">
        <img
          className="w-10 h-10 rounded-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVVRWXfpF6F_SXgPP0DoCjw98JMnf1DF1-A&s"
          alt=""
        />
        <div className="ml-3">
          <p>FullName</p>
          <p className="opacity-70">Username</p>
        </div>
      </div>
    </div>
  );
};

export default SearchUserCard;
