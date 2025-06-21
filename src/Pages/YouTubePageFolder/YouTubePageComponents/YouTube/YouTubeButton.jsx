import React from "react";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "./YouTubeButton.css";
import { useState, useEffect } from "react";

const YouTubeButton = () => {
  const setIsPlayingMusic = useState(false);

  useEffect(() => {
    const handleMusicPlaying = () => {
      const musicButton = document.getElementById("MusicButton");
      if (musicButton) {
        setIsPlayingMusic(musicButton.classList.contains("is-playing"));
      }
    };

    // Add event listener to check music status
    document.addEventListener("musicStatusChange", handleMusicPlaying);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("musicStatusChange", handleMusicPlaying);
    };
  }, []);

  return (
    <div className="absolute bottom-[-5.9rem] right-[-3.80rem] z-10 m-8 scale-50 sm:right-[-5.9rem]">
      <a
        href="https://mybabb.com/YoutubeDirectory"
        onClick={() => setIsPlayingMusic(false)}
      >
        <div
          className="youTubeButtonWrapper2 dataToolTip59 dataToolTipStyles font-Itim-Regular z-20  w-fit  rounded-2xl 
                    border-2 border-slate-300 
                  bg-[#692018] p-[.65rem] text-4xl text-white shadow-md hover:text-blue-400 "
          data-tool-tip="Watch the Video"
          aria-label="YouTube Video"
        >
          <TfiYoutube size={75} />
        </div>
      </a>
    </div>
  );
};

export default YouTubeButton;
