import imgInes from '../assets/perfil.jpg';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
 
function Testimonios(){

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return(
        <div>
            { /*SKILLS DEVELOPMENT*/ }
            


            {/* TESTIMONIOS */}

            <Carousel data-bs-theme="dark" className='container mx-auto mb-20 mt-8 md:mb-32 md:mt-16' activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className='bg-white-op rounded-lg p-8 md:p-10'>
                    <div text="Primer slide">
                        <img className="w-16 mx-auto rounded-full mb-3" alt="avatar1" src={imgInes}></img>
                        <Carousel.Caption className='w-4/5 mx-auto'>
                        <p className='text-center mb-3 text-md md:text-xl text-black'>"Realizar este diseño para presentar mis proyectos ha sido enriquecedor, 
                        ya que es la primera vez que utilizo TailwindCSS, he aprendido a utilizar unos 
                        de los frameworks más populares y excelentes para crear diseños webs."</p>
                        <p className="text-md md:text-xl text-center text-gray-600">VANESA RUBIÑOS / DISEÑADORA GRÁFICA / CEO IBELLA GROUP</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='bg-white-op rounded-lg p-8 md:p-10 '>
                    <div text="Primer slide">
                        <img className="w-16 mx-auto rounded-full mb-3" alt="avatar1" src={imgInes}></img>
                        <Carousel.Caption className='w-4/5 mx-auto'>
                        <p className='text-center mb-3 text-md md:text-xl text-black'>"Realizar este diseño para presentar mis proyectos ha sido enriquecedor, 
                        ya que es la primera vez que utilizo TailwindCSS, he aprendido a utilizar unos 
                        de los frameworks más populares y excelentes para crear diseños webs."</p>
                        <p className="text-md md:text-xl text-center text-gray-600">ALEJANDRA HILDEBRANDT / DISEÑADORA GRÁFICA / CEO AGLAYA DIGITAL </p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='bg-white-op rounded-lg p-8 md:p-10 '>
                    <div text="Primer slide">
                        <img className="w-16 mx-auto rounded-full mb-3" alt="avatar1" src={imgInes}></img>
                        <Carousel.Caption className='w-4/5 mx-auto'>
                        <p className='text-center mb-3 text-md md:text-xl text-black'>"Realizar este diseño para presentar mis proyectos ha sido enriquecedor, 
                        ya que es la primera vez que utilizo TailwindCSS, he aprendido a utilizar unos 
                        de los frameworks más populares y excelentes para crear diseños webs."</p>
                        <p className="text-md md:text-xl text-center text-gray-600">CECILIA CASTAÑEDA / DESARROLLADORA DE SOFTWARE / ANALISTA DE DATOS</p>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
            
         </div>
    )
};


export default Testimonios;