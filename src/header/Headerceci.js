import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imagenAvatar from '../assets/profile2.png';
import documentCV from '../assets/analisis_de_datos_CV_CB.pdf';
import imageLogo from '../assets/logo_ceci.png';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

    const navigation = [
        { name: 'HOLA', href: '#hola', current: true },
        { name: 'PROYECTOS', href: '#proyectos', current: true },
        { name: 'CONTÁCTAME', href: '#contactame', current: true }
    ]
  
function Headerceci() {
    let name = "Cecilia";
    let linkedin = "https://www.linkedin.com/in/ines-castañeda";
    let gmail = "mailto:inescastaneda885@gmail.com";
    let github = "https://github.com/CeciliaInes";
    
  return (
    // Contenedor padre 
    <div id='hola' className='container'>
        <div className="mx-auto opacity-1">
            <div className='flex flex-rows justify-between items-center gap-3 mx-auto h-20'>
                <div className="center">
                    <img className='sm:w-60 w-40 h-auto' alt='logo' src={imageLogo}></img>
                </div>
                <div className="hidden lg:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className=  'text-black no-underline px-3 py-2 text-md font-bold hover:scale-110 duration-300'
                        aria-current={item.current ? 'page' : undefined}>
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <a download={true} type='download' className='text-center' href={documentCV}>
                    <button className='hover:scale-90 px-3 py-2 bg-indigo-400 duration-300 border-black border-2 text-white cursor-pointer rounded-3xl shadow-lg text-xs sm:text-sm'>
                    DESCARGAR CURRICULUM
                    </button>
                </a>
            </div>

            <div className="container sm:flex sm:flex-row-reverse gap-5 pt-8 pb-8">
                
                <div className='sm:flex-1 mb-5 sm:mb-0'>
                    <img className='max-w-xs md:max-w-md m-auto' alt='Foto Cecilia' src={imagenAvatar}></img>
                </div>
                <div className='align-self-center sm:flex-1'>
                    <p className='md:text-3xl text-xl font-normal'>¡Hola a todos!</p>
                    <p className='md:text-5xl text-3xl font-normal'>Soy {name}</p>
                    <p className='text-md'>Desarrolladora de Software y Analista de datos, estoy feliz de que me puedas conocer un poco más.
                    Scrollea para ver más.
                    </p>
                    <div className='flex flex-row gap-3'> 
                        <a href={gmail} className='text-black'> <FontAwesomeIcon className='icon-gen border-2 animate border-black hover:scale-90' icon={faEnvelope} size="md"/></a>
                        <a href={github} className='text-black'><FontAwesomeIcon  className='icon-gen border-2 animate border-black hover:scale-90' icon={faGithub} size="md"/></a>
                        <a target='blank' href={linkedin} className='text-black'><FontAwesomeIcon  className='icon-gen border-2 animate border-black hover:scale-90' icon={faLinkedin} size="md"/></a>              
                     </div>
                </div>
            </div>
        
        </div>
    </div>
  ); 
}

export default Headerceci;