import gitIcon from '../../assets/github.svg'
import careKeralaImg from '../../assets/careKerala.png'
import cstocksImg from '../../assets/c-stocks.png'
import notetickImg from '../../assets/notetick.png'

function Projects() {
  return (
    <div id="projects" className=" w-full bg-gray-100 py-8">
        <div className="col-span-2  p-4 flex flex-col justify-center items-center gap-4 mb-8">
            <h5 className="text-4xl font-customFont1 text-gray-800 pt-8 flex flex-col items-center">
                PROJECTS
                <p className="border-b-4 border-purple-700 border-full mt-3 w-16 place-self-center"></p>
            </h5>
            <p className="text-center p-3 text-gray-700 font-semibold text-xl">A curated selection of self-initiated projects, including the creation of this portfolio website. <br /> Each project is a canvas where I experiment, learn, and evolve—fueling my journey to become a more skilled and versatile developer.</p>
        </div>
        <div>
            <ul>
                <li className="lg:grid grid-cols-2 gap-4  m-8">
                    <img src={careKeralaImg} alt="" className="w-full max-w-xl px-8 mb-2 border-8 rounded" />
                    <div className="flex flex-col px-6 ">
                        <h5 className="text-2xl font-customFont1 mb-3 lg:mb-8">CareKerala</h5>
                        <p className="font-customFont2"> <strong>CareKerala:</strong> A comprehensive medical website built with <strong>Vite and React</strong>, accompanied by an <strong>Express.js</strong> backend. CareKerala empowers users to seamlessly book appointments with hospitals and personal appointments with doctors. Beyond scheduling, users can securely store and manage their health details digitally
                        </p>
                        <div className='flex items-center justify-between'>
                        <button className=" my-8 bg-purple-700 hover:bg-purple-600 text-white py-2 px-5 rounded-xl font-semibold self-start">
                            <a href="https://carekerala-kerala.vercel.app" target="_blank" rel="noopener noreferrer">view project</a>
                        </button>
                        <a href="https://github.com/syamkumar6/carekerala" target="_blank" rel="noopener noreferrer" className='flex items-center text-purple-700 underline font-semibold gap-2'>view code<img src={gitIcon} alt="" className='w-10'/></a>
                        </div>
                    </div>
                </li>
                <li className="lg:grid grid-cols-2 gap-4  m-8">
                    <img src={notetickImg} alt="" className="w-full max-w-xl px-8 mb-2 border-8 rounded" />
                    <div className="flex flex-col px-6 ">
                        <h5 className="text-2xl font-customFont1 mb-3 lg:mb-8">Note-Tick</h5>
                        <p className="font-customFont2">Welcome to the <span className='font-bold'>Vite React</span>  Todo App with Express and MongoDB 
                        repository! This project combines the power of Vite and React.js on the frontend with an 
                         <span className='font-bold'>Express.js</span> backend and MongoDB for a complete full-stack todo application.
                        </p>
                        <div className='flex items-center justify-between'>
                        <button className=" my-8 bg-purple-700 hover:bg-purple-600 text-white py-2 px-5 rounded-xl font-semibold self-start">
                            <a href="https://note-tick-io.vercel.app/" target="_blank" rel="noopener noreferrer">view project</a>
                        </button>
                        <a href="https://github.com/syamkumar6/todo.web" target="_blank" rel="noopener noreferrer" className='flex items-center text-purple-700 underline font-semibold gap-2'>view code<img src={gitIcon} alt="" className='w-10'/></a>
                        </div>
                    </div>
                </li>
                <li className="lg:grid grid-cols-2 gap-4  m-8">
                    <img src={cstocksImg} alt="" className="w-full max-w-xl px-8 mb-2 border-8 rounded" />
                    <div className="flex flex-col px-6 ">
                        <h5 className="text-2xl font-customFont1 mb-3 lg:mb-8">C-Stocks</h5>
                        <p className="font-customFont2">Welcome to c-stocks, a simple yet powerful book selling app 
                        built with <span className='font-bold'>React, Bootstrap,</span>  and <span className='font-bold'>Node.js.</span> This application provides a user-friendly platform for 
                        book enthusiasts to explore, buy, and sell their favorite reads.
                        </p>
                        <div className='flex items-center justify-between'>
                        <button className=" my-8 bg-purple-700 hover:bg-purple-600 text-white py-2 px-5 rounded-xl font-semibold self-start">
                            <a href="https://cstocks-io.vercel.app" target="_blank" rel="noopener noreferrer">view project</a>
                        </button>
                        <a href="https://github.com/syamkumar6/my-web" target="_blank" rel="noopener noreferrer" className='flex items-center text-purple-700 underline font-semibold gap-2'>view code<img src={gitIcon} alt="" className='w-10'/></a>
                        </div>
                    </div>
                </li>
                
            </ul>
            <div className='flex justify-center pt-5'>
            <a href="https://github.com/syamkumar6?tab=repositories" target="_blank" rel="noopener noreferrer" className='flex items-center text-purple-700 underline font-semibold gap-2'>view all projects<img src={gitIcon} alt="" className='w-10'/></a>
            </div>
        </div>
    </div>
  )
}

export default Projects
