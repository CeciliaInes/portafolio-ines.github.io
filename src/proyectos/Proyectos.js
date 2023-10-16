import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from '@material-tailwind/react';
import project1 from '../assets/maqueta.jpg';
import project2 from '../assets/gallery.jpg';
import area from '../assets/exp_for/area51.jpg';
import isil from '../assets/exp_for/isil.jpg';
import lab from '../assets/exp_for/lab.jpg';
import vc from '../assets/exp_for/vc.jpg';
import ibella from '../assets/exp_for/ibella.jpg';
import sant from '../assets/exp_for/santillana.jpg';
import html from '../assets/logo_tech/html.png';
import css from '../assets/logo_tech/css.png';
import js from '../assets/logo_tech/js.png';
import react from '../assets/logo_tech/reactjs.png';
import tailwind from '../assets/logo_tech/tailwindcss.png';
import sql from '../assets/logo_tech/sql.png';
import excel from '../assets/logo_tech/excel.png';
import python from '../assets/logo_tech/python.png';
import power from '../assets/logo_tech/powerBI.png';
import git from '../assets/logo_tech/git.png';
import githubi from '../assets/logo_tech/github.png';
import ps from '../assets/logo_tech/photoshop.png';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
 

function Proyectos(){
  
    return(
    <div>
        <div className="mx-auto mt-20  md:mt-40 w-3/5 mb-20 md:mb-40">
            <p className="text-lg md:text-2xl text-center  mb-4">A lo largo de mis estudios y proyectos, 
            he trabajado con las siguientes tecnologías.</p>
            <p className="font-bold text-center">Aquí hay algunos que me gustaría compartir contigo.</p>
             
            <div className="icons justify-around grid grid-cols-4 lg:grid-cols-8">
                
                    <Tooltip content="HTML 5">
                        <img src={html} className="lg:w-14 w-11 h-auto" alt="Html5"></img>
                    </Tooltip>
                    <Tooltip content="CSS 3">
                        <img src={css} className="lg:w-14 w-11 h-auto" alt="Css3"></img>
                    </Tooltip>
                    <Tooltip content="JavaScript">
                        <img src={js} className="lg:w-14 w-11 h-auto" alt="JavaScript"></img>
                    </Tooltip>
                    <Tooltip content="React JS">
                        <img src={react} className="lg:w-14 w-11 h-auto" alt="ReactJS"></img> 
                    </Tooltip>
               
                    <Tooltip content="Tailwind CSS">
                        <img src={tailwind} className="lg:w-14 w-11 h-auto" alt="TailwindCSS"></img> 
                    </Tooltip>
                    <Tooltip content="Photoshop">
                        <img src={ps} className="lg:w-14 w-11 h-auto" alt="Photoshop"></img> 
                    </Tooltip>
                    <Tooltip content="Git"> 
                        <img src={git} className="lg:w-14 w-11 h-auto" alt="git"></img> 
                    </Tooltip>
                    <Tooltip content="Github"> 
                        <img src={githubi} className="lg:w-14 w-11 h-auto" alt="github"></img> 
                    </Tooltip>
                
            </div>  
            <div className="icons justify-start grid grid-cols-4 lg:grid-cols-8">
                <div className="display-n lg:block"></div>
                <div className="display-n lg:block"></div>
                <Tooltip content="SQL">
                    <img src={sql} className="lg:w-14 w-11 h-auto" alt="sql"></img>
                </Tooltip>
                <Tooltip content="Excel"> 
                    <img src={excel} className="lg:w-14 w-11 h-auto" alt="Excel"></img>
                </Tooltip>
                <Tooltip content="Python">
                    <img src={python} className="lg:w-14 w-11 h-auto" alt="Python"></img>
                </Tooltip>
                <Tooltip content="Power BI"> 
                    <img src={power} className="lg:w-14 w-11 h-auto" alt="PowerBI"></img> 
                </Tooltip>
                <div className="display-n lg:block"></div>
                <div className="display-n lg:block"></div>

                
                
            </div>   
        </div>

        <div className="flex justify-center">
            <div className='border-l-[3px] border-b-[3px] border-white mb-10 w-max '>
                <div className='bg-black border-2 border-black'>
                    <h4 className="text-center  font-semibold leading-7 pt-1 text-white px-2">MIS PROYECTOS</h4>
                </div>
            </div>
        </div>

        <Tabs
        defaultActiveKey="data"
        id="uncontrolled-tab-example"
        className="mb-3 justify-center container mx-auto"
        >
            <Tab className="text-bold" eventKey="frontend" title="Front-end Developer">
                <div>
                    <div className=" sm:flex sm:w-4/6 container justify-around gap-x-4 sm:flex-row-reverse mb-20">
                        <div className="sm:flex-1 my-4">
                            <img className="max-w-xs md:max-w-sm  m-auto" alt="project1" src={project1}></img>
                        </div>
                        <div className="sm:flex-1 my-4  align-self-center">
                            {/* TITULO */}
                            <div className='border-l-[3px] border-b-[3px] border-white mb-3 w-max'>
                                <div className='bg-black border-2 border-black'>
                                    <h5 className="text-center  font-semibold leading-7 pt-1 text-white px-2">MAQUETAS PLAN LECTOR</h5>
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
                                    <h5 className="text-center  font-semibold leading-7 pt-1 text-white px-2">MULTIMEDIA</h5>
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
                                    <h5 className="text-center  font-semibold leading-7 pt-1 text-white px-2">GRID GALLERY</h5>
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
                </div>
            </Tab>
            <Tab eventKey="data" title="Data Analyst">
                

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
                                    <h5 className="text-center  font-semibold leading-7 pt-1 text-white px-2">PROYECTO COVID</h5>
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
                                    <h5 className="text-center  font-semibold leading-7 pt-1 text-white px-2">STARTUP</h5>
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
                                    <h5 className="text-center  font-semibold leading-7 pt-1 text-white px-2">E-COMMERCE</h5>
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

                

                
            </Tab>
             
        </Tabs>

     
        
     



 
     

            
         

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
                                <span className="w-0.5 h-full bg-indigo-800"></span>
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
                                    <p className="block antialiased font-sans text-md leading-normal text-gray-700 font-normal">Análisis de datos</p>
                                    <h2 className="block antialiased font-sans text-sm leading-normal text-gray-700 font-bold">2022</h2>
                                </div>
                            </div>
                        </li>
                        <li className="flex relative flex-col gap-2 h-40 ">
                            <span className="absolute left-0 grid justify-center bg-transparent transition-opacity duration-200 !w-[78px] timeline" >
                                <span className="w-0.5 h-full bg-indigo-800"></span>
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
    )
}

export default Proyectos;