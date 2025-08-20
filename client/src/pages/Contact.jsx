import { useState } from "react";
import { useAuth } from "../store/auth";
import { StarsBackground } from "../components/Stars-Background";

const defaultContactFormData = {
    username: "",
    email: "",
    message: "",
};

export const Contact = () => {

    const[contact, setContact] = useState(defaultContactFormData);

    const [userData, setUserData] = useState(true);

    const { user, API } = useAuth();

    if(userData && user) {
        setContact({
            username:user.username,
            email:user.email,
            message:"",
        });

        setUserData(false);
    }

    // lets tackle our handleInput 
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ... contact,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${API}/api/form/contact`, {
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(contact),
            });

            if(response.ok) {
                setContact(defaultContactFormData);
                const data = await response.json();
                console.log(data);
                alert("Message send successfully");
                
            }
        } catch (error) {
            console.log(error);
        }
    };


    return(
        <>
            <section className="section section-contact">
                <div className="container">
                    <h2 className="common-heading">contact us</h2>
                </div>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3070720014725!2d-74.00775072438424!3d40.71125617139376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258fe30a7b447%3A0x8a0a55f0a5fd1f1f!2sPace%20University!5e0!3m2!1sen!2snp!4v1753250830337!5m2!1sen!2snp"
                    width="100%" 
                    height="350" 
                    style={ {border:0} }
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                
                {/* contact page main  */}
                <div className="section-contact-main contact-container">
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="username">Username</label>
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
                                    <label htmlFor="email">Email</label>
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
                                <label htmlFor="message">Message</label>
                                <textarea 
                                name="message" 
                                id="message" 
                                autoComplete="off"
                                placeholder="Write your message"
                                value={contact.message}
                                onChange={handleInput}
                                required
                                cols="30" 
                                rows="10"
                                ></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="btn">send message</button>
                                </div>
                              
                            </form>
                </div>
            </section>
        </>   
    );
};