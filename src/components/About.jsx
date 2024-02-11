import React from "react";
import AboutTree1 from "../assets/images/tree1.webp";
import AboutTree2 from "../assets/images/tree2.webp";
import AboutCartoon from "../assets/images/gcartoon.webp";

const About = () => {
    return (
        <>
            <div
                id="About"
                className="bg-[#09655A] relative sm:pt-[88px] pt-[40px] mt-[-2px]"
            >
                <img
                    src={AboutTree1}
                    alt="AboutTree1"
                    className=" absolute lg:bottom-[-33%] sm:bottom-[-12%] bottom-0 left-0 z-[1] w-full lg:max-w-[197px] sm:max-w-[120px] max-w-[80px]"
                />
                <img
                    src={AboutTree2}
                    alt="AboutTree2"
                    className=" absolute right-0 lg:bottom-[-25%] sm:bottom-[-14%] bottom-0 z-[1] lg:max-w-[270px] sm:max-w-[200px] max-w-[120px]"
                />
                <img
                    src={AboutCartoon}
                    alt="AboutCartoon"
                    className="w-full absolute vert_move1 right-0 lg:bottom-[-25%] sm:bottom-[-14%] bottom-0 z-[1] lg:max-w-[169px] sm:max-w-[100px] max-w-[60px]"
                />
                <div className="container xl:max-w-[1156px] relative z-[1] mx-auto xl:px-3 px-6">
                    <div className=" flex flex-col justify-center items-center">
                        <h2
                            className="font-normal sm:text-[69.669px] text-[45px] ff_luckydino drop-shadow-[0px_2.38px_0px_#FFF] leading-[100%] sm:mb-[42px] mb-[24px] text-center"
                            data-aos="zoom-in"
                        >
                            <span className="text-white font-chewy sm:text-[64px] text-[50px] font-normal leading-[131%]">
                                {" "}
                                About
                            </span>
                            <span className="text-[#FBA11D]"> D</span>
                            <span className="text-[#23AAAC]">i</span>
                            <span className="text-[#D45B07]">n</span>
                            <span className="text-[#8EC627]">o</span>
                            <span className="text-[#FCCA2B]">L</span>
                            <span className="text-[#8F78D2]">F</span>
                            <span className="text-[#8EC627]">G</span>
                        </h2>
                        <p
                            className="text-white text-center  font-bal sm:text-[24px] text-[18px] font-normal leading-[121%] mb-[18px]"
                            data-aos="zoom-in"
                        >
                            $DINO is a meme coin with very strong utility.
                        </p>
                        <p
                            className="text-white text-center font-bal sm:text-[24px] text-[18px] lg:max-w-[560px] leading-[127%] mb-[10px]"
                            data-aos="zoom-in"
                        >
                            Biggest problem of meme coins is lack of utility and usecase,{" "}
                            <span className="text-[#8EC627] font-bold text-[24px]">$</span>
                            <span className="text-[#FBA11D] font-bold text-[24px]">D</span>
                            <span className="text-[#23AAAC] font-bold text-[24px]">I</span>
                            <span className="text-[#D45B07] font-bold text-[24px]">N</span>
                            <span className="text-[#FB5352] font-bold text-[24px]">O</span>
                            is going to fix it.
                        </p>
                        <p
                            className="text-white text-center font-normal sm:text-[24px]  font-bal text-[18px] lg:max-w-[560px] leading-[127%] mb-[14px]"
                            data-aos="zoom-in"
                        >
                            We want to bring a lot of usecases and utility to $DINO holders,
                            just sit back and relax.
                        </p>
                        <p
                            className="text-white sm:text-[24px] text-[18px] font-normal  font-bal lg:max-w-[599px] text-center leading-[121%] mb-[17px]"
                            data-aos="zoom-in"
                        >
                            In $DINO, we want to build a very strong community, that’s why we
                            are going to have a lot of games and crypto tips in our Telegram
                            and Twitter.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;