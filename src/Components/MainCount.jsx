import React from 'react'
import googleLogo from '../assets/google.png'
import avastLogo from '../assets/avast.png'
import ebayLogo from '../assets/ebay.png'
import paypalLogo from '../assets/paypal.png'
import hubspotLogo from '../assets/hubspot.png'
import iconSettings from '../assets/settings.png'
import iconUser from '../assets/user.png'
import iconShield from '../assets/shield.png'
import iconCode from '../assets/code.png'
import analysisImg from '../assets/analysis.png'
import checkIcon from '../assets/check.png'
import securityImg from '../assets/security.png'
import laptopImg from '../assets/laptop.png'
import basicCard from '../assets/basic-plan.png'
import premiumCard from '../assets/premium-plan.png'
import ultimateCard from '../assets/ultimate-plan.png'
import logoSoft from '../assets/soft.png'




const MainCount = () => {
    return (
        <div>

            <main>

                <section>
                    <div className="bg-base-100 py-[40px]">
                        <div className="w-[85%] mx-auto flex flex-wrap items-center justify-between gap-[30px]">
                            <img src={googleLogo} alt="Google" className="h-[32px] object-contain" />
                            <img src={avastLogo} alt="Avast" className="h-[32px] object-contain" />
                            <img src={ebayLogo} alt="eBay" className="h-[32px] object-contain" />
                            <img src={paypalLogo} alt="PayPal" className="h-[32px] object-contain" />
                            <img src={hubspotLogo} alt="HubSpot" className="h-[32px] object-contain" />
                        </div>
                    </div>
                </section>
                <section className="bg-base-100 py-[80px]">
                    <div className="w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[60px]">

                        <div className="w-full lg:w-[50%] flex flex-wrap justify-between gap-y-[24px]">

                            <div className="card w-full sm:w-[48%] bg-base-100 shadow-lg rounded-[12px] p-[28px] border border-gray-100">
                                <div className="w-[54px] h-[54px] rounded-[10px] bg-gradient-to-br from-[#FF7575] to-[#F54B4B] flex items-center justify-center shadow-md shadow-red-200 mb-[20px]">
                                    <img src={iconSettings} alt="Easy Settings" className="w-[26px] h-[26px] object-contain" />
                                </div>
                                <h3 className="text-[18px] font-bold text-[#1E1E1E] mb-[10px]">
                                    Easy Settings
                                </h3>
                                <p className="text-[13px] text-[#666666] leading-[21px]">
                                    A complete about-face in core economic amsterdam bilamco progressive.
                                </p>
                            </div>

                            <div className="card w-full sm:w-[48%] bg-base-100 shadow-sm rounded-[12px] p-[28px] border border-gray-100">
                                <div className="w-[54px] h-[54px] rounded-[10px] bg-gradient-to-br from-[#6DF0B3] to-[#2CD889] flex items-center justify-center shadow-md shadow-emerald-200 mb-[20px]">
                                    <img src={iconUser} alt="User Friendly" className="w-[26px] h-[26px] object-contain" />
                                </div>
                                <h3 className="text-[18px] font-bold text-[#1E1E1E] mb-[10px]">
                                    User Friendly
                                </h3>
                                <p className="text-[13px] text-[#666666] leading-[21px]">
                                    A complete about-face in core economic amsterdam bilamco progressive.
                                </p>
                            </div>

                            <div className="card w-full sm:w-[48%] bg-base-100 shadow-sm rounded-[12px] p-[28px] border border-gray-100">
                                <div className="w-[54px] h-[54px] rounded-[10px] bg-gradient-to-br from-[#FFE066] to-[#F5BE18] flex items-center justify-center shadow-md shadow-yellow-200 mb-[20px]">
                                    <img src={iconShield} alt="Full secured" className="w-[26px] h-[26px] object-contain" />
                                </div>
                                <h3 className="text-[18px] font-bold text-[#1E1E1E] mb-[10px]">
                                    Full secured
                                </h3>
                                <p className="text-[13px] text-[#666666] leading-[21px]">
                                    A complete about-face in core economic amsterdam bilamco progressive.
                                </p>
                            </div>

                            <div className="card w-full sm:w-[48%] bg-base-100 shadow-sm rounded-[12px] p-[28px] border border-gray-100">
                                <div className="w-[54px] h-[54px] rounded-[10px] bg-gradient-to-br from-[#F973F9] to-[#D938E8] flex items-center justify-center shadow-md shadow-fuchsia-200 mb-[20px]">
                                    <img src={iconCode} alt="Clean Code" className="w-[26px] h-[26px] object-contain" />
                                </div>
                                <h3 className="text-[18px] font-bold text-[#1E1E1E] mb-[10px]">
                                    Clean Code
                                </h3>
                                <p className="text-[13px] text-[#666666] leading-[21px]">
                                    A complete about-face in core economic amsterdam bilamco progressive.
                                </p>
                            </div>

                        </div>


                        <div className="w-full lg:w-[45%] flex flex-col items-start">
                            <h2 className="text-[36px] font-bold text-[#1E1E1E] leading-[46px] mb-[20px]">
                                A complete software solution for you.
                            </h2>
                            <p className="text-[14px] text-[#666666] leading-[24px] mb-[16px]">
                                The source of powerful qorld and making future sure. Its a straight forward software.
                            </p>
                            <p className="text-[14px] text-[#666666] leading-[24px] mb-[32px]">
                                Where possibilities are made possible. We must have expand <span className="font-semibold text-[#1E1E1E]">Possibilities of better tomorrow.</span> The directly secure of your network deliveing services.
                            </p>
                            <div className="flex items-center gap-[24px]">
                                <button className="btn bg-[#252525] hover:bg-[#111111] text-white border-none rounded-[6px] px-[28px] h-[46px] min-h-[46px] text-[14px] font-medium normal-case">
                                    Learn more
                                </button>
                                <button className="btn btn-link text-[#F54B4B] hover:text-[#d63636] no-underline hover:underline px-0 h-[46px] min-h-[46px] text-[14px] font-medium normal-case">
                                    Ask?
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-base-100 py-[80px]">
                    <div className="w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[60px]">

                        <div className="w-full lg:w-[45%] flex flex-col items-start">
                            <h2 className="text-[36px] font-bold text-[#1E1E1E] leading-[46px] mb-[20px]">
                                Discover & growth with analysis.
                            </h2>
                            <p className="text-[14px] text-[#666666] leading-[24px] mb-[28px]">
                                Software with new dimensions. The better future and information about the virtual world.
                            </p>

                            <ul className="flex flex-col gap-[16px]">
                                <li className="flex items-center gap-[12px]">
                                    <img src={checkIcon} alt="check" className="w-[20px] h-[20px] object-contain" />
                                    <span className="text-[20px] text-[#555555]">
                                        Software with new dimensions the better.
                                    </span>
                                </li>
                                <li className="flex items-center gap-[12px]">
                                    <img src={checkIcon} alt="check" className="w-[20px] h-[20px] object-contain" />
                                    <span className="text-[20px] text-[#555555]">
                                        Effortlessly manages all your information.
                                    </span>
                                </li>
                                <li className="flex items-center gap-[12px]">
                                    <img src={checkIcon} alt="check" className="w-[20px] h-[20px] object-contain" />
                                    <span className="text-[20px] text-[#555555]">
                                        Simple Solutions for Complex Connections.
                                    </span>
                                </li>
                                <li className="flex items-center gap-[12px]">
                                    <img src={checkIcon} alt="check" className="w-[20px] h-[20px] object-contain" />
                                    <span className="text-[20px] text-[#555555]">
                                        Complete business solutions for customers.
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="w-full lg:w-[50%] flex justify-end">
                            <img src={analysisImg} alt="Discover and growth analysis" className="w-full object-contain" />
                        </div>


                    </div>
                </section>
                <section className="bg-base-100 py-[80px]">
                    <div className="w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[60px]">

                        <div className="w-full lg:w-[50%] flex justify-start">
                            <img src={securityImg} alt="Serving information with security" className="w-full object-contain" />
                        </div>


                        <div className="w-full lg:w-[45%] flex flex-col items-start">
                            <h2 className="text-[36px] font-bold text-[#1E1E1E] leading-[46px] mb-[20px]">
                                Serving information with security.
                            </h2>
                            <p className="text-[14px] text-[#666666] leading-[24px] mb-[16px]">
                                The source of powerful qorld and making future sure. Its a straight forward software. Paired with dynamic image of the actual tool for you.
                            </p>
                            <p className="text-[14px] text-[#666666] leading-[24px]">
                                Where possibilities are made possible. We must have expand <span className="font-semibold text-[#1E1E1E]">Possibilities of better tomorrow.</span> The directly secure of your network deliveing services.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="bg-[#F5FBF9] ">
                    <div className="w-[85%] mx-auto flex flex-col lg:flex-row items-center justify-between gap-[60px]">

                        <div className="w-full lg:w-[45%] flex flex-col items-start">
                            <h2 className="text-[36px] font-bold text-[#1E1E1E] leading-[46px] mb-[20px]">
                                Get our software
                            </h2>
                            <p className="text-[14px] text-[#666666] leading-[24px] mb-[16px]">
                                The source of powerful qorld and making your future sure. It's a straight forward software for you.
                            </p>
                            <p className="text-[14px] text-[#666666] leading-[24px] mb-[32px]">
                                The source of powerful qorld and making future sure. Its a straight forward software. Paired with dynamic image of the actual tool and the performance.
                            </p>
                            <button className="btn bg-[#F54B4B] hover:bg-[#d63636] text-white border-none rounded-[6px] px-[28px] h-[48px] min-h-[48px] text-[14px] font-medium normal-case">
                                Download now
                            </button>
                        </div>

                        <div className="w-full flex justify-end">
                            <img src={laptopImg} alt="Get our software" className="w-full object-contain" />
                        </div>


                    </div>
                </section>
                <section id="pricing" className="bg-base-100 py-[80px]">
                    <div className="w-[85%] mx-auto flex flex-col items-center">

                        <h2 className="text-[36px] font-bold text-[#1E1E1E] text-center mb-[16px]">
                            Best Pricing Plan
                        </h2>
                        <p className="text-[14px] text-[#666666] text-center leading-[24px] max-w-[540px] mb-[28px]">
                            Empowering the Internet Generation. Driving the Communication Revolution. Technology at the speed of life. Empowered by Innovation.
                        </p>

                        <div className="flex items-center gap-[14px] mb-[12px]">
                            <span className="text-[14px] text-[#666666]">Monthly</span>
                            <input type="checkbox" className="toggle bg-white hover:bg-white border-[#4EE2A1] [--tglbg:#4EE2A1]" />
                            <span className="text-[14px] text-[#1E1E1E] font-medium">Quarterly</span>
                        </div>

                        <div className="flex items-center gap-[6px] mb-[28px]">
                            <span className="text-[13px] font-semibold text-[#1E1E1E]">Save up to 40%</span>
                            <span className="text-[#F5BE18] text-[18px]">⤴</span>
                        </div>

                        <div className="w-full max-w-[780px] flex flex-col items-center mb-[60px]">
                            <div className="bg-[#333333] text-white text-[12px] font-medium px-[12px] py-[4px] rounded-[4px] mb-[8px]">
                                $130
                            </div>
                            <div className="w-full h-[8px] bg-[#E8F8F2] rounded-full flex items-center">
                                <div className="w-[50%] h-[8px] bg-gradient-to-r from-[#5BE8A8] to-[#34D399] rounded-full"></div>
                                <div className="w-[18px] h-[18px] bg-[#4EE2A1] border-[3px] border-white rounded-full shadow-md ml-[-9px]"></div>
                            </div>
                        </div>

                        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-[30px]">
                            <img src={basicCard} alt="Basic Plan" className="w-[340px] h-[520px] object-contain rounded-[14px] " />
                            <img src={premiumCard} alt="Premium Plan" className="w-[340px] h-[520px] object-contain scale-[1.28] rounded-[14px] " />
                            <img src={ultimateCard} alt="Ultimate Plan" className="w-[340px] h-[520px] object-contain rounded-[14px] " />
                        </div>

                    </div>
                </section>
            </main>
            <footer className="bg-[#F4FBF9] py-[60px]">
                <div className="w-[85%] mx-auto flex flex-col md:flex-row items-start justify-between gap-[40px]">

                    <div className="flex flex-col items-start">
                        <img src={logoSoft} alt="Soft Point" className="h-[100px] object-contain " />
                        <p className="text-[13px] text-[#666666] leading-[22px] max-w-[230px]">
                            Software with new look. Live the life that you expect.
                        </p>
                    </div>

                    <div className="flex flex-col items-start gap-[12px] mt-[28px]">
                        <h4 className="text-[16px] font-semibold text-[#1E1E1E] mb-[4px]">
                            Useful link
                        </h4>
                        <a href="#behance" className="text-[13px] text-[#666666] hover:text-[#1E1E1E]">
                            Behance
                        </a>
                        <a href="#dribbble" className="text-[13px] text-[#666666] hover:text-[#1E1E1E]">
                            Dribbble
                        </a>
                    </div>

                    <div className="flex flex-col items-start gap-[12px] mt-[28px]">
                        <h4 className="text-[16px] font-semibold text-[#1E1E1E] mb-[4px]">
                            Support
                        </h4>
                        <a href="#conditions" className="text-[13px] text-[#666666] hover:text-[#1E1E1E]">
                            Conditions
                        </a>
                        <a href="#privacy" className="text-[13px] text-[#666666] hover:text-[#1E1E1E]">
                            Privecy and policy
                        </a>
                    </div>

                    <div className="flex flex-col items-start gap-[12px] mt-[28px]">
                        <h4 className="text-[16px] font-semibold text-[#1E1E1E] mb-[4px]">
                            Contact us
                        </h4>
                        <a href="tel:7732178810" className="text-[13px] text-[#666666] hover:text-[#1E1E1E]">
                            (773) 217-8810
                        </a>
                        <p className="text-[13px] text-[#666666]">
                            Downers Grove, IL 60515
                        </p>
                    </div>

                </div>
            </footer>

        </div >
    )
}

export default MainCount