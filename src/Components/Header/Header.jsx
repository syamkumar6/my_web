import { useState } from "react";
import LogoImg from "../../assets/logo-img.png";
import CloseIcon from "../../assets/CloseIcon.svg";
import MenuIcon from "../../assets/Menu.svg";

function Header() {
  const [drawerVisible, setDrawerVisible] = useState(false);

  function scrolltoProjects() {
    const projectsSection = document.getElementById("projects");
  
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  function scrolltoContact() {
    const projectsSection = document.getElementById("contacts");
  
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  function scrolltoAbout() {
    const projectsSection = document.getElementById("about");
  
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <div className="relative">
      <div
        className={`fixed top-0 right-0 w-3/4 h-screen bg-gray-100 transition-all duration-300 ${
          drawerVisible ? "translate-x-0" : "translate-x-full"}`}>
        <button
          style={{ zIndex: 100 }}
          onClick={() => {setDrawerVisible(false)}}
          className="w-12 absolute top-6 right-6">
          <img src={CloseIcon} alt="" className="" />
        </button>

        <nav >
          <ul className="h-screen flex flex-col items-center justify-center gap-8 animated-text font-bold opacity-70">
            <li className="text-gray-700 hover:text-purple-800 duration-100 ">
              <a href="./">HOME</a>
            </li>
            <li className="text-gray-700 hover:text-purple-800 duration-100 ">
              <a href="#" onClick={() => { setDrawerVisible(false); scrolltoAbout(); }}>ABOUT</a>
            </li>
            <li className="text-gray-700 hover:text-purple-800 duration-100 ">
              <a href="#" onClick={() => {setDrawerVisible(false); scrolltoProjects();}}>PROJECTS</a>
            </li>
            <li className="text-gray-700 hover:text-purple-800 duration-100 ">
              <a href="#" onClick={() => {setDrawerVisible(false); scrolltoContact();}}>CONTACT</a>
            </li>
          </ul>
        </nav>

      </div>

      <header className="w-screen flex justify-between items-center px-6 py-3 h-20 bg-gray-100 shadow z-40">

        <div className="flex items-center gap-2">
          <img
            src={LogoImg}
            alt=""
            className="w-16 object-cover rounded-full animated-text"
          />
          <span>
            <a
              href="./"
              className="font-customFont3 text-gray-600 font-bold animated-text text-3xl hover:text-purple-800 duration-100 "
            >
              SYAM KUMAR
            </a>
          </span>
        </div>

        <nav className='hidden lg:block'>
        <ul className="flex gap-8 animated-text font-bold opacity-70">
          <li className="text-gray-700 hover:text-purple-800 duration-100 ">
            <a href="./">HOME</a>
          </li>
          <li className="text-gray-700 hover:text-purple-800 duration-100 ">
            <a href="#" onClick={scrolltoAbout}>ABOUT</a>
          </li>
          <li className="text-gray-700 hover:text-purple-800 duration-100 ">
            <a href="#" onClick={scrolltoProjects}>PROJECTS</a>
          </li>
          <li className="text-gray-700 hover:text-purple-800 duration-100 ">
            <a href="#" onClick={scrolltoContact} >CONTACT</a>
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
