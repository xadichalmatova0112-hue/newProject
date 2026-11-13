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


const MainCount = () => {
    return (
        <div>


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
        </div >
    )
}

export default MainCount