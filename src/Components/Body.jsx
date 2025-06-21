import "./Body.css";
import YouTubeButton2 from "../Components/YouTube/YouTubeButton2.jsx";
const Body = () => {
  return (
    <>
    <div className="BodyWrapper">
       <div className="absolute top-0 left-0">< YouTubeButton2 /> </div> 
    <div className="Body flex max-h-full min-h-[100px] w-full items-center justify-center whitespace-nowrap font-LibreBaskerville-Italic text-base text-white sm:text-3xl lg:text-4xl">
      Elsa Rodriguez
    </div>
    </div>

    </>
  );
};

export default Body;
