import { useState } from "react";
import { Footer } from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;


        setUser({
            ... user,
            [name]: value,
        });

    };

    const navigate = useNavigate();
    
    const storeTokenInLS = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(URL, {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user),
            });

            console.log("login form", response);
            

            if (response.ok) {
                alert("Login Successful");
                 const res_data = await response.json();
                 storeTokenInLS(res_data.token); 
                setUser({
                    email:"",
                    password:"",
                });
                navigate("/");
            } else {
                alert("invalid credentials");
                console.log("invalid credentials");
                
            }
        } catch (error) {
            console.log(error);
            
        } 

    };

    return (
        <>
            <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img 
                            src="/images/login.svg" 
                            alt="login img"
                            width="500"
                            height="500"    
                            />
                        </div>
                        {/* let's tackle registration form  */}
                        <div className="registration-form">
                            <h1 className="main-heading mb-3">login form</h1>
                            <br />

                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="enter your email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                    />
                                </div>
                                
                                 <div>
                                    <label htmlFor="password">password</label>
                                    <input 
                                    type="password" 
                                    name="password" 
                                    placeholder="password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                     value={user.password}
                                    onChange={handleInput}
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit">Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    );
};