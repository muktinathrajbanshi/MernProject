import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


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
            <section className="section section-login">
                
                    <div className="container grid grid-two-cols">
                        {/* let's tackle login form  */}
                        <div className="login-form">
                            <h1 className="main-heading mb-3">Welcome Back</h1>
                            <p>Login to continue</p>
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
                
        </section>
        </>
    );
};