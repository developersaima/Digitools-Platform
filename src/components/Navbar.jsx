import React from "react";
import digitools from "../assets/picture/DigiTools.png";
import { ShoppingCart } from "lucide-react";

const Navbar = ({cartItem}) => {
  return (
    <div className="navbar fixed top-0 right-0 left-0 z-10 px-4 bg-base-100 shadow-sm px-4">
      
      {/* Left */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            ☰
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li><a href="#">Products</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <img src={digitools} alt="DigiTools Logo" className="w-32" />
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#">Products</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-4 ">
        <div className="relative">
          <ShoppingCart className="cursor-pointer" />
          <span className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center absolute -top-2 -right-2 text-white text-[12px] ">
            {cartItem.length}
          </span>
        </div>
        <a href="#" className="hover:text-purple-600">Login</a>
        <button className="btn btn-primary rounded-full">Get Started</button>
      </div>
    </div>
  );
};

export default Navbar;