// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import "./YouTubeDirectoryPage.css";
 
 
 
 
 
const YouTubeDirectoryPage = () => {
  return (
    <div>
      <section className="youTubeDirectoryPage relative flex h-screen w-full flex-col items-center justify-center">
        <div className="youTubePlayerBackground relative m-auto flex h-[90%] w-[90%] flex-col items-center justify-center
        " >
          <div className=" w-full h-full  p-2 ">
            {/* <div
              className="YouTubeButtonsWrapper 0 relative mt-8 grid grid-cols-2 gap-4 md:mt-14 md:grid-cols-3
                         lg:grid-cols-6"
            > */}
          
            <iframe
          title="YouTube video player"
          src="https://www.youtube.com/embed/1yVy8br0qPU?loop=1&playlist=1yVy8br0qPU"
   
          allowFullScreen                   
          width="100%"           
          height="100%"
          />
   

          {/* xxxx new copyright button xxxx*/}
        </div>
        </div>
     <a href="https://mybabb.com" className=" absolute bottom-0 left-4  ">
        <div className="copyrightWrapper-YouTube  flex h-fit w-full justify-center">
          <div className="relative m-auto mb-[1.5rem] ml-4 flex w-full justify-start">
            <p className="copyrightText-YouTube absolute flex h-fit w-fit items-center justify-center
             whitespace-nowrap rounded-md  p-1 text-slate-400 text-opacity-75">
              <span className="">&lt;&lt;&lt;&copy;</span>
              <span className="text-[#ff8200] text-opacity-75"> Brett&apos;s </span>
              <span>
                <em>6-21-2025</em>&gt;&gt;&gt;
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
