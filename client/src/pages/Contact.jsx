import { useState } from "react";
import { Footer } from "../components/footer";

export const Contact = () => {

    const[contact, setContact] = useState({
        username: "",
        email: "",
        message: "",
    });

    // lets tackle our handleInput 
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ... contact,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(contact);
        
    };


    return(
        <>
            <section className="section-contact">
                <div className="contact-content container">
                    <h1 className="main-heading">contact us</h1>
                </div>
                {/* contact page main  */}
                <div className="container grid grid-two-cols">
                    <div className="contact-img">
                        <img src="/images/available.svg" alt="24/7 img" />
                    </div>
                    {/* contact content  */}
                    <section className="section-form">
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">username</label>
                                <input type="text" 
                                name="username"
                                id="username"
                                autoComplete="off"
                                value={contact.username}
                                onChange={handleInput}
                                required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">email</label>
                                <input type="email" 
                                name="email"
                                id="email"
                                autoComplete="off"
                                value={contact.email}
                                onChange={handleInput}
                                required
                                />
                            </div>
                            <div>
                            <label htmlFor="message">message</label>
                            <textarea 
                            name="message" 
                            id="message" 
                            autoComplete="off"
                            value={contact.message}
                            onChange={handleInput}
                            required
                            cols="50" 
                            rows="5"
                            ></textarea>
                            </div>
                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>
                <section className="mb-3">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3068906628323!2d-74.01004671684753!3d40.71126016391745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fe30a7b447%3A0x8a0a55f0a5fd1f1f!2sPace%20University!5e0!3m2!1sen!2snp!4v1754324249014!5m2!1sen!2snp" 
                    width="100%" 
                    height="450" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </section>
                {/* footer section start  */}
               <Footer />
            </section>
        </>   
    );
};