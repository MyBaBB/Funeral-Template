// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./YouTubeDirectoryPage.css";
 

import { GiWoodCabin } from "react-icons/gi";
 
const handleGoBack = () => {
  window.history.back();
};
const YouTubeDirectoryPage = () => {
  return (
    <div>
      <section className="youTubeDirectoryPage relative flex h-screen w-full flex-col items-center justify-center">
        <div className="youTubePlayerBackground relative m-auto flex h-[75%] w-[75%] flex-col items-center justify-center">
          <div className="relative flex flex-col items-center justify-center p-2">
            {/* <div
              className="YouTubeButtonsWrapper 0 relative mt-8 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-3
                         lg:grid-cols-6"
            > */}
            <div className="YouTubeButtonsWrapper">
              <Link to={"/"} className="">
                <button
                  className="youTubeButtons"
                  title="
                  Videos Coming Soon"
                >
                  Videos Coming Soon
                </button>
              </Link>

              {/* <Link
                to={"/WebDeveloperPageTop10"}
                className="relative flex h-full w-full"
              >
                <button
                  className="youTubeButtons    "
                  title="Why Go Pro ?"
                >
                  Top 10
                </button>
              </Link> */}
            </div>
          </div>

          {/* xxxx new copyright button xxxx*/}
        </div>

     <a href="https://mybabb.com" className=" absolute bottom-0 left-4  ">
        <div className="copyrightWrapper-YouTube  flex h-fit w-full justify-center">
          <div className="relative m-auto mb-[1.5rem] ml-4 flex w-full justify-start">
            <p className="copyrightText-YouTube absolute flex h-fit w-fit items-center justify-center whitespace-nowrap rounded-md bg-slate-800 p-1 text-white">
              <span className="">&lt;&lt;&lt;&copy;</span>
              <span className="text-[#FF8200]"> Brett&apos;s </span>
              <span>
                <em>9-14-2023</em>&gt;&gt;&gt;
              </span>
            </p>
          </div>
        </div>
      </a>
      </section>
      <div className="fixed bottom-10 left-4"></div>
      <div className="fixed left-[4rem] top-4">
        <Link to={"/"} className="">
          <button className="animateHomePageButton relative top-20 z-50 m-auto flex">
            <div className="absolute bottom-0 left-1/2 w-fit -translate-x-1/2">
              <span className="absolute bottom-[1.2rem] left-1/2 w-fit -translate-x-1/2 text-white">
                <GiWoodCabin size={30} />
              </span>
              <span className="font-Itim-Regular">Home</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default YouTubeDirectoryPage;
