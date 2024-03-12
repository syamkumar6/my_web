import x from "../../assets/x.svg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.svg";
import git from "../../assets/github.svg";
import backgroundImage from '../../assets/bg1.jpg'

function Home() {

  function scrolltoProjects() {
    const projectsSection = document.getElementById("projects");
  
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  return (
    <div id="home" className="relative h-screen flex flex-col items-center justify-center pt-8 animated-text" style={{ backgroundImage: `url(${backgroundImage})` }} >

      <div className="hidden lg:block absolute top-1/2 left-0 transform -translate-y-1/2">
        <div className="flex flex-col gap-4 bg-white border-slate-200 p-3">
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
      
      <div className="flex flex-col items-center justify-center mt-8 pt-8">

        <h1 className="text-3xl lg:text-6xl font-bold mt-2  font-customFont1 text-gray-800">
          HEY, I&apos;M SYAM KUMAR
        </h1>

        <div className="mt-8 flex flex-col gap-3 items-center px-4">
          <p className="font-customFont1 text-lg text-gray-600 font-semibold text-lg">
            Crafting digital experiences, one line of code at a time.
          </p>
          <p className="font-customFont1 text-lg text-gray-600 font-semibold text-lg">
            Full Stack Developer on a mission to turn ideas into seamless web solutions.
          </p>
        </div>

        <button className="my-8 bg-purple-600 hover:bg-purple-700 text-white py-3 px-5 rounded-xl " onClick={() => scrolltoProjects()}>
          PROJECTS
        </button>

        <div className="down-moving-arrow mt-8 pt-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-gray-600"
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
