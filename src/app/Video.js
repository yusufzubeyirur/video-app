import React from "react";

const Video = ({ videoUrl }) => {
  return (
    <div className="flex flex-col items-center mt-8">
      {videoUrl ? (
        <div className="relative transition-transform duration-300 hover:scale-105">
          <video
            key={videoUrl}
            width="600"
            height="400"
            controls
            className="rounded-2xl shadow-2xl border-2 border-blue-400 hover:border-blue-600 transition-all duration-300"
            autoPlay
          >
            <source src={videoUrl} type="video/mp4" />
            Tarayıcınız bu videoyu desteklemiyor.
          </video>
        </div>
      ) : (
        <p className="text-lg text-gray-600">Lütfen bir video seçiniz.</p>
      )}
    </div>
  );
};

export default Video;
