import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = () => {
  return (
    <div className="youtube-list">
      {YoutubeData.map((item, index) => {
        let newClass = " ";
        if (index === 1) newClass = "abc";
        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar}
            title={item.title}
            author={item.author}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
