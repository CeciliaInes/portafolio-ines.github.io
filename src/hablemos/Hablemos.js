import React from 'react'
import imageLogo from '../assets/logo_ceci.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function Hablemos(){
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5sykaeg', 'template_kdsin8b', form.current, 'YEloQe7kRbAkOEBuj')
          .then((result) => {
              console.log(result.text);
              form.current.reset();
              if(result.text==='OK'){
               document.getElementById("textOK").append("¡El envio ha sido exitoso! Pronto me pondré en contacto contigo ☺️");
                }
          }, (error) => {
              console.log(error.text);
          });
      };


    let linkedin = "https://www.linkedin.com/in/ines-castañeda";
    let twitter = "https://twitter.com/cecixna";
    let gmail = "mailto:inescastaneda885@gmail.com";
    let github = "https://github.com/CeciliaInes";

    return (
        
        <div id='contactame' className="container mt-3">
            
            <div className="w-4/5 md:w-2/5 mx-auto mb-5">
                   
                    <form ref={form} onSubmit={sendEmail}>
                             
                                <div className='border-l-[3px] border-b-[3px] border-white mb-3'>
                                    <div className='bg-black border-2 border-black'>
                                        <h4 className="text-center font-semibold leading-7 pt-1 text-white ">CONTÁCTAME</h4>
                                    </div>
                                </div>
                                <p className="text-sm text-center leading-6 text-gray-600">No dudes en contactarme si estás interesad@ 
                                en contar conmigo para tu próximo proyecto.</p>
                                <div className="grid grid-col-1 ">
                                    <div className="mb-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Nombre <span className='text-red'>*</span>
                                        </label>
                                        <div className="mt-1">
                                            <input
                                            required
                                            type='text'
                                            name='user_name'
                                            id="first-name"
                                            className="block outline-none focus:ring-sky-500 w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>


                                    <div className="mb-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Correo electrónico <span className='text-red'>*</span>
                                        </label>
                                        <div className="mt-1">
                                            <input
                                             id="email"
                                            name='user_email'
                                            type='email'
                                            className="block w-full px-2 rounded-md border-0 outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                          </div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Mensaje <span className='text-red'>*</span>
                                        </label>
                                        <div className="mt-1">
                                            <textarea
                                            required
                                            id="message"
                                            maxLength={400}
                                            name='message'
                                            type='message'
                                            className="newformat block w-full px-2 rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                </div>
                            
                        <div className="grid grid-cols-1 py-1">
                            <button
                            type='submit'
                            value='Send'
                            className="duration-300 hover:scale-90 text-white cursor-pointer rounded-3xl bg-indigo-400  shadow-lg text-sm border-2 border-black px-3 py-2 "
                            >
                            ENVIAR MENSAJE
                            </button>
                            <p id='textOK' className='mt-4 text-center'></p>
                        </div>
                        
                    </form>
                    <div></div>

                    
            
            </div>
            <div className='grid sm:grid-cols-3 grid-cols-1 gap-3 mx-auto'>
                        <div className='mx-auto align-self-center'>
                            <img alt='logo' width={150} src={imageLogo}></img>
                        </div>
                        <div>
                            <p className='text-center'>Este sitio esta hecho con ReactJs, TailwindCSS y mucho AMOR para todos ustedes ♥</p>
                        </div>
                        <div className='flex align-self-center flex-row mx-auto gap-3 '> 
                        <a href={gmail} className='text-black'> <FontAwesomeIcon className='icon-gen border-2 animate border-black hover:scale-90' icon={faEnvelope} size="md"/></a>
                        <a href={github} className='text-black'><FontAwesomeIcon  className='icon-gen border-2 animate border-black hover:scale-90' icon={faGithub} size="md"/></a>
                        <a target='blank' href={linkedin} className='text-black'><FontAwesomeIcon  className='icon-gen border-2 animate border-black hover:scale-90' icon={faLinkedin} size="md"/></a>              
                        <a target='blank' href={twitter} className='text-black'><FontAwesomeIcon className='icon-gen border-2 animate border-black hover:scale-90' icon={faTwitter} size="md"/></a>                   
                        </div>
            </div>
        </div>
    )

};


export default Hablemos;