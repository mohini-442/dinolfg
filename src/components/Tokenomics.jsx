import React from "react";
import AboutLayor from "../assets/images/AboutLayer.webp";
import TokenomicsCartoon from "../assets/images/cartoont.png";
import CartoonCircle from "../assets/images/tokecircle.webp";
import CartoonBottomImg from "../assets/images/CartoonBottomImg.webp";
import TokenomicsChart from "../assets/images/TokenomicsChart.webp";
import TreeLayer from "../assets/images/TreeLayer.webp";
import TokenomicsVector from "../assets/images/TokenomicsVector.webp";
import TokenomicsTreeImg from "../assets/images/TokenomicsTreeImg.webp";
import TokenomicsCartoon2 from "../assets/images/TokenomicsCartoon2.webp";

const Tokenomics = () => {
    return (
        <>
            <div id="Tokenomic" className="relative">
                <img
                    src={TokenomicsTreeImg}
                    alt="TokenomicsTreeImg"
                    className="absolute z-[1] xl:bottom-[10%] sm:bottom-[5%] bottom-0 left-0 w-full md:max-w-[352px] max-w-[200px]"
                />
                <img
                    src={TokenomicsCartoon2}
                    alt="TokenomicsCartoon2"
                    className=" absolute xl:bottom-[5%] bottom-[-30px] vert_move1 left-0 w-full md:max-w-[211px] max-w-[150px] z-[1]"
                />
                <img
                    src={TokenomicsVector}
                    alt="TokenomicsVector"
                    className="w-full right-0 absolute max-w-[509px] top-[15%]"
                />
                <img
                    src={TreeLayer}
                    alt="TreeLayer"
                    className=" absolute w-full left-0 right-0 bottom-0"
                />
                <img
                    src={AboutLayor}
                    alt="AboutLayor"
                    className="absolute top-[-2px] left-0 right-0 w-full"
                />
                <div className="container relative z-[1] xl:max-w-[1147px] xl:px-3 px-6 mx-auto sm:pt-[236px] pt-[80px] xl:pb-[540px] lg:pb-[400px] sm:pb-[350px] pb-[175px]">
                    <h2
                        className="text-white font-normal ff_chewy sm:text-[64px] text-[50px] leading-[131%] font-chewy text-center xl:mb-[150px] lg:mb-[60px] mb-[45px]"
                        data-aos="zoom-in"
                    >
                        Tokenomics
                    </h2>
                    <div className="flex items-center justify-center">
                        <div className="relative xl:max-w-[589.84px] lg:max-w-[515px] sm:max-w-[430px] max-w-[320px]">
                            <img
                                src={TokenomicsChart}
                                alt="TokenomicsChart"
                                className="w-full xl:hidden block"
                                data-aos="zoom-in"
                            />
                            <img
                                src={CartoonCircle}
                                alt="CartoonCircle"
                                className="xl:block hidden absolute bottom-[59%] lg:left-[28%] left-[26%] max-w-[252.57px] w-full"
                                data-aos="zoom-in"
                            />
                            <img
                                src={CartoonBottomImg}
                                alt="CartoonBottomImg"
                                className="xl:block hidden w-full"
                                data-aos="zoom-in"
                            />
                            <img
                                src={TokenomicsCartoon}
                                alt="TokenomicsCartoon"
                                className="xl:flex hidden absolute w-full vert_move3 lg:top-[-28%] top-[-37%] left-[39%] max-w-[133.72px]"
                                data-aos="zoom-in"
                            />
                            <div
                                className="md:flex hidden absolute xl:top-[12%] top-[41%] xl:left-[-45%] lg:left-[-46%] left-[-40%] lg:gap-[26.11px] gap-[15px]"
                                data-aos="zoom-in"
                            >
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#FBA11D] font-bal leading-[119%] lg:text-[32px] text-[23px] font-normal">
                                        333,333,333
                                    </p>
                                    <p className="text-white leading-[138%] font-normal text-[24px] text-right font-bal">
                                        Supply
                                    </p>
                                </div>
                                <div className="border border-solid border-white border-r-0 border-b-0 h-[88px] w-[16px]"></div>
                            </div>
                            <div
                                className="md:flex hidden absolute xl:top-[12%] lg:top-[43%] md:top-[58%] xl:right-[-50%] lg:right-[-52%] right-[-39%] lg:gap-[26.11px]"
                                data-aos="zoom-in"
                            >
                                <div className="border border-solid border-white border-l-0 border-b-0 h-[88px] w-[16px]"></div>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#8EC627] lg:max-w-[217px] max-w-[142px] leading-[119%] lg:text-[32px] md:pt-24 text-[23px] font-normal font-bal">
                                        Liquidity lock for 1 year
                                    </p>
                                </div>
                            </div>
                            <div
                                className="md:flex hidden absolute xl:bottom-[-45%] bottom-[-28%] xl:left-[42%] left-[38%] justify-center items-center flex-col gap-[17px]"
                                data-aos="zoom-in"
                            >
                                <div className="bg-white h-[43px] w-[1px]"></div>
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#D45B07] max-w-[217px] leading-[119%] text-[32px] font-normal font-bal">
                                        No Tax
                                    </p>
                                </div>
                            </div>
                            <div
                                className="md:flex hidden absolute xl:bottom-[-27%] bottom-[-17%] left-[-27%] justify-center items-center gap-[17px]"
                                data-aos="zoom-in"
                            >
                                <div className="flex flex-col gap-[5px]">
                                    <p className="text-[#23AAAC] max-w-[217px] leading-[119%] lg:text-[32px] text-[23px] font-normal font-bal">
                                        95% Uniswa
                                    </p>
                                    <p className="text-[#23AAAC] max-w-[217px] text-right leading-[119%] lg:text-[32px] text-[23px] font-normal">
                                        5% Marketing
                                    </p>
                                    <p className="text-white max-w-[217px] text-right leading-[119%] lg:text-[32px] text-[23px] pt-2 font-normal font-bal">
                                        Allocation
                                    </p>
                                </div>
                                <div className="border-white border border-solid h-[102px] w-[16px] border-b-0 border-r-0 skew-y-[-50deg] "></div>
                            </div>
                            <div
                                className="md:flex hidden absolute xl:bottom-[-23%] bottom-[-18%] right-[-31%] justify-center items-center gap-[17px]"
                                data-aos="zoom-in"
                            >
                                <div className="border-white border border-solid h-[102px] w-[16px] border-b-0 border-l-0 skew-y-[52deg] "></div>
                                <p className="text-[#FB5352] leading-[119%] lg:text-[32px] text-[23px] font-normal font-bal">
                                    No Mint Function
                                </p>
                            </div>
                            <div
                                className="md:hidden flex justify-center items-center mt-12"
                                data-aos="zoom-in"
                            >
                                <div className=" flex flex-col gap-[35px]">
                                    <div className="flex gap-[32px]">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#FBA11D]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#FBA11D] leading-[119%] sm:text-[32px] text-[24px] font-normal">
                                                333,333,333
                                            </p>
                                            <p className="text-white leading-[138%] font-normal sm:text-[24px] text-[20px]">
                                                Supply
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[32px]">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#23AAAC]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#23AAAC] leading-[119%] sm:text-[32px] text-[24px] font-normal">
                                                95% Uniswa
                                            </p>
                                            <p className="text-[#23AAAC] leading-[119%] sm:text-[32px] text-[24px] font-normal">
                                                5% Marketing
                                            </p>
                                            <p className="text-white leading-[138%] sm:text-[32px] text-[24px] font-normal">
                                                Allocation
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[32px]">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#D45B07]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#D45B07] leading-[119%] sm:text-[32px] text-[24px] font-normal">
                                                No Tax
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[32px]">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#FB5352]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#FB5352] leading-[119%] sm:text-[32px] text-[24px] font-normal">
                                                No Mint Function
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex gap-[32px]">
                                        <div className="w-[34px] h-[34px] border border-solid border-white rounded-md bg-[#8EC627]"></div>
                                        <div className="flex flex-col gap-[5px]">
                                            <p className="text-[#8EC627] leading-[119%] sm:text-[32px] text-[24px] font-normal">
                                                Liquidity lock for 1 year
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tokenomics;