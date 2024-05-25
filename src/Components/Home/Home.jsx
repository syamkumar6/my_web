import x from "../../assets/x.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import git from "../../assets/github.svg";
import { useEffect, useRef } from "react";


function Home() {
  const pointerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const pointer = pointerRef.current;
      if (pointer) {
        const pointerSize = pointer.offsetWidth / 2;
        pointer.style.top = `${e.clientY - pointerSize}px`;
        pointer.style.left = `${e.clientX - pointerSize}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  function scrolltoProjects() {
    const projectsSection = document.getElementById("projects");
  
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <div id="home" className="relative h-screen flex flex-col items-center justify-center   bg-purple-600 "  >
       <div className="animated-bg-lines z-10"></div>
      <div className=" absolute top-0 lg:top-1/2 left-0 transform -translate-y-1/2 z-50">
        <div className="flex flex-col gap-4 bg-gray-100 border-slate-200 p-3">
          <a href="https://www.linkedin.com/in/syam-kumar-4491342a0/" className="p-2 hover:border rounded-md border-purple-400 duration-100 ">
            <img src={linkedin} alt="" className="w-8" />
          </a>
          <a href="https://github.com/syamkumar6" className="p-2 hover:border rounded-md border-purple-400 duration-100 ">
            <img src={git} alt="" className="w-8" />
          </a>
          <a href="#" className="p-2 hover:border rounded-md border-purple-400 duration-100 ">
            <img src={instagram} alt="" className="w-8" />
          </a>
          <a href="#" className="p-2 hover:border rounded-md border-purple-400 duration-100 ">
            <img src={x} alt="" className="w-8" />
          </a>
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center mt-8 pt-8 animated-text">

        <h1 className="text-3xl lg:text-6xl font-bold mt-2  font-customFont1 text-gray-100">
          HEY, I&apos;M SYAM KUMAR
        </h1>

        <div className="mt-8 flex flex-col gap-3 items-center px-4 text-center">
          <p className="  text-gray-200 font-semibold text-xl">
            Crafting digital experiences, one line of code at a time.
          </p>
          <p className="hidden lg:block  text-gray-200 font-semibold text-xl">
            Full Stack Developer on a mission to turn ideas into seamless web solutions.
          </p>
        </div>

        <button className="my-8 bg-purple-800 hover:bg-purple-700 text-white py-3 px-5 rounded-xl z-50" onClick={() => scrolltoProjects()}>
          PROJECTS
        </button>

        <div className="down-moving-arrow mt-8 pt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-gray-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>

      </div>
    </div>
  );
}

export default Home;
