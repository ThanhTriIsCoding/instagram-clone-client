import React from "react";
import StoryViewer from "../../Components/StoryComponent/StoryViewer";

const Story = () => {
  const story = [
    {
      image:
        "https://www.thepoetmagazine.org/wp-content/uploads/2024/06/meme-meo-suyt.jpg",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_3rqg6mdDIuI5n_G9c7PTZ7F2gjFtWxVdt88RiB34IxME7KTVwwsLsalm8H4kHubsmUc&usqp=CAU",
    },
    {
      image:
        "https://blog.maika.ai/wp-content/uploads/2024/02/anh-meo-meme-8.jpg",
    },
  ];
  return (
    <div>
      <StoryViewer stories={story} />
    </div>
  );
};

export default Story;
