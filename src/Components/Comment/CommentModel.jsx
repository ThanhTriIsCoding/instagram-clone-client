import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import CommentCard from "./CommentCard";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./CommentModal.css";
const CommentModel = ({
  onClose,
  isOpen,
  isSaved,
  isPostLike,
  handlePostLike,
  handleSavePost,
}) => {
  return (
    <div>
      <Modal size={"4xl"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh]">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  src="https://chontruong.edu.vn/wp-content/uploads/2024/09/meme-meo-cute-18HFAKl.jpg"
                  alt=""
                />
              </div>
              <div className="border w-[55%] pl-10 relative">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://chontruong.edu.vn/wp-content/uploads/2024/09/meme-meo-cute-0vB9QpZ.jpg"
                        alt=""
                      />
                    </div>
                    <div className="ml-2">
                      <p>Username</p>
                    </div>
                  </div>

                  <BsThreeDots />
                </div>
                <hr />
                <div className="comment">
                  {[1, 1, 1, 1, 1, 1].map(() => (
                    <CommentCard />
                  ))}
                </div>
                <div className="absolute bottom-0 w-[90%]">
                  <div className="flex justify-between items-center w-full py-4">
                    <div className="flex items-center space-x-2">
                      {isPostLike ? (
                        <AiFillHeart
                          className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                          onClick={handlePostLike}
                        />
                      ) : (
                        <AiOutlineHeart
                          className="text-2xl hover:opacity-50 cursor-pointer"
                          onClick={handlePostLike}
                        />
                      )}

                      <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
                      <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
                    </div>

                    <div className="cursor-pointer">
                      {isSaved ? (
                        <BsBookmarkFill
                          className="text-xl hover:opacity-50 cursor-pointer"
                          onClick={handleSavePost}
                        />
                      ) : (
                        <BsBookmark
                          className="text-xl hover:opacity-50 cursor-pointer"
                          onClick={handleSavePost}
                        />
                      )}
                    </div>
                  </div>
                  <div className="w-full py-2">
                    <p className="flex">10 likes</p>
                    <p className="opacity-50 text-sm">1 day ago</p>
                  </div>
                  <div className="flex items-center w-full">
                    <BsEmojiSmile />
                    <input
                      className="commentInputs w-full"
                      type="text"
                      placeholder="Add a comment..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CommentModel;
