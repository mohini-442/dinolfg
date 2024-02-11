import React from "react";
import { useState } from "react";
import HelicopterImg from "../assets/images/pilotImg.webp";
import CartoonImg1 from "../assets/images/CartoonImg1.webp";
import CartoonImg2 from "../assets/images/CartoonImg2.webp";

const Header = () => {
    const [nav, setNav] = useState(true);
    if (nav === false) {
        document.body.classList.add("max-lg:overflow-hidden");
    } else {
        document.body.classList.remove("max-lg:overflow-hidden");
    }
    return (
        <>
            <div className="lg:bg-BgSize bg-cover bg-center bg-repeat xl:min-h-screen sm:h-[730px] md:h-[874px] lg:h-[930px] h-[600px] relative">
                <img
                    src={CartoonImg1}
                    alt="CartoonImg1"
                    className=" absolute right-[7%] bottom-[10%] lg:max-w-[211px] sm:max-w-[140px] max-w-[80px] z-[1] walking-img w-full"
                />
                <img
                    src={CartoonImg2}
                    alt="CartoonImg2"
                    className=" absolute left-[50%] bottom-[18%] ImgAnimate sm:max-w-[131px] max-w-[40px] w-full"
                />
                <div className="container xl:max-w-[1156px] mx-auto xl:px-3 px-6 pt-[28px]">
                    <div className=" flex justify-between items-center md:pt-[4px] py-[10px] md:pb-[5.43px] pl-6 pr-[7.42px] bg-white border-b-[4px] border-solid border-[black] rounded-[61.102px] ">
                        <h1 className="ff_luckydino font-normal cursor-pointer leading-[94%] drop-shadow-[0px_1.337px_0px_#000] sm:text-[39.125px] text-[24px]">
                            <span className="text-[#FBA11D]">D</span>
                            <span className="text-[#23AAAC]">i</span>
                            <span className="text-[#D45B07]">n</span>
                            <span className="text-[#8EC627]">o</span>
                            <span className="text-[#FCCA2B]">L</span>
                            <span className="text-[#8F78D2]">F</span>
                            <span className="text-[#8EC627]">G</span>
                        </h1>
                        <div className="flex gap-[136px]">
                            <ul
                                className={`${nav ? "left-[-100%]" : "left-0"}
            max-lg:fixed max-lg:top-0 max-lg:h-full max-lg:w-full max-lg:z-[7] bg-white max-lg:transition-all max-lg:ease-linear max-lg:duration-300 max-lg:min-h-screen max-lg:flex-col max-lg:justify-center flex gap-[28px] items-center`}
                            >
                                <li onClick={() => setNav(!nav)}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] font-chewy relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                                        href="#About"
                                    >
                                        About
                                    </a>
                                </li>
                                <li onClick={() => setNav(!nav)}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] font-chewy relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                                        href="#Tokenomic"
                                    >
                                        Tokenomic
                                    </a>
                                </li>
                                <li onClick={() => setNav(!nav)}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] font-chewy relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                                        href="#Roadmap"
                                    >
                                        Roadmap
                                    </a>
                                </li>
                                <li onClick={() => setNav(!nav)}>
                                    <a
                                        className="hover:after:w-[100%] after:w-0 after:absolute after:mx-auto after:right-0 after:bg-[#000000] after:h-[2px] font-chewy relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear ff_chewy text-black text-[18px] font-normal leading-normal no-underline"
                                        href="#Faq"
                                    >
                                        FAQ
                                    </a>
                                </li>
                                <li className="md:hidden">
                                    <div className="flex gap-2 items-center">
                                        <svg className=" hover:scale-[1.1] duration-[0.5s] cursor-pointer" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.5" cy="18.5" r="18" stroke="black" />
                                            <path d="M28 12.7793C27.3381 13.0799 26.627 13.2831 25.8794 13.3749C26.6508 12.9018 27.2278 12.1572 27.503 11.28C26.7783 11.7212 25.9851 12.0318 25.158 12.1982C24.6018 11.5895 23.8651 11.186 23.0623 11.0504C22.2594 10.9148 21.4354 11.0547 20.7181 11.4484C20.0007 11.8421 19.4303 12.4675 19.0953 13.2276C18.7602 13.9877 18.6794 14.8399 18.8652 15.6519C17.3968 15.5764 15.9603 15.1851 14.649 14.5036C13.3376 13.8221 12.1807 12.8655 11.2533 11.696C10.9362 12.2568 10.7539 12.9069 10.7539 13.5992C10.7535 14.2225 10.9033 14.8362 11.1898 15.386C11.4763 15.9357 11.8908 16.4045 12.3965 16.7506C11.81 16.7315 11.2366 16.5691 10.7238 16.2768V16.3256C10.7237 17.1998 11.0187 18.0471 11.5587 18.7237C12.0987 19.4003 12.8504 19.8646 13.6863 20.0377C13.1423 20.1886 12.5719 20.2109 12.0183 20.1027C12.2542 20.8549 12.7136 21.5127 13.3322 21.9839C13.9508 22.4551 14.6977 22.7163 15.4683 22.7308C14.1602 23.7835 12.5446 24.3545 10.8815 24.352C10.5869 24.3521 10.2926 24.3344 10 24.2992C11.6881 25.4118 13.6532 26.0023 15.6602 26C22.454 26 26.168 20.2319 26.168 15.2294C26.168 15.0668 26.164 14.9027 26.1569 14.7402C26.8793 14.2046 27.5029 13.5414 27.9984 12.7817L28 12.7793Z" fill="black" />
                                        </svg>
                                        <svg className=" hover:scale-[1.1] duration-[0.5s] cursor-pointer" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.5" cy="18.5" r="18" stroke="black" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4863 11.0984C14.4308 11.327 13.1618 11.7316 12.3368 12.1024C12.0591 12.2272 12.0056 12.2709 11.863 12.4888C10.3251 14.8393 9.41346 17.2533 9.0977 19.8113C9.00993 20.5222 8.96969 22.3113 9.02603 22.9955C9.06077 23.4171 9.08322 23.5239 9.14748 23.5732C9.80307 24.0761 11.2749 24.9157 12.221 25.3265C12.9274 25.6332 13.9006 25.99 14.0576 25.9997C14.1456 26.0052 14.2125 25.9324 14.4835 25.5363C14.6603 25.2779 14.8978 24.8944 15.0113 24.6841L15.2177 24.3016L15.0326 24.2314C14.7445 24.122 13.6034 23.5605 13.574 23.5136C13.5595 23.4905 13.6314 23.4041 13.7336 23.3215L13.9195 23.1713L14.3679 23.3566C17.3555 24.5911 20.6386 24.5932 23.6169 23.3625L24.0611 23.179L24.2345 23.3048C24.3299 23.3739 24.4079 23.4558 24.4079 23.4868C24.4079 23.5442 23.5208 24.0046 23.0764 24.1778C22.9413 24.2305 22.8208 24.2895 22.8086 24.3091C22.7807 24.3536 23.1948 25.0775 23.5578 25.6184C23.8825 26.1024 23.7733 26.0907 24.7273 25.7443C25.9789 25.2899 27.151 24.7026 28.235 23.9868C28.5308 23.7914 28.8074 23.6055 28.8495 23.5737C28.9664 23.4856 29.0209 22.6466 28.9927 21.3653C28.9544 19.621 28.7033 18.1572 28.1739 16.5916C27.7263 15.2681 26.9293 13.6651 26.1489 12.5188L25.9449 12.219L25.4676 12.0203C24.7836 11.7356 24.1627 11.5231 23.4557 11.332C22.7183 11.1326 21.9243 10.9717 21.8382 11.0042C21.8042 11.0171 21.6663 11.251 21.532 11.5241C21.3976 11.7971 21.2854 12.0235 21.2828 12.0271C21.2801 12.0308 21.0863 12.0072 20.8521 11.9748C20.1315 11.8751 18.4539 11.8528 17.6225 11.9317C17.2281 11.9692 16.864 12.0097 16.8134 12.0218C16.7318 12.0413 16.6922 11.9851 16.4658 11.5282C16.1649 10.921 16.2113 10.9413 15.4863 11.0984ZM15.971 17.2904C16.6341 17.4145 17.2153 17.9815 17.407 18.6915C17.5426 19.1936 17.445 19.9012 17.1781 20.3517C16.8935 20.8319 16.3504 21.1822 15.8246 21.2247C14.3788 21.3415 13.4109 19.6446 14.1276 18.2497C14.3568 17.8035 14.8377 17.4223 15.316 17.3076C15.5869 17.2426 15.6996 17.2397 15.971 17.2904ZM22.9198 17.3724C23.3349 17.528 23.7033 17.8742 23.9284 18.3204C24.2027 18.8643 24.1806 19.6797 23.8756 20.2734C23.6059 20.7982 23.0265 21.1888 22.4583 21.2289C21.6511 21.2859 20.9284 20.7577 20.6337 19.8953C20.5192 19.5605 20.5297 18.8721 20.6544 18.5338C21.0235 17.5319 22.0041 17.0292 22.9198 17.3724Z" fill="black" />
                                        </svg>
                                        <svg className=" hover:scale-[1.1] duration-[0.5s] cursor-pointer" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18.5" cy="18.5" r="18" stroke="black" />
                                            <path d="M18.9973 14.6652C17.1611 14.6652 15.6626 16.1638 15.6626 18C15.6626 19.8362 17.1611 21.3348 18.9973 21.3348C20.8335 21.3348 22.332 19.8362 22.332 18C22.332 16.1638 20.8335 14.6652 18.9973 14.6652ZM28.9989 18C28.9989 16.6191 29.0114 15.2506 28.9338 13.8722C28.8563 12.2711 28.4911 10.8502 27.3203 9.67938C26.147 8.50609 24.7286 8.14334 23.1275 8.06579C21.7466 7.98824 20.3782 8.00074 18.9998 8.00074C17.6189 8.00074 16.2505 7.98824 14.8721 8.06579C13.271 8.14334 11.8501 8.50859 10.6793 9.67938C9.50608 10.8527 9.14334 12.2711 9.06579 13.8722C8.98824 15.2531 9.00074 16.6216 9.00074 18C9.00074 19.3784 8.98824 20.7494 9.06579 22.1278C9.14334 23.7289 9.50858 25.1498 10.6793 26.3206C11.8526 27.4939 13.271 27.8567 14.8721 27.9342C16.253 28.0118 17.6214 27.9993 18.9998 27.9993C20.3807 27.9993 21.7491 28.0118 23.1275 27.9342C24.7286 27.8567 26.1495 27.4914 27.3203 26.3206C28.4936 25.1473 28.8563 23.7289 28.9338 22.1278C29.0139 20.7494 28.9989 19.3809 28.9989 18ZM18.9973 23.131C16.1579 23.131 13.8664 20.8394 13.8664 18C13.8664 15.1606 16.1579 12.869 18.9973 12.869C21.8367 12.869 24.1282 15.1606 24.1282 18C24.1282 20.8394 21.8367 23.131 18.9973 23.131ZM24.3383 13.8572C23.6754 13.8572 23.14 13.3218 23.14 12.6589C23.14 11.9959 23.6754 11.4606 24.3383 11.4606C25.0013 11.4606 25.5366 11.9959 25.5366 12.6589C25.5368 12.8163 25.5059 12.9722 25.4458 13.1177C25.3856 13.2632 25.2974 13.3954 25.1861 13.5067C25.0748 13.618 24.9426 13.7062 24.7971 13.7664C24.6516 13.8265 24.4957 13.8574 24.3383 13.8572Z" fill="black" />
                                        </svg>
                                    </div>
                                </li>
                                <li className="md:hidden">
                                    <div className=" bg-BgButton bg-center bg-repeat bg-BgSize">
                                        <button className="text-black hover:text-white transition-colors font-chewy ease-linear duration-500 leading-[131%] px-[36px] pt-[11px] pb-[19.57px] ff_chewy text-[18px] font-normal ">
                                            Join Now
                                        </button>
                                    </div>
                                </li>
                            </ul>
                            <div className="hidden md:flex items-center gap-[13px]">
                                <div className="flex gap-2 items-center">
                                    <svg className=" hover:scale-[1.1] duration-[0.5s] cursor-pointer" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.5" cy="18.5" r="18" stroke="black" />
                                        <path d="M28 12.7793C27.3381 13.0799 26.627 13.2831 25.8794 13.3749C26.6508 12.9018 27.2278 12.1572 27.503 11.28C26.7783 11.7212 25.9851 12.0318 25.158 12.1982C24.6018 11.5895 23.8651 11.186 23.0623 11.0504C22.2594 10.9148 21.4354 11.0547 20.7181 11.4484C20.0007 11.8421 19.4303 12.4675 19.0953 13.2276C18.7602 13.9877 18.6794 14.8399 18.8652 15.6519C17.3968 15.5764 15.9603 15.1851 14.649 14.5036C13.3376 13.8221 12.1807 12.8655 11.2533 11.696C10.9362 12.2568 10.7539 12.9069 10.7539 13.5992C10.7535 14.2225 10.9033 14.8362 11.1898 15.386C11.4763 15.9357 11.8908 16.4045 12.3965 16.7506C11.81 16.7315 11.2366 16.5691 10.7238 16.2768V16.3256C10.7237 17.1998 11.0187 18.0471 11.5587 18.7237C12.0987 19.4003 12.8504 19.8646 13.6863 20.0377C13.1423 20.1886 12.5719 20.2109 12.0183 20.1027C12.2542 20.8549 12.7136 21.5127 13.3322 21.9839C13.9508 22.4551 14.6977 22.7163 15.4683 22.7308C14.1602 23.7835 12.5446 24.3545 10.8815 24.352C10.5869 24.3521 10.2926 24.3344 10 24.2992C11.6881 25.4118 13.6532 26.0023 15.6602 26C22.454 26 26.168 20.2319 26.168 15.2294C26.168 15.0668 26.164 14.9027 26.1569 14.7402C26.8793 14.2046 27.5029 13.5414 27.9984 12.7817L28 12.7793Z" fill="black" />
                                    </svg>
                                    <svg className=" hover:scale-[1.1] duration-[0.5s] cursor-pointer" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.5" cy="18.5" r="18" stroke="black" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4863 11.0984C14.4308 11.327 13.1618 11.7316 12.3368 12.1024C12.0591 12.2272 12.0056 12.2709 11.863 12.4888C10.3251 14.8393 9.41346 17.2533 9.0977 19.8113C9.00993 20.5222 8.96969 22.3113 9.02603 22.9955C9.06077 23.4171 9.08322 23.5239 9.14748 23.5732C9.80307 24.0761 11.2749 24.9157 12.221 25.3265C12.9274 25.6332 13.9006 25.99 14.0576 25.9997C14.1456 26.0052 14.2125 25.9324 14.4835 25.5363C14.6603 25.2779 14.8978 24.8944 15.0113 24.6841L15.2177 24.3016L15.0326 24.2314C14.7445 24.122 13.6034 23.5605 13.574 23.5136C13.5595 23.4905 13.6314 23.4041 13.7336 23.3215L13.9195 23.1713L14.3679 23.3566C17.3555 24.5911 20.6386 24.5932 23.6169 23.3625L24.0611 23.179L24.2345 23.3048C24.3299 23.3739 24.4079 23.4558 24.4079 23.4868C24.4079 23.5442 23.5208 24.0046 23.0764 24.1778C22.9413 24.2305 22.8208 24.2895 22.8086 24.3091C22.7807 24.3536 23.1948 25.0775 23.5578 25.6184C23.8825 26.1024 23.7733 26.0907 24.7273 25.7443C25.9789 25.2899 27.151 24.7026 28.235 23.9868C28.5308 23.7914 28.8074 23.6055 28.8495 23.5737C28.9664 23.4856 29.0209 22.6466 28.9927 21.3653C28.9544 19.621 28.7033 18.1572 28.1739 16.5916C27.7263 15.2681 26.9293 13.6651 26.1489 12.5188L25.9449 12.219L25.4676 12.0203C24.7836 11.7356 24.1627 11.5231 23.4557 11.332C22.7183 11.1326 21.9243 10.9717 21.8382 11.0042C21.8042 11.0171 21.6663 11.251 21.532 11.5241C21.3976 11.7971 21.2854 12.0235 21.2828 12.0271C21.2801 12.0308 21.0863 12.0072 20.8521 11.9748C20.1315 11.8751 18.4539 11.8528 17.6225 11.9317C17.2281 11.9692 16.864 12.0097 16.8134 12.0218C16.7318 12.0413 16.6922 11.9851 16.4658 11.5282C16.1649 10.921 16.2113 10.9413 15.4863 11.0984ZM15.971 17.2904C16.6341 17.4145 17.2153 17.9815 17.407 18.6915C17.5426 19.1936 17.445 19.9012 17.1781 20.3517C16.8935 20.8319 16.3504 21.1822 15.8246 21.2247C14.3788 21.3415 13.4109 19.6446 14.1276 18.2497C14.3568 17.8035 14.8377 17.4223 15.316 17.3076C15.5869 17.2426 15.6996 17.2397 15.971 17.2904ZM22.9198 17.3724C23.3349 17.528 23.7033 17.8742 23.9284 18.3204C24.2027 18.8643 24.1806 19.6797 23.8756 20.2734C23.6059 20.7982 23.0265 21.1888 22.4583 21.2289C21.6511 21.2859 20.9284 20.7577 20.6337 19.8953C20.5192 19.5605 20.5297 18.8721 20.6544 18.5338C21.0235 17.5319 22.0041 17.0292 22.9198 17.3724Z" fill="black" />
                                    </svg>
                                    <svg className=" hover:scale-[1.1] duration-[0.5s] cursor-pointer" width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18.5" cy="18.5" r="18" stroke="black" />
                                        <path d="M18.9973 14.6652C17.1611 14.6652 15.6626 16.1638 15.6626 18C15.6626 19.8362 17.1611 21.3348 18.9973 21.3348C20.8335 21.3348 22.332 19.8362 22.332 18C22.332 16.1638 20.8335 14.6652 18.9973 14.6652ZM28.9989 18C28.9989 16.6191 29.0114 15.2506 28.9338 13.8722C28.8563 12.2711 28.4911 10.8502 27.3203 9.67938C26.147 8.50609 24.7286 8.14334 23.1275 8.06579C21.7466 7.98824 20.3782 8.00074 18.9998 8.00074C17.6189 8.00074 16.2505 7.98824 14.8721 8.06579C13.271 8.14334 11.8501 8.50859 10.6793 9.67938C9.50608 10.8527 9.14334 12.2711 9.06579 13.8722C8.98824 15.2531 9.00074 16.6216 9.00074 18C9.00074 19.3784 8.98824 20.7494 9.06579 22.1278C9.14334 23.7289 9.50858 25.1498 10.6793 26.3206C11.8526 27.4939 13.271 27.8567 14.8721 27.9342C16.253 28.0118 17.6214 27.9993 18.9998 27.9993C20.3807 27.9993 21.7491 28.0118 23.1275 27.9342C24.7286 27.8567 26.1495 27.4914 27.3203 26.3206C28.4936 25.1473 28.8563 23.7289 28.9338 22.1278C29.0139 20.7494 28.9989 19.3809 28.9989 18ZM18.9973 23.131C16.1579 23.131 13.8664 20.8394 13.8664 18C13.8664 15.1606 16.1579 12.869 18.9973 12.869C21.8367 12.869 24.1282 15.1606 24.1282 18C24.1282 20.8394 21.8367 23.131 18.9973 23.131ZM24.3383 13.8572C23.6754 13.8572 23.14 13.3218 23.14 12.6589C23.14 11.9959 23.6754 11.4606 24.3383 11.4606C25.0013 11.4606 25.5366 11.9959 25.5366 12.6589C25.5368 12.8163 25.5059 12.9722 25.4458 13.1177C25.3856 13.2632 25.2974 13.3954 25.1861 13.5067C25.0748 13.618 24.9426 13.7062 24.7971 13.7664C24.6516 13.8265 24.4957 13.8574 24.3383 13.8572Z" fill="black" />
                                    </svg>
                                </div>
                                <div className=" bg-[url(./assets/images/bgButton.webp)] bg-center bg-repeat bg-BgSize">
                                    <button className="text-black hover:text-white font-chewy transition-colors ease-linear duration-500 leading-[131%] px-[36px] pt-[11px] pb-[19.57px] ff_chewy text-[18px] font-normal ">
                                        Join Now
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div
                            onClick={() => setNav(!nav)}
                            className="lg:hidden w-[27px] h-[21px] mr-[17px] relative z-[7] flex justify-between flex-col"
                        >
                            <span
                                className={`${nav ? "" : "rotate-[50deg] translate-y-[15px]"
                                    } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                            ></span>
                            <span
                                className={`${nav ? "" : "hidden"
                                    } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                            ></span>
                            <span
                                className={`${nav ? "" : "rotate-[-50deg] translate-y-[-50%]"
                                    } bg-black h-[4px] w-full duration-300 rounded-[3px] ease-linear transition-all`}
                            ></span>
                        </div>
                    </div>
                    <div className="flex sm:flex-row flex-col-reverse items-center flex-wrap sm:pt-[83px] pt-[32px]">
                        <div className="sm:w-5/12 w-full pt-[32px] sm:pt-0 flex items-end justify-center sm:justify-start">
                            <img
                                src={HelicopterImg}
                                alt="HelicopterImg"
                                className="w-full sm:max-w-[394.14px] helo-header max-w-[250px]"
                                data-aos="fade-right"
                            />
                        </div>
                        <div className="sm:w-7/12 w-full flex justify-center">
                            <h1
                                className="text-[#FBA11D] leading-[90%] text-center lg:max-w-[398px] drop-shadow-[0px_6px_0px_#000] ff_luckydino font-normal lg:text-[175.636px] md:text-[130px] sm:text-[100px] text-[64px] uppercase"
                                data-aos="fade-left"
                            >
                                <span className="sm:block">
                                    D<span className="text-[#23AAAC]">I</span>
                                    <span className="text-[#D45B07]">N</span>
                                    <span className="text-[#8EC627]">O</span>
                                </span>
                                <span className="text-[#8EC627]">L</span>
                                <span className="text-[#FCCA2B]">F</span>
                                <span className="text-[#8F78D2]">G</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;