import * as React from "react";
import { Link } from "react-router-dom";


function MarketContact() {
  return (
    <div className="flex flex-col bg-white">
      <div className="flex gap-5 justify-between py-7 pr-20 pl-7 w-full text-xl text-white whitespace-nowrap bg-violet-950 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 aspect-square w-[43px]"
        />
        <div className="flex gap-5 justify-between my-auto">
        <Link to="/" className="cursor-pointer">Home</Link>           
        <Link to="/MarketAbout" className="cursor-pointer">About</Link>           
          <div>Contact</div>
        </div>
      </div>
      <div className="self-end mt-24 mr-36 text-base leading-8 text-center text-black w-[352px] max-md:mt-10 max-md:mr-2.5">
        We're excited to hear about your next big idea. Let's connect and find
        out how we can help you achieve your goals.
      </div>
      <div className="flex flex-col px-16 mt-24 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[44%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center mt-7 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet="https://imgs.search.brave.com/p0KR9OYOjhsKQjVixTvfRVcenCuSv-6WZBOl77nxg3k/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by92aWV3LXByb2Zl/c3Npb25hbC1oYW5k/c2hha2UtYnVzaW5l/c3MtcGVvcGxlXzIz/LTIxNTA5MTcwMTgu/anBnP3NpemU9NjI2/JmV4dD1qcGc"
                  className="self-stretch w-full aspect-[0.84]"
                />
                <div className="mt-8 text-3xl text-violet-950">
                  Connect
                  <br />
                </div>
                <div className="mt-9 text-base text-yellow-700">
                  Get In Touch
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-base text-center text-violet-950 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
                  <div className="flex flex-col flex-1">
                    <div>First Name *</div>
                    <div className="shrink-0 mt-14 h-px bg-black border border-black border-solid max-md:mt-10" />
                  </div>
                  <div className="flex flex-col flex-1">
                    <div>Last Name *</div>
                    <div className="shrink-0 mt-14 h-px bg-black border border-black border-solid max-md:mt-10" />
                  </div>
                </div>
                <div className="mt-16 max-md:mt-10 max-md:max-w-full">
                  Email *
                </div>
                <div className="shrink-0 mt-14 bg-black border border-black border-solid h-[3px] max-md:mt-10 max-md:max-w-full" />
                <div className="mt-20 max-md:mt-10 max-md:max-w-full">
                  Subject *
                </div>
                <div className="shrink-0 mt-16 bg-black border border-black border-solid h-[3px] max-md:mt-10 max-md:max-w-full" />
                <div className="mt-28 max-md:mt-10 max-md:max-w-full">
                  Message *
                </div>
                <div className="shrink-0 mt-9 bg-white border border-black border-solid shadow-sm h-[103px] max-md:max-w-full" />
              </div>
            </div>
          </div>
        </div>
        <div className="justify-center self-end px-10 py-5 mt-20 mr-52 text-base leading-8 text-center text-white whitespace-nowrap bg-cyan-600 rounded-2xl max-md:px-5 max-md:mt-10 max-md:mr-2.5">
          SEND
        </div>
      </div>
      <div className="flex gap-5 justify-between px-16 py-2.5 mt-24 w-full text-sm text-white bg-violet-950 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
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

export default MarketContact;
