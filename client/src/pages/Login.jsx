import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { StarsBackground } from "../components/Stars-Background";


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
    
    const {storeTokenInLS, API} = useAuth();

    const URL = `${API}/api/auth/login`;

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
            

            const res_data = await response.json();

            if (response.ok) {
                // alert("Login Successful");
                storeTokenInLS(res_data.token); 
                setUser({
                    email:"",
                    password:"",
                });
                toast.success("Login successful");
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                console.log("invalid credentials");
                
            }
        } catch (error) {
            console.log(error);
            
        } 

    };

    return (
        <>
            <StarsBackground />
            <section className="section section-login">
                    <div className="container grid">
                        {/* let's tackle login form  */}
                        <div className="login-form">
                            <h1 className="login-heading mb-3">Welcome Back</h1>
                            <p className="login-para">Login to continue</p>
                            <br />

                            <form onSubmit={handleSubmit} className="form-submit-input">
                                <div className="login-input">
                                    <label htmlFor="email" />
                                    <ion-icon name="mail-outline" />
                                    <input 
                                    type="email" 
                                    name="email"
                                    className="login-email" 
                                    placeholder="Email"
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInput}
                                    />
                                </div>
                                
                                 <div className="login-input">
                                    <label htmlFor="password" />
                                    <ion-icon name="lock-closed-outline" />
                                    <input 
                                    type="password" 
                                    name="password"
                                    className="login-password" 
                                    placeholder="Password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                     value={user.password}
                                    onChange={handleInput}
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit">Login</button>
                                <br />
                                <p className="login-para query">Forgot password?</p>
                                <p className="login-para navigate">Don't have an account?<NavLink to="/register"><span>Sign up</span></NavLink></p>
                            </form>
                        </div>
                    </div>
        </section>
        </>
    );
};