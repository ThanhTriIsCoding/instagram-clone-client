import React from "react";

const SuggestionCard = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-9 h-9 rounded-full"
          src="https://qpet.vn/wp-content/uploads/2023/04/meme-meo-khoc-thet-4.jpg.webp"
          alt=""
        />
        <div className="ml-2">
          <p className="text-sm font-semibold">UserName</p>
          <p className="text-sm font-semibold opacity-70">Follows you</p>
        </div>
      </div>
      <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>
  );
};

export default SuggestionCard;
