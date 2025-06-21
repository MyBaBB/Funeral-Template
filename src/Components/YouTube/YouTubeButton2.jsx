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
    <div className="absolute right-[-8rem] top-[-2rem] z-10 m-8 scale-50">
      <Link to={"/Youtube"}>
        <div
          className={`youTubeButtonWrapper1 z-20 w-fit rounded-2xl 
          border-2 border-slate-300 bg-[#692018] p-[.65rem] font-Itim-Regular
           text-4xl text-white shadow-md hover:text-blue-400 ${
             setIsPlayingMusic ? "is-playing" : ""
           }`}
          data-tool-tip="Watch the Video"
          aria-label="YouTube Video"
        >
          <TfiYoutube size={75} />
        </div>
      </Link>
      
    </div>
  );
};

export default YouTubeButton;
