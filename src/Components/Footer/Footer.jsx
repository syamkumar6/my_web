import x from "../../assets/x.jpg";
import linkedin from "../../assets/linkedin.svg";
import instagram from "../../assets/instagram.jpg";
import git from "../../assets/git2.png";

function Footer() {
  return (
    <div className="h-72 flex flex-col justify-center  bg-black text-white">

      <div className="flex flex-col gap-2 lg:flex-row justify-between mx-8 border-b pb-6">
        <div className="flex flex-col gap-2 lg:gap-8">
          <h4 className="text-xl font-customFont1 mt-2">SYAM KUMAR</h4>
          <p className="font-customFont2 text-sm">Crafting digital experiences, one line of code at a time. <br />
             Full Stack Developer on a mission to turn ideas into seamless web solutions.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:gap-8">
          <h4 className="text-xl font-semibold ">SOCIAL</h4>
          <div className="flex  gap-4   ">
          <img src={linkedin} alt="" className="w-8 " />
          <img src={git} alt="" className="w-8 bg-white " />
          <img src={instagram} alt="" className="w-8" />
          <img src={x} alt="" className="w-8" />
        </div>
        </div>
      </div>

      <div className="h-20 flex justify-center items-center">
        <span className="text-xs font-semibold pt-2 lg:pt-8">
          &copy;Copyright2023.Made by <a href="#">Syam Kumar</a>
        </span>
      </div>

    </div>
  )
}

export default Footer