"use client";
import { useState } from "react";
import Video from "./Video";
import Menu from "./Menu";
import "./global.css";

const App = () => {
  const [videoSelect, setVideoSelect] = useState("");

  const videos = [
    {
      videoId: 1,
      url: "https://videos.pexels.com/video-files/854942/854942-hd_1920_1080_25fps.mp4",
      title: "Salyangoz",
    },
    {
      videoId: 2,
      url: "https://videos.pexels.com/video-files/854982/854982-hd_1280_720_25fps.mp4",
      title: "Kedi",
    },
    {
      videoId: 3,
      url: "https://videos.pexels.com/video-files/3195531/3195531-uhd_2560_1440_25fps.mp4",
      title: "Geyik",
    },
    {
      videoId: 4,
      url: "https://videos.pexels.com/video-files/855643/855643-hd_1920_1080_25fps.mp4",
      title: "Örümcek",
    },
  ];

  const handleVideoSelect = (url) => {
    setVideoSelect(url);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Project 6 Video Player
      </h1>
      <Menu
        onVideoSelect={handleVideoSelect}
        videos={videos}
        selectedVideo={videoSelect}
      />
      {videoSelect ? (
        <Video videoUrl={videoSelect} />
      ) : (
        <p className="mt-4 text-gray-500 text-xl">Lütfen bir video seçin.</p>
      )}
    </div>
  );
};

export default App;
