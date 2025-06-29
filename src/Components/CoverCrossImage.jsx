import Image1 from "/Funeral350x500Transparency.webp";
import "./CoverCrossImage.css";

function App() {
  return (
    <div>
      <div className="image1OuterWrapper mt-20 relative flex w-screen items-center justify-center md:justify-end">
        <div className="image1Wrapper relative flex items-center justify-center">
          <div className="text:sm absolute left-2 top-2 font-LibreBaskerville-Italic text-white sm:text-xl">
            {/* <span className="imageTitleDate">Con amor</span>
            <br />
            <span className="text-white">en la memoria</span> */}
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
