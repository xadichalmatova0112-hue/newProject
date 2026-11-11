import React from 'react'
import logoSoft from '../assets/soft.png'

const Header = () => {
    return (
        <div>
            <header class="navbar bg-base-100 max-w-[85%] mx-auto mt-[-20px]">
                <div class="navbar-start">
                  <img src={logoSoft} alt="" />
                </div>

                <div class="navbar-center hidden md:flex">
                    <ul class="menu menu-horizontal px-1 text-gray-500 text-base gap-4">
                        <li><a href="#feature" class="hover:bg-transparent hover:text-gray-900">Feature</a></li>
                        <li><a href="#download" class="hover:bg-transparent hover:text-gray-900">Download</a></li>
                        <li><a href="#pricing" class="hover:bg-transparent hover:text-gray-900">Pricing</a></li>
                    </ul>
                </div>

                <div class="navbar-end gap-4">
                    <a href="#login" class="btn btn-ghost text-gray-600 font-normal text-base">
                        Login
                    </a>
                    <a href="#signup" class="btn bg-[#F64C4C] hover:bg-[#e03e3e] text-white border-none rounded-md px-6 font-normal text-base">
                        Sign up
                    </a>
                </div>
            </header>

        </div>
    )
}

export default Header