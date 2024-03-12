import { useState } from "react";
import LogoImg from "../../assets/logo-img.png";
import CloseIcon from "../../assets/CloseIcon.svg";
import MenuIcon from "../../assets/Menu.svg";

function Header() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white z-50 transition-all duration-300 ${
          drawerVisible ? "translate-x-0" : "translate-x-full"}`}>
        <button
          onClick={() => {setDrawerVisible(false)}}
          className="w-12 absolute top-6 right-6">
          <img src={CloseIcon} alt="" className="" />
        </button>

        <nav >
          <ul className="h-screen flex flex-col items-center justify-center gap-8 animated-text font-bold opacity-70">
            <li className="hover:text-purple-800 duration-100 ">
              <a href="./">HOME</a>
            </li>
            <li className="hover:text-purple-800 duration-100 ">
              <a href="./#about" onClick={() => {setDrawerVisible(false);}}>ABOUT</a>
            </li>
            <li className="hover:text-purple-800 duration-100 ">
              <a href="./#projects" onClick={() => {setDrawerVisible(false);}}>PROJECTS</a>
            </li>
            <li className="hover:text-purple-800 duration-100 ">
              <a href="./#contacts" onClick={() => {setDrawerVisible(false);}}>CONTACT</a>
            </li>
          </ul>
        </nav>

      </div>

      <header className="w-screen flex justify-between items-center px-6 py-3 h-20 bg-white fixed shadow z-40">

        <div className="flex items-center gap-2">
          <img
            src={LogoImg}
            alt=""
            className="w-16 object-cover rounded-full animated-text"
          />
          <span>
            <a
              href="./"
              className="font-bold animated-text text-xl hover:text-purple-800 duration-100 "
            >
              SYAM KUMAR
            </a>
          </span>
        </div>

        <nav className='hidden lg:block'>
        <ul className="flex gap-8 animated-text font-bold opacity-70">
          <li className="hover:text-purple-800 duration-100 ">
            <a href="./">HOME</a>
          </li>
          <li className="hover:text-purple-800 duration-100 ">
            <a href="./#about">ABOUT</a>
          </li>
          <li className="hover:text-purple-800 duration-100 ">
            <a href="./#projects">PROJECTS</a>
          </li>
          <li className="hover:text-purple-800 duration-100 ">
            <a href="./#contacts">CONTACT</a>
          </li>
        </ul>
        </nav>

        <button onClick={()=>{setDrawerVisible(true)}} className="lg:hidden">
          <img src={MenuIcon} alt="" />
        </button>

      </header>
      
    </div>
  );
}

export default Header;
