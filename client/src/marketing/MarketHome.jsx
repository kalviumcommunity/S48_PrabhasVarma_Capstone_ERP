import * as React from "react";
import { Link } from "react-router-dom";
import '../App.css'


function MarketHome() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex gap-5 justify-between py-7 pr-20 pl-6 w-full text-xl text-white whitespace-nowrap bg-violet-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="../assets/shortLogo.png"
          className="shrink-0 aspect-square w-[43px]"
        />
        <div className="flex gap-5 justify-between my-auto">
          <div>Home</div>
          <Link to="/MarketAbout" className="cursor-pointer">About</Link>           
          <div>Contact</div>
        </div>
      </div>
      <div className="flex flex-col items-center self-center px-5 mt-20 w-full max-w-[743px] max-md:mt-10 max-md:max-w-full">
        <div className="text-3xl text-violet-950">Streamline your Business</div>
        <div className="mt-6 text-base text-black">
          Boost Productivity and Efficiency
        </div>
        <img
          loading="lazy"
          srcSet="https://imgs.search.brave.com/vWoPD0m_Ia7VRwY3S34jJO7B6X6rkOzHyc1BVETZySg/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by95b3VuZy1tdWx0/aS1ldGhuaWMtYnVz/aW5lc3MtcGVvcGxl/LWdyb3VwLXdhbGtp/bmctc3RhbmRpbmct/dG9wLXZpZXdfNTMw/Njk3LTEwNzY0Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn"
          className="mt-12 max-w-full aspect-[1.64] w-[673px] max-md:mt-10"
        />
        <div className="self-stretch mt-44 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet="https://imgs.search.brave.com/i-7QZfUXqOMaWikHqGTEJKTSUyJrCG3Dw4hLwq4RYcs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTAy/MjgzODcyL3Bob3Rv/L2J1c2luZXNzbWFu/LXdhbGtpbmctdXAt/c3RhaXJzLWluLXRy/YWluLXN0YXRpb24u/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVVUc3ZpSEtPZHhX/QWdxSmxrYVdtck5w/eW1uSFBMbE9jNXJv/bHNXVWxPbVU9"
                className="grow w-full aspect-[0.92] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-2 max-md:mt-10 max-md:max-w-full">
                <div className="text-3xl text-yellow-700 max-md:max-w-full">
                  TRIFECTA CONNECT
                </div>
                <div className="mt-16 text-sm leading-6 text-black max-md:mt-10 max-md:max-w-full">
                  <br />
                  <br />
                  <span className="">
                    It is an innovative ERP system developed by Prabhas Varma
                    Solutions, aimed at enhancing the productivity and
                    efficiency of software companies. It stands as the company's
                    inaugural venture, showcasing their commitment to
                    revolutionizing business processes in the tech industry.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-start mt-52 text-3xl text-black max-md:mt-10">
          Schedule a DEMO
        </div>
        <div className="justify-center items-center px-16 pt-20 pb-20 mt-9 text-base text-black border border-solid shadow-sm border-violet-950 rounded-[49px] max-md:px-5 max-md:max-w-full">
          Nothing to book right now. Check back soon
        </div>
      </div>
      <div className="flex gap-5 justify-between px-16 py-2.5 mt-48 w-full text-sm text-white bg-violet-950 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          src="../assets/pV.png"
          className="shrink-0 max-w-full aspect-[1.39] w-[218px]"
        />
        <div className="flex flex-col my-auto">
          <div>7093xx4xxx</div>
          <div className="mt-8">trifectaconnect@suiii.com</div>
          <div className="mt-7">Pattangere, Bengaluru</div>
        </div>
      </div>
    </div>
  );
}


export default MarketHome;