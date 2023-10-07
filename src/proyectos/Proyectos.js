import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import project1 from '../assets/maqueta.jpg';
import project2 from '../assets/gallery.jpg';
import area from '../assets/exp_for/area51.jpg';
import isil from '../assets/exp_for/isil.jpg';
import lab from '../assets/exp_for/lab.jpg';
import vc from '../assets/exp_for/vc.jpg';
import ibella from '../assets/exp_for/ibella.jpg';
import sant from '../assets/exp_for/santillana.jpg';
 

function Proyectos(){
  
    return(
    <div id="proyectos">
        <div className="mx-auto mt-20  md:mt-40 w-3/5 mb-20 md:mb-40">
            <p className="text-lg md:text-2xl text-center  mb-4">A lo largo de mi carrera como front-end, he tenido el privilegio de trabajar en proyectos retadores e increíbles.</p>
            <p className="font-bold text-center">Aquí hay algunos que me gustaría compartir contigo.</p>
            <div className="mx-auto w-max">
                <FontAwesomeIcon size="2xl" className="animate trasition duration-200 animate-bounce" icon={faArrowDown}></FontAwesomeIcon>
            </div>
        </div>
        
        {/* Item 1 de proyectos */}
        <div>
            <div className=" sm:flex sm:w-4/6 container justify-around gap-x-4 sm:flex-row-reverse mb-20">
                <div className="sm:flex-1 my-4 ">
                    <img className="max-w-xs md:max-w-sm  m-auto" alt="project1" src={project1}></img>
                </div>
                <div className="sm:flex-1 my-4  align-self-center">
                    {/* TITULO */}
                    <div className='border-l-[3px] border-b-[3px] border-white mb-3 w-max'>
                        <div className='bg-black border-2 border-black'>
                            <h4 className="text-center  font-semibold leading-7 pt-1 text-white px-2">MAQUETAS PLAN LECTOR</h4>
                        </div>
                    </div>
                    <p >Maqueta realizada con HTML, CSS, Y JS, fui la encargada de realizar la maquetación de todas las obras de Plan Lector de la Editorial.</p>
                    <div className="gap-3 flex">
                        <a href="https://maqueta-plan-lector.vercel.app" className='no-underline hover:scale-90 px-3 py-2 bg-indigo-400 duration-300 border-black border-2 text-white cursor-pointer rounded-3xl shadow-md text-sm '>
                            Ver proyecto
                        </a>
                        {/* <button className='hover:scale-90 px-3 py-2 duration-300 border-black border-2 cursor-pointer rounded-3xl shadow-md text-sm '>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>  Ver código
                        </button> */}
                    </div>
                </div>
            </div>
            
        </div>

        {/* Item 2 de proyectos */}
        <div>
            <div  className="sm:flex sm:w-4/6 justify-around container gap-x-4 flex-row mb-20">
                <div className="sm:flex-1 my-4">
                    <img className="max-w-xs md:max-w-sm m-auto" alt="project1" src={project1}></img>
                </div>
                <div className="sm:flex-1 my-4  align-self-center">
                    {/* TITULO */}
                    <div className='border-l-[3px] border-b-[3px] border-white mb-3 w-max '>
                        <div className='bg-black border-2 border-black'>
                            <h4 className="text-center  font-semibold leading-7 pt-1 text-white px-2">MULTIMEDIA</h4>
                        </div>
                    </div>
                    <p>Accede a mi proyecto de libros digitales, hecho con HTML, CSS Y JAVASCRIPT</p>
                    <div className="gap-3 flex">
                        <button className='hover:scale-90 px-3 py-2 bg-indigo-400 duration-300 border-black border-2 text-white cursor-pointer rounded-3xl shadow-md text-sm '>
                            Ver proyecto
                        </button>
                        <button className='hover:scale-90 px-3 py-2 duration-300 border-black border-2 cursor-pointer rounded-3xl shadow-md text-sm '>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>  Ver código
                        </button>
                    </div>
                </div>
                
            </div>
             
        </div>

        {/* Item 3 de proyectos */}
        <div>
            <div  className="sm:flex sm:w-4/6 container justify-around gap-x-4 sm:flex-row-reverse mb-20">
                <div className="sm:flex-1 my-4">
                    <img className="max-w-xs md:max-w-sm m-auto" alt="project1" src={project2}></img>
                </div>
                <div className="sm:flex-1 my-4  align-self-center">
                    {/* TITULO */}
                    <div className='border-l-[3px] border-b-[3px] border-white mb-3 w-max '>
                        <div className='bg-black border-2 border-black'>
                            <h4 className="text-center  font-semibold leading-7 pt-1 text-white px-2">GRID GALLERY</h4>
                        </div>
                    </div>
                    <p>Accede a mi proyecto de Galeria utilizando Grid Content</p>
                    <div className="gap-3 flex">
                        <a href="https://grid-gallery-omega.vercel.app" target="blank" className='no-underline hover:scale-90 px-3 py-2 bg-indigo-400 duration-300 border-black border-2 text-white cursor-pointer rounded-3xl shadow-md text-sm '>
                            Ver proyecto
                        </a>
                        <a href="https://github.com/CeciliaInes/GridGallery" target="blank" className='no-underline hover:scale-90 px-3 py-2 duration-300 border-black border-2 cursor-pointer rounded-3xl shadow-md text-sm text-black'>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>  Ver código
                        </a>
                    </div>
                </div>
            </div>

            
         

         {/* timeLime trabajos */}

        <div className="container flex flex-col md:flex-row justify-around gap-3">
            <div className="linea1">
                <div className="flex justify-center">
                    <div className='border-l-[3px] border-b-[3px] border-white mb-3 w-max '>
                        <div className='bg-black border-2 border-black'>
                            <h4 className="text-center  font-semibold leading-7 pt-1 text-white px-2">MI EXPERIENCIA LABORAL</h4>
                        </div>
                    </div>
                </div>
                    
                <div className="justify-center flex my-10 md:my-26">
                    
                <div className="sm:w-[22rem] w-[20rem]">
                    <ul className="w-full flex  flex-col !pl-0">
                        <li className="flex relative flex-col gap-2 h-40">
                            <span className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200 !w-[78px] timeline"  >
                                <span className="w-0.5 h-full bg-blue-800"></span>
                            </span>
                            <div className="flex items-center gap-2 relative rounded-xl border-2 bg-indigo-200 py-2 pl-4 pr-6 shadow-md shadow-blue-gray-900/5">
                                <img className='rounded-full w-14 h-auto z-[2]' alt='Editorial Santillana' src={sant}></img>
                                <div className="flex flex-col gap-1">
                                    <h6 className="block antialiased tracking-normal font-sans 
                                    text-base font-semibold leading-relaxed text-gray-700">Editorial Santillana</h6>
                                    <p className="block antialiased font-sans text-md leading-normal text-gray-700 font-normal">Soporte de plataformas</p>
                                    <h2 className="block antialiased font-sans text-sm leading-normal text-gray-700 font-bold">2022 - 2023</h2>
                                </div>
                            </div>
                        </li>
                        <li className="flex relative flex-col gap-2 h-40 ">
                            <span className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200 !w-[78px] timeline" >
                                <span className="w-0.5 h-full bg-indigo-400"></span>
                            </span>
                            <div className="flex items-center gap-2 relative rounded-xl  border-2 bg-indigo-200  py-2 pl-4 pr-6 shadow-md shadow-blue-gray-900/5">
                                <img className='rounded-full w-14 h-auto z-[2]' alt='Ibella' src={ibella}></img>
                                <div className="flex flex-col gap-1">
                                    <h6 className="block antialiased tracking-normal font-sans 
                                    text-base font-semibold leading-relaxed text-gray-700">Ibella Group</h6>
                                    <p className="block antialiased font-sans text-md leading-normal text-gray-700 font-normal">Community Manager</p>
                                    <h2 className="block antialiased font-sans text-sm leading-normal text-gray-700 font-bold">2021</h2>
                                </div>
                            </div>
                        </li>
                        <li className="flex relative flex-col gap-2 h-40">
                            <div className="flex items-center gap-2 relative rounded-xl border-2 bg-indigo-200  py-2 pl-4 pr-6 shadow-md shadow-blue-gray-900/1">
                                <img className='rounded-full w-14 h-auto z-[2]' alt='Visual Creative' src={vc}></img>
                                <div className="flex flex-col gap-1">
                                    <h6 className="block antialiased tracking-normal font-sans 
                                    text-base font-semibold leading-relaxed text-gray-700">Visual Creative</h6>
                                    <p className="block antialiased font-sans text-md leading-normal text-gray-700 font-normal">Maquetadora web</p>
                                    <h2 className="block antialiased font-sans text-sm leading-normal text-gray-700 font-bold">2018 - 2020</h2>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
             


            <div className="linea1">
                <div className="flex justify-center">
                    <div className='border-l-[3px] border-b-[3px] border-white mb-3 w-max '>
                        <div className='bg-black border-2 border-black'>
                            <h4 className="text-center  font-semibold leading-7 pt-1 text-white px-2">FORMACIÓN</h4>
                        </div>
                    </div>
                </div>
                    
                <div className="justify-center flex my-10 md:my-26">
                    
                <div className="sm:w-[22rem] w-[20rem]">
                    <ul className="w-full flex  flex-col !pl-0">
                        <li className="flex relative flex-col gap-2 h-40">
                            <span className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200 !w-[78px] timeline"  >
                                <span className="w-0.5 h-full bg-blue-800"></span>
                            </span>
                            <div className="flex items-center gap-2 relative rounded-xl border-2 bg-indigo-200 py-2 pl-4 pr-6 shadow-md shadow-blue-gray-900/5">
                                <img className='rounded-full w-14 h-auto z-[2]' alt='Laboratoria' src={lab}></img>
                                <div className="flex flex-col gap-1">
                                    <h6 className="block antialiased tracking-normal font-sans 
                                    text-base font-semibold leading-relaxed text-gray-700">Laboratoria</h6>
                                    <p className="block antialiased font-sans text-md leading-normal text-gray-700 font-normal">Bootcamp de Análisis de datos</p>
                                    <h2 className="block antialiased font-sans text-sm leading-normal text-gray-700 font-bold">2022</h2>
                                </div>
                            </div>
                        </li>
                        <li className="flex relative flex-col gap-2 h-40 ">
                            <span className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200 !w-[78px] timeline" >
                                <span className="w-0.5 h-full bg-indigo-400"></span>
                            </span>
                            <div className="flex items-center gap-2 relative rounded-xl  border-2 bg-indigo-200  py-2 pl-4 pr-6 shadow-md shadow-blue-gray-900/5">
                                <img className='rounded-full w-14 h-auto z-[2]' alt='Instituto San Ignacio de Loyola' src={isil}></img>
                                <div className="flex flex-col gap-1">
                                    <h6 className="block antialiased tracking-normal font-sans 
                                    text-base font-semibold leading-relaxed text-gray-700">ISIL</h6>
                                    <p className="block antialiased font-sans text-md leading-normal text-gray-700 font-normal">Desarrollo de Software</p>
                                    <h2 className="block antialiased font-sans text-sm leading-normal text-gray-700 font-bold">2019 - 2022</h2>
                                </div>
                            </div>
                        </li>
                        <li className="flex relative flex-col gap-2 h-40">
                            <div className="flex items-center gap-2 relative rounded-xl border-2 bg-indigo-200  py-2 pl-4 pr-6 shadow-md shadow-blue-gray-900/1">
                                <img className='rounded-full w-14 h-auto z-[2]' alt='Area 51 Trainning Center' src={area}></img>
                                <div className="flex flex-col gap-1">
                                    <h6 className="block antialiased tracking-normal font-sans 
                                    text-base font-semibold leading-relaxed text-gray-700">Área 51 Trainning</h6>
                                    <p className="block antialiased font-sans text-md leading-normal text-gray-700 font-normal">HTML, CSS y JQUERY</p>
                                    <h2 className="block antialiased font-sans text-sm leading-normal text-gray-700 font-bold">2018</h2>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
         
         
        </div>
    </div>
    )
}

export default Proyectos;