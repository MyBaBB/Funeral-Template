import Image1 from "/Funeral350x500Transparency.webp";
import "./CoverCrossImage.css";

function App() {
  return (
    <div>
      <div className="image1OuterWrapper  relative flex w-screen items-center justify-center  ">
        <div className="image1Wrapper relative flex m-auto items-center justify-center ">
          <div className="">
      
          </div>
          <img
            className="image1 w-[50%]"
            src={Image1}
            alt="Cross with Transparency"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
