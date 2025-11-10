import NewBody from "../Components/NewBody.jsx";
import { BsFillSafeFill } from "react-icons/bs";
import Investigator from "/Investigator.png";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
function App() {
  return (
    <div>
      <div className="ZenithWrapper relative flex h-screen w-full flex-col items-center justify-center bg-[#00100]">
      <span className="z-10 text-white">
        Safe & Secure
         <BsFillSafeFill size={99} color="lime" className="z-10" />
         
      </span>
      
        <NewBody />
      </div>
      <div className="absolute z-50 top-4 left-4">
       <img src={Investigator} alt="Investigator OK " className="" />
       <span className="font-Itim-Regular absolute top-[2rem] left-[10rem] -rotate-12 text-green-200 text-4xl">
        Case Closed
        <span>
          <IoMdCheckmarkCircleOutline size={48} color="lime" className="inline-block ml-4" />
        </span>
        
        </span>
      </div>
    </div>
  );
}

export default App;
