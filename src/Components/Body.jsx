import { useRef } from "react";
import "./Body.css";
import ElsaVanImageButton from '../assets/ElsaImageButton.png';
import ClickTheVan from "./ClickTheVan.jsx";
import { Link } from "react-router-dom";

const Body = () => {
  const audioRef = useRef(null);

  const handleClick = () => {
    setTimeout(() => {
      if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Playback failed:", err);
      });
      }
    }, 30000); // 30-second delay
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="https://images.brainbuddys.com/Sound/Mamacita-song_10.mp3"
        preload="auto"
        loop
      />

<<<<<<<<< Temporary merge branch 1
      <div onClick={handleClick}>
        <Link to="/XList" target="_blank" rel="noopener noreferrer">
          <div className="BodyWrapper w-fit">
            <div className="Body relative flex items-center justify-center w-fit m-auto">
              <img
                src={ElsaVanImageButton}
                alt="Elsa Rodriguez"
                width={300}
                height={300}
                className="rounded-lg m-auto z-10"
              />
            </div>
            <ClickTheVan />
          </div>
        </Link>
      </div>
=========

       {/* <div className="Body relative flex max-h-full min-h-[100px] w-screen items-center justify-center whitespace-nowrap
   ">
   < CrossImage  />
    </div> */}
      


    <div className="Body relative flex  items-center justify-center w-fit m-auto 
        ">
     <img src={ElsaVanImageButton} alt="Elsa Rodriguez" width={300} height={300} className="rounded-lg m-auto z-10" />
    </div>
            < ClickTheVan />
    </div>
    
</a>
>>>>>>>>> Temporary merge branch 2
    </>
  );
};

export default Body;
