import React from 'react';


const Contact = () => {
    return (
        <div>
            <p className="poppins-medium text-2xl lg:text-4xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text text-center">
                Contact.
            </p>


            <div className='md:flex items-center w-4/5 m-auto' >
                <p className='w-4/5  m-auto mt-5 md:mt-20 poppins-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-center md:text-left'> 
                    <span className='bg-gradient-to-r from-red-600 to-purple-500 text-transparent bg-clip-text p-2'>
                        Disponible pour vos projets de startup
                    </span> 🚀
                </p>

                <form className="w-4/5 md:w-4/6 lg:w-1/2 max-w-[500px] m-auto flex flex-col space-y-4 py-10">
                    <input 
                        type="text" 
                        placeholder="Nom" 
                        className="p-2 border border-gray-300 rounded-md bg-neutral-900"
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        className="p-2 border border-gray-300 rounded-md bg-neutral-900"
                    />
                    <textarea 
                        placeholder="Message" 
                        className="p-2 border border-gray-300 rounded-md h-32 bg-neutral-900 border"
                    />
                    <div className="p-[2px] rounded-md bg-gradient-to-r from-pink-500 to-purple-500">
                        <button 
                            type="submit" 
                            className="w-full p-2 text-white bg-neutral-900 rounded-md text-purple-800 poppins-medium text-xl">
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
            
        </div>
    );
};

export default Contact;