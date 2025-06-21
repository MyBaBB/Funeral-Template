import { GrRewind } from "react-icons/gr";
import "./WindowHistoryButton2.css";
const WindowHistoryButton = () => {
  const handleGoBack = () => {
    window.history.back();
  };
  return (
    <div className="window-history-button2-wrapper text-2xl">
      <button
        className="window-history-button2 dataToolTip57 rounded-lg border-2 border-solid border-black bg-black/50 p-4 px-[25px] font-Itim-Regular text-white hover:bg-black hover:text-blue-400"
        data-tool-tip="Window History"
        aria-label="Go Back to previous Window Before this one"
        onClick={handleGoBack}
      >
        Back
        <span className="relative m-auto flex justify-center">
          <GrRewind size={25} />
        </span>
      </button>
    </div>
    //   );
    //   return (
    //     <div className="window-history-button-wrapper  ">
    //    <Link to="/HeaderTopRef">
    //     <button className="window-history-button rounded-lg
    // border-2 border-solid border-black bg-black/50 p-4 text-lg text-blue-400
    // hover:bg-black hover:text-white hover:shadow-lg
    //     "
    //     aria-label="Go Back to previous Window Before this one"
    //     title="Go Back to previous Window">
    //       Go Back
    //       <span className="relative flex  justify-center m-auto"><GrRewind size={25} /></span>
    //     </button>
    //   </Link>
    //     </div>
  );
};

export default WindowHistoryButton;
