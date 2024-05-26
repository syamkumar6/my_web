import { useState } from "react";
import emailIcon from "../../assets/email.svg"


const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Express",
  "MongoDb",
  "Node.js",
  "GIT",
  "Github",
  "Firebase Basics",
  "SQL"
];

function About() {
  const [showFullText, setShowFullText] = useState(false);

  function scrolltoContacts() {
    const projectsSection = document.getElementById("contacts");
  
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  const toggleReadMore = () => {
    setShowFullText(!showFullText);
  };
 
  return (
    <div id="about" className="lg:grid grid-cols-2 gap-4 w-full  bg-gray-100 relative">

      <div className="col-span-2  p-4 flex flex-col justify-center items-center gap-4 mb-8">
        <h2 className="text-4xl font-customFont1 mt-8 text-gray-600 flex flex-col items-center text-shine">
            ABOUT ME
            <p className="border-b-4 border-purple-700 border-full mt-3 w-16 place-self-center"></p>
        </h2>
        <p className="text-center font-customFont1 text-lg text-gray-600 font-semibold mt-24 pt-12">
          Here you will find more information about me, what I do, and my
          current skills mostly in <br className="hidden lg:block"/> terms of programming and technology
        </p>
      </div>
      
        <div className="px-8 py-3 m-">
          <h5 className="text-3xl font-customFont1 px-5 mb-8 text-gray-600">Get to know me!</h5>
          <div className="px-5 flex flex-col gap-4">
            <p className="font-customFont2 text-gray-600">Hello there! I&apos;m a passionate and motivated <span className="font-bold text-lg">full-stack developer</span>  with a 
              flair for creating dynamic and interactive web applications. I&apos;ve spent the last six months honing my skills in 
              full-stack development through an intensive course at <span className="font-bold text-lg">Entry elevate.</span>
            </p>
            <p className="font-customFont2 text-gray-600">During this transformative journey, I delved into the intricacies of both front-end and back-end 
              technologies, equipping myself with the knowledge to bring ideas to life in the digital realm. My 
              commitment to learning and building has driven me to embark on personal<span className="font-bold text-lg"> web projects,</span> where I&apos;ve 
              had the opportunity to apply my skills and showcase my creativity.
            </p>
            {showFullText && (
            <>
              <p className="font-customFont2 text-gray-600">
                My portfolio is a testament to the dedication I&apos;ve poured
                into mastering the art of coding and creating seamless user
                experiences. From responsive designs to intuitive functionality,
                each project reflects my passion for delivering{" "}
                <span className="font-bold text-lg">high-quality solutions.</span>
              </p>
              <p className="font-customFont2 text-gray-600">
                While I may not have a corporate job title under my belt, my
                determination, adaptability, and love for coding set me apart.
                I&apos;m enthusiastic about the prospect of contributing my
                skills to real-world challenges and continuing to grow as a
                developer.
              </p>
              <p className="font-customFont2 text-gray-600">
                Feel free to explore my portfolio and discover the diverse range
                of projects that showcase my abilities. If you have a project or
                idea you&apos;d like to discuss, I&apos;m always open to new
                opportunities and collaborations.
              </p>
            </>
          )}
          {!showFullText && (
            <button
              onClick={toggleReadMore}
              className=" text-gray-600 border-b border-purple-500 self-end hover:bg-purple-600 duration-100 hover:text-white hover:border-none py-2 px-4 rounded-xl font-semibold"
            >
              Read more...
            </button>
          )}
          </div>
          <button className="ml-5 my-8 bg-purple-600 hover:bg-purple-600 text-white py-3 px-8 rounded-xl font-semibold" onClick={() => scrolltoContacts()}>
            Contact</button>
        </div>

        <div className=" p-3">
          <h5 className="text-3xl font-customFont1 px-5 mb-8 text-gray-600">My Skills</h5>
          <ul className="flex flex-wrap gap-3 px-5">
            {skills.map((skill, index) => {
              return <li key={index} className="px-3 py-2 bg-slate-200 rounded-md text-gray-600">
                {skill}
                </li>;
            })}
          </ul>
        </div>

        <div className="contactBtn">
      <button  aria-label="Contact Button" onClick={scrolltoContacts}><img src={emailIcon} alt="" /></button>
    </div>
        
      </div>
   
  );
}

export default About;
