import * as React from "react";
import { Link } from "react-router-dom";

function MarketAbout() {
  return (
    <div className="flex flex-col text-xl text-white bg-white">
      <div className="flex gap-5 justify-between py-7 pr-20 pl-5 w-full whitespace-nowrap bg-violet-950 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="..."
          className="shrink-0 aspect-square w-[43px]"
        />
        <div className="flex gap-5 justify-between my-auto">
        <Link to="/" className="cursor-pointer">Home</Link>           
          <div>About</div>
          <div>Contact</div>
        </div>
      </div>
      <div className="flex flex-col items-center px-20 mt-28 w-full text-yellow-700 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="text-3xl text-violet-950">Our Beginnings</div>
        <div className="mt-7">Who we are</div>
        <div className="mt-24 leading-8 text-center text-black max-md:mt-10 max-md:max-w-full">
          <span className="text-violet-950">TRIFECTA CONNECT</span>
          <span className="">
            , developed by Prabhas Varma Solutions, represents an innovative
            approach to enhancing productivity and efficiency within software
            companies. As an Enterprise Resource Planning (ERP) system, it
            integrates three distinct interfaces tailored for different
            stakeholders: company higher-ups, employees, and clients. This
            multi-dimensional connectivity enables seamless collaboration,
            streamlined communication, and optimized workflows across all levels
            of the organization.
          </span>
          <br />
          <br />
        </div>
        <img
          loading="lazy"
          srcSet="https://imgs.search.brave.com/lJKqHrGfUYy-LmfFAVUAGuznaRc5iHcHfO8KkgsJFt4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/Mzg0Mzg2Mi9waG90/by9idXNpbmVzcy1t/ZWV0aW5nLndlYnA_/Yj0xJnM9MTcwNjY3/YSZ3PTAmaz0yMCZj/PTZSNTRGRERCQi1t/WkhPeFRfbjFoRGE5/b3dfRXhDM2dxYkNo/R05LdlJWaEU9"
          className="mt-28 max-w-full aspect-[1.72] w-[556px] max-md:mt-10"
        />
        <div className="mt-20 leading-8 text-center text-black max-md:mt-10 max-md:max-w-full">
          The platform aims to address the diverse needs of software companies
          by providing comprehensive solutions for project management, resource
          allocation, task tracking, client communication, and more. By
          centralizing essential functions within a single system, TRIFECTA
          CONNECT empowers companies to optimize their operations, minimize
          redundancies, and enhance overall performance.
        </div>
        <div className="self-start mt-60 ml-6 text-3xl max-md:mt-10 max-md:ml-2.5">
          Key Features
        </div>
        <div className="self-stretch mt-14 leading-7 text-violet-950 max-md:mt-10 max-md:max-w-full">
          <br />
          <ul>
            <li>
              <span className="text-violet-950">Executive Dashboard</span>
              <span className="">
                : Offering company leaders a comprehensive overview of key
                performance indicators, project statuses, and financial metrics.
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="text-violet-950">Employee Portal:</span>
              <span className="">
                {" "}
                Providing a user-friendly interface for staff members to access
                project assignments, submit timesheets, collaborate with team
                members, and stay updated on company news and announcements.
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="text-violet-950">Client Interface:</span>
              <span className="">
                {" "}
                Facilitating seamless communication and collaboration between
                software companies and their clients, allowing for project
                updates, feedback submission, and transparent progress tracking.
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="text-violet-950">Project Management Tools</span>
              <span className="">
                : Including task assignment, milestone tracking, resource
                allocation, and scheduling functionalities to ensure efficient
                project execution and delivery.
              </span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="text-violet-950">
                Data Analytics and Reporting:
              </span>
              <span className="">
                {" "}
                Generating customizable reports and insights to help
                stakeholders make informed decisions, identify trends, and
                optimize processes for continuous improvement.
              </span>
            </li>
          </ul>
          <br />  <br />  <br />
        </div>
        <div className="mt-20 leading-7 text-center text-black max-md:mt-10 max-md:max-w-full">
          Overall, TRIFECTA CONNECT represents a holistic solution designed to
          meet the unique challenges and requirements of modern software
          companies, empowering them to thrive in a competitive market
          landscape.
        </div>
        <div className="self-stretch mt-36 text-center text-black max-md:mt-10 max-md:max-w-full">
           By streamlining processes and workflows, the TRIFECTA CONNECT boosts
          productivity and enables companies to deliver products and services
          faster. With modules like resource planning and time tracking,
          companies can allocate resources effectively, minimize downtime, and
          maximize output.
        </div>
        <div className="self-start mt-56 ml-6 text-3xl max-md:mt-10 max-md:ml-2.5">
          Meet the MAN
        </div>
        <img loading="lazy" srcSet="https://imgs.search.brave.com/jYL655LmWnz1XZSAEIl_UEsmfZ14Zk_7qvaubfvLYYc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9wb3J0cmFpdC1j/b25maWRlbnQtbWFs/ZS1idXNpbmVzcy1t/YW4tc21pbGluZy1j/YW1lcmEtd2l0aC1z/cGFjZS10ZXh0Xzkw/NjgwOS03NzI0Lmpw/Zz9zaXplPTYyNiZl/eHQ9anBn" className="mt-32 max-w-full aspect-[0.75] w-[391px] max-md:mt-10"/>
        <div className="mt-12 text-2xl leading-6 text-violet-950 max-md:mt-10">
          PRABHAS VARMA
        </div>
        <div className="mt-12 text-2xl leading-6 max-md:mt-10">FOUNDER</div>
      </div>
      <div className="flex gap-5 justify-between px-16 py-2.5 mt-48 w-full text-sm bg-violet-950 max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <img loading="lazy" srcSet="..."  className="shrink-0 max-w-full aspect-[1.39] w-[218px]"/>
        <div className="flex flex-col my-auto">
          <div>7093xx4xxx</div>
          <div className="mt-8">trifectaconnect@suiii.com</div>
          <div className="mt-7">Pattangere, Bengaluru</div>
        </div>
      </div>
    </div>
  );
}


export default MarketAbout;

