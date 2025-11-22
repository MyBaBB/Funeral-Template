 
import Investigator from "/Investigator2.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
function App() {
  return (
    <div>
      <div className="ZenithWrapper relative flex h-screen w-full flex-col items-center justify-center bg-[#00100]">
       <div className="absolute z-50  ">
       <img src={Investigator} alt="Investigator OK " className="" />
       <span className="font-Itim-Regular absolute top-[2rem] left-[10rem] -rotate-12 text-[lime] text-4xl">
        Safe Zone
        <span>
          <IoMdCheckmarkCircleOutline size={49} color="lime" className="inline-block ml-4" />
        </span>
        
        </span>
      </div>
        
      </div>
     
    </div>
  );
}

export default App;
