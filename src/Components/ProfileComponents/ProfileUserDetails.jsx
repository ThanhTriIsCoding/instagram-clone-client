import React from "react";
import { TbCircleDashed } from "react-icons/tb";

const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://us-tuna-sounds-images.voicemod.net/3cce65dc-b33e-4b23-ac04-b66afd901a8f-1679958733521.png"
            alt=""
          />
        </div>

        <div className="space-y-5 w-full flex flex-col">
          <div className="flex space-x-10 items-center">
            <p>Username</p>
            <button>Edit Profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>

            <div>
              <span className="font-semibold mr-2">5</span>
              <span>followers</span>
            </div>

            <div>
              <span className="font-semibold mr-2">7</span>
              <span>following</span>
            </div>
          </div>
          <div className="text-left">
            <p className="font-semibold">Full Name</p>
            <p className="font-thin text-sm">Lifestyle | Travel | Gratitude.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetails;
