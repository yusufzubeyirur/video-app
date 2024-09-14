import React from "react";

const Menu = ({ videos, onVideoSelect }) => {
  return (
    <div>
      {videos.map((video) => (
        <label key={video.videoId} className="p-2 cursor-pointer">
          <input
            type="radio"
            name="video"
            value={video.url}
            onChange={(e) => onVideoSelect(e.target.value)}
          />
          {video.title}
        </label>
      ))}
    </div>
  );
};
export default Menu;
