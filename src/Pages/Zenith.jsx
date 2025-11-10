import NewBody from "../Components/NewBody.jsx";
import { BsFillSafeFill } from "react-icons/bs";

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
    </div>
  );
}

export default App;
