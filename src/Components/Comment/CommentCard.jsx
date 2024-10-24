import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const CommentCard = () => {
  const [isCommentLike, setIsCommentLike] = useState();
  const handleLikeComment = () => {
    setIsCommentLike(!isCommentLike);
  };
  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <div>
            <img
              className="w-9 h-9 rounded-full"
              src="https://blog.coccoc.com/tong-hop-meme-meo/meme-meo-khoc/"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p>
              <span className="font-semibold">Username</span>

              <span className="ml-2">nice post</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-60">
              <span>1 min ago</span>
              <span>23 likes</span>
            </div>
          </div>
        </div>

        {isCommentLike ? (
          <AiFillHeart
            onClick={handleLikeComment}
            className="text-xl hover:opacity-50 cursor-pointer text-red-600"
          />
        ) : (
          <AiOutlineHeart
            onClick={handleLikeComment}
            className="text-xl hover:opacity-50 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default CommentCard;
