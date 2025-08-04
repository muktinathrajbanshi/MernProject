import { useState } from "react";

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
                            cols="30" 
                            autoComplete="off"
                            value={contact.message}
                            onChange={handleInput}
                            required
                            rows="10"
                            ></textarea>
                            </div>
                            <div>
                                <button type="submit">submit</button>
                            </div>
                        </form>
                    </section>
                </div>
            </section>
        </>   
    );
};