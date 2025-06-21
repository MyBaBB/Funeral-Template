import Image1 from "/Funeral350x500Transparency.webp";
import "./CoverCrossImage.css";  

function App() {
  return (
   <div>
       <div className="image1OuterWrapper relative flex items-center  justify-center  md:justify-end w-screen  ">
       <div className="image1Wrapper relative flex items-center  justify-center ">
         <div className=" absolute text-white top-2 left-2 font-LibreBaskerville-Italic
                     text:sm sm:text-xl ">
                <span className="imageTitleDate  ">
                 Con amor 
               </span>
               <br />
               <span className="text-white" >
                 en la memoria
              </span> 
              </div>
          <img className="image1  w-[50%] " src={Image1} alt="Cross with Transparency" />
       </div>
    </div>
  </div>
  );
}

export default App;
