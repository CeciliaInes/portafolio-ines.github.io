import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import project1 from '../assets/maqueta.jpg';
import project2 from '../assets/gallery.jpg';
import imgInes from '../assets/perfil.jpg';
 
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
            <div className=" sm:flex sm:w-4/6 container gap-x-10 sm:flex-row-reverse mb-20">
                <div className="sm:flex-1 my-4 ">
                    <img className="max-w-xs sm:max-w-sm m-auto" alt="project1" src={project1}></img>
                </div>
                <div className="sm:flex-1 my-4  align-self-center">
                    {/* TITULO */}
                    <div className='border-l-[3px] border-b-[3px] border-white mb-3 w-max '>
                        <div className='bg-black border-2 border-black'>
                            <h4 className="text-center  font-semibold leading-7 pt-1 text-white px-2">Maquetas Plan Lector</h4>
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
            <div  className="sm:flex sm:w-4/6 container gap-x-10 flex-row mb-20">
                <div className="sm:flex-1 my-4">
                    <img className="max-w-xs sm:max-w-sm m-auto" alt="project1" src={project1}></img>
                </div>
                <div className="sm:flex-1 my-4  align-self-center">
                    {/* TITULO */}
                    <div className='border-l-[3px] border-b-[3px] border-white mb-3 w-max '>
                        <div className='bg-black border-2 border-black'>
                            <h4 className="text-center  font-semibold leading-7 pt-1 text-white px-2">Multimedia</h4>
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
            <div  className="sm:flex sm:w-4/6 container gap-x-10 sm:flex-row-reverse mb-20">
                <div className="sm:flex-1 my-4">
                    <img className="max-w-xs sm:max-w-sm m-auto" alt="project1" src={project2}></img>
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
                        <a href="grid-gallery-omega.vercel.app" target="blank" className='no-underline hover:scale-90 px-3 py-2 bg-indigo-400 duration-300 border-black border-2 text-white cursor-pointer rounded-3xl shadow-md text-sm '>
                            Ver proyecto
                        </a>
                        <a href="https://github.com/CeciliaInes/GridGallery" className='no-underline hover:scale-90 px-3 py-2 duration-300 border-black border-2 cursor-pointer rounded-3xl shadow-md text-sm '>
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>  Ver código
                        </a>
                    </div>
                </div>
            </div>

            {/* TESTIMONIOS */}
            <div  className="container">
                <div className="bg-white-op rounded-lg p-10 md:p-16  md:mb-40 mb-20">
                    <img className="w-16 rounded-full mx-auto mb-3" alt="text" src={imgInes}></img>
                    <p className="text-center mb-3 text-md md:text-xl">"Realizar este diseño para presentar mis proyectos ha sido enriquecedor, 
                    ya que es la primera vez que utilizo TailwindCSS, he aprendido a utilizar unos 
                    de los frameworks más populares y excelentes para crear diseños webs."</p>
                    <p className="text-md md:text-xl text-center text-gray-600">CECILIA CASTAÑEDA / DESARROLLADORA DE SOFTWARE / ANALISTA DE DATOS</p>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default Proyectos;