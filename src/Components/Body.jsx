import "./Body.css";
import ElsaVanImageButton from '../assets/ElsaImageButton.png' ;
import ClickTheVan from "./ClickTheVan.jsx";
const Body = () => {
  return (
    <>
    <a href=" https://photos.app.goo.gl/Gin7NfyHUp7EnYiE7" target="_blank" rel="noopener noreferrer">
    <div className="BodyWrapper  w-fit">


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
    </>
  );
};

export default Body;
