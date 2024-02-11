import React, { useState } from 'react'
import twitr from '../assets/images/twitter.png'
import insta from '../assets/images/instagram.png'
import discord from '../assets/images/discord.png'

const Mynav = () => {
  const [show, setshow] = useState(true);
  function view() {
    setshow(!show);
    document.body.classList.toggle("max-lg:!overflow-hidden")
  }
  return (
    <>
      <div className="max-w-[1132px] mx-auto px-3 pt-7">
        <nav className="lg:py-[16px] py-3 lg:ps-6 lg:pe-3 px-4 bg-white rounded-[61.102px] border-b-4 border-b-[black] flex items-center justify-between sm:mb-20 mb-10 h-[67px]">
          <a href="">
            <h2 className="ff-lucky font-normal cursor-pointer leading-[90%] drop-shadow-[0px_1.337px_0px_#000] text-[#FBA11D] sm:text-[40px] text-[28px]">
              D<span className="text-[#23AAAC]">i</span>
              <span className="text-[#D45B07]">n</span>
              <span className="text-[#8EC627]">o</span>
              <span className="text-[#FCCA2B]">L</span>
              <span className="text-[#8F78D2]">F</span>
              <span className="text-[#8EC627]">G</span>
            </h2>
          </a>
          <ul
            className={`${show ? "left-[-100%]" : "left-0 bg-[#ffffff]"
              } flex items-center gap-6 flex-row max-lg:fixed max-lg:z-50 max-lg:flex-col top-0 max-lg:w-full max-lg:h-full max-lg:min-h-screen max-lg:justify-center transition-all ease-linear duration-300}`}
          >
            <li>
              <a
                href="#about"
                className="text-black font-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Tokenomic"
                className="text-black font-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
              >
                Tokenomic
              </a>
            </li>
            <li>
              <a
                href="#Roadmap"
                className="text-black font-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
              >
                Roadmap
              </a>
            </li>
            <li>
              <a
                href="#Faq"
                className="text-black font-chewy text-[18px] font-normal leading-normal hover:after:w-[80%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-[#000000] after:h-[2px] relative after:left-[0] after:bottom-[0] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
              >
                FAQ
              </a>
            </li>
            <li className="lg:hidden flex">
              <a
                href=""
                className="bg-[url(./assets/images/joinbtnbg.webp)] bg-cover bg-no-repeat text-black font-chewy text-[18px] font-normal leading-normal px-9 pt-[11px] pb-[20px]"
              >
                Join Now
              </a>
            </li>
            <li className="gap-2 items-center sm:hidden flex">
              <a href="https://www.twitter.com" target="_blank">
                {/* <img src={twitr} alt="twitr" /> */}
                <svg className='cursor-pointer hover:scale-[1.1] duration-[0.5s]' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18.5" cy="18.5" r="18" stroke="black" />
                  <path d="M28 12.7793C27.3381 13.0799 26.627 13.2831 25.8794 13.3749C26.6508 12.9018 27.2278 12.1572 27.503 11.28C26.7783 11.7212 25.9851 12.0318 25.158 12.1982C24.6018 11.5895 23.8651 11.186 23.0623 11.0504C22.2594 10.9148 21.4354 11.0547 20.7181 11.4484C20.0007 11.8421 19.4303 12.4675 19.0953 13.2276C18.7602 13.9877 18.6794 14.8399 18.8652 15.6519C17.3968 15.5764 15.9603 15.1851 14.649 14.5036C13.3376 13.8221 12.1807 12.8655 11.2533 11.696C10.9362 12.2568 10.7539 12.9069 10.7539 13.5992C10.7535 14.2225 10.9033 14.8362 11.1898 15.386C11.4763 15.9357 11.8908 16.4045 12.3965 16.7506C11.81 16.7315 11.2366 16.5691 10.7238 16.2768V16.3256C10.7237 17.1998 11.0187 18.0471 11.5587 18.7237C12.0987 19.4003 12.8504 19.8646 13.6863 20.0377C13.1423 20.1886 12.5719 20.2109 12.0183 20.1027C12.2542 20.8549 12.7136 21.5127 13.3322 21.9839C13.9508 22.4551 14.6977 22.7163 15.4683 22.7308C14.1602 23.7835 12.5446 24.3545 10.8815 24.352C10.5869 24.3521 10.2926 24.3344 10 24.2992C11.6881 25.4118 13.6532 26.0023 15.6602 26C22.454 26 26.168 20.2319 26.168 15.2294C26.168 15.0668 26.164 14.9027 26.1569 14.7402C26.8793 14.2046 27.5029 13.5414 27.9984 12.7817L28 12.7793Z" fill="black" />
                </svg>

              </a>
              <a href="https://www.discord.com" target="_blank">
                <img src={discord} alt="discord" className=' hover:scale-[1.1] duration-[0.5s]'/>
              </a>
              <a href="https://www.instagram.com" target="_blank">
                <img src={insta} alt="insta" className=' hover:scale-[1.1] duration-[0.5s]'/>
              </a>
            </li>
          </ul>
          <ul className="gap-2 items-center sm:flex hidden">
            <li>
              <a href="https://www.twitter.com" target="_blank">
                <img src={twitr} alt="twitr" className='curso hover:scale-[1.1] duration-[0.5s]'/>
              </a>
            </li>
            <li>
              <a href="https://www.discord.com" target="_blank">
                <img src={discord} alt="discord" className=' hover:scale-[1.1] duration-[0.5s]'/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com" target="_blank">
                <img src={insta} alt="insta" className=' hover:scale-[1.1] duration-[0.5s]'/>
              </a>
            </li>
            <li>
              <a
                href=""
                className="bg-[url(./assets/images/joinbtnbg.webp)] bg-cover bg-no-repeat text-black font-chewy text-[18px] font-normal leading-normal px-9 pt-[10px] pb-[17px] lg:block hidden hover:text-white transition-all duration-500 ease-in-out"
              >
                Join Now
              </a>
            </li>
          </ul>
          <label
            className="cursor-pointer lg:hidden w-[32px] sm:h-[26px] h-[22px] relative z-50 flex justify-between flex-col"
            onClick={view}
          >
            <span
              className={`${show
                  ? ""
                  : " rotate-[50deg] translate-y-[16px] sm:translate-y-[20px]"
                } bg-[#000000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
            <span
              className={`${show ? "" : "hidden"
                } bg-[#000000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
            <span
              className={`${show ? "" : "rotate-[-50deg] translate-y-[-50%]"
                } bg-[#000000] h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
            ></span>
          </label>
        </nav>
      </div>

    </>
  )
}

export default Mynav