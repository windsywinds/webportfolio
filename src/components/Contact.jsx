import React from "react";
import Title from "./Title";

function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto pt-10" >
            
            <div className="flex justify-center items-center">

                <form 
                    action="https://getform.io/slug"
                    method="POST"
                    className="flex flex-col w-full md:w-7/12"
                    >
                        <Title>Get in touch!</Title>
                    <input 
                        type="type"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    ></input>
                    <input 
                        type="type"
                        name="email"
                        placeholder="Your@Email.com"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    ></input>
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="10"
                        className="mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none"                        
                        ></textarea>
                        <button 
                        type="button"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-orange-600 to-pink-600 drop-shadow-md hover:stroke-white"
                        >Send!</button>
                </form>

            </div>

        </div>
    )
}

export default Contact;