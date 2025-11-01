 
import "./Body.css";
import { useState } from 'react';

const ClickTheVan = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVanClick = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      setTimeout(() => {
        const audio = new Audio('https://images.brainbuddys.com/Sound/Mamacita-song_10.mp3');
        audio.play();
        audio.onended = () => setIsPlaying(false);
      }, 10000);
    }
  };

  return (
    <div className='ClickTheVan' onClick={handleVanClick} style={{cursor: 'pointer'}}>
      ClickTheVan
    </div>
  );
};

export default ClickTheVan