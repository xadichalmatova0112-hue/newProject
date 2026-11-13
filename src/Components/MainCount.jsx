import React from 'react'
import googleLogo from '../assets/google.png'
import avastLogo from '../assets/avast.png'
import ebayLogo from '../assets/ebay.png'
import paypalLogo from '../assets/paypal.png'
import hubspotLogo from '../assets/hubspot.png'


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
        </div>
    )
}

export default MainCount