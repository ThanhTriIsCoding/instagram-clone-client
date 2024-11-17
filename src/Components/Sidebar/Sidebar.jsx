import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import { main } from "./SidebarConfig";
import { useNavigate } from "react-router-dom";
import CreatePostModal from "../Post/CreatePostModal";
import { useDisclosure } from "@chakra-ui/react";
import SearchComponent from "../SearchComponents/SearchComponent";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSearchIsVisible, setIsSearchIsVisible] = useState(false);

  const handleTabClick = (title) => {
    setActiveTab(title);
    if (title === "Profile") {
      navigate("/username");
    } else if (title === "Home") {
      navigate("/");
    } else if (title === "Create") {
      onOpen();
    }
    if (title === "Search") {
      setIsSearchIsVisible(true);
    } else setIsSearchIsVisible(false);
  };

  return (
    <div className="sticky top-0 h-[100vh] flex">
      <div
        className={`flex flex-col justify-between h-full ${
          activeTab === "Search" ? "px-2" : "px-10"
        }`}
      >
        {
          <div>
            {activeTab !== "Search" && (
              <div className="pt-10">
                <img
                  className="w-40"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
                  alt="Instagram Logo"
                />
              </div>
            )}
            <div className="mt-10">
              {main.map((item) => (
                <div
                  key={item.title}
                  onClick={() => handleTabClick(item.title)}
                  className="flex items-center mb-5 cursor-pointer text-lg"
                >
                  {activeTab === item.title ? item.activeIcon : item.icon}
                  {activeTab !== "Search" && (
                    <p
                      className={`${
                        activeTab === item.title ? "font-bold" : "font-semibold"
                      }`}
                    >
                      {item.title}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        }
        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThreeOutline className="text-2xl" />
          {activeTab !== "Search" && <p className="ml-5">More</p>}
        </div>
      </div>
      <CreatePostModal onClose={onClose} isOpen={isOpen} />
      {isSearchIsVisible && <SearchComponent />}
    </div>
  );
};

export default Sidebar;
