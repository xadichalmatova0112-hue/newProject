import React from 'react'
import logoSoft from '../assets/soft.png'

const Header = () => {
    return (
        <div>
            <header className="navbar bg-base-100 max-w-[85%] mx-auto mt-[-20px]">
                <div className="navbar-start">
                    <img src={logoSoft} alt="" />
                </div>

                <div className="navbar-center hidden md:flex">
                    <ul className="menu menu-horizontal px-1 text-gray-500 text-base gap-4">
                        <li><a href="#feature" className="hover:bg-transparent hover:text-gray-900">Feature</a></li>
                        <li><a href="#download" className="hover:bg-transparent hover:text-gray-900">Download</a></li>
                        <li><a href="#pricing" className="hover:bg-transparent hover:text-gray-900">Pricing</a></li>
                    </ul>
                </div>

                <div className="navbar-end gap-4">
                    <a href="#login" className="btn btn-ghost text-gray-600 font-normal text-base">
                        Login
                    </a>
                    <a href="#signup" className="btn bg-[#F64C4C] hover:bg-[#e03e3e] text-white border-none rounded-md px-6 font-normal text-base">
                        Sign up
                    </a>
                </div>
            </header>
        </div>

    )
}

export default Header