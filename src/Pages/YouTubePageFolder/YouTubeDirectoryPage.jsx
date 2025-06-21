// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./YouTubeDirectoryPage.css";
 
import Cross from "/Funeral350x500Transparency.webp"
 
 
 
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
      
      <div className="fixed right-[9rem] top-24 ">
        <Link to={"/"} className="">
          <button className="animateHomePageButton relative   z-50 m-auto flex">
            <div className="absolute ">
              <span className="absolute  text-white">
                <img src={Cross} alt="Home" className=" scale-[200%] md:scale-[400%]" />
                 <span className="font-Itim-Regular text-transparent ">Home</span>
              </span>
             
            </div>
          </button>
        </Link>
     
      </div>
    </div>
  );
};

export default YouTubeDirectoryPage;
