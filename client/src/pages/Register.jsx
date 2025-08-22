import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Register = () => {

        const [user, setUser] = useState({
            username:"",
            email:"",
            phone:"",
            password: "",
        });


        const navigate = useNavigate();
        const { storeTokenInLS, API } = useAuth();

        const URL = `${API}/api/auth/register`;
        
        // handling the input values 
        const handleInput = (e) => {
            console.log(e);
            let name = e.target.name;
            let value = e.target.value;

            setUser({
                ...user,
                [name]:value,
            });
        };

        // handling the form submission 
        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log(user);
            try {
                const response = await fetch(URL, {
                    method:"POST",
                    headers: {
                        "Content-Type": "application/json",   
                    },
                    body: JSON.stringify(user),
                });

               
                const res_data = await response.json();
                console.log("res from server", res_data.extraDetails);

                if (response.ok) {
                    
                    // stored the token in localhost 
                    storeTokenInLS(res_data.token); 
                    
                    setUser({
                        username:"",
                        email:"",
                        phone:"",
                        password: "",
                        });
                        toast.success("Registration successful");
                        navigate("/");
                }else {
                  toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                  }
             } catch (error) {
                console.log("register ", error); 
            }
           
        };

    return (
        <>
        <section>
            <main>
                <div className="section section-ragis">
                    <div className="container grid">
                        {/* let's tackle registration form  */}
                        <div className="ragis-form">
                            <h1 className="ragis-heading mb-3">Create Account</h1>
                            <p className="ragis-para">Sign up to get started</p>
                            <br />

                            <form onSubmit={handleSubmit} className="form-submit-input">
                                <div className="regis-input">
                                    <label htmlFor="username" />
                                    <ion-icon name="person-outline"></ion-icon>
                                    <input 
                                    type="text" 
                                    name="username" 
                                    className="ragis-user"
                                    placeholder="Username"
                                    id="username"
                                    required
                                    autoComplete="off"
                                    value={user.username}
                                    onChange={handleInput}
                                    />
                                </div>
                                <div className="ragis-input">
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
                                <div className="ragis-input">
                                    <label htmlFor="phone" />
                                    <ion-icon name="call-outline"></ion-icon>
                                    <input 
                                    type="number" 
                                    name="phone" 
                                    className="ragis-phone"
                                    placeholder="Phone"
                                    id="phone"
                                    required
                                    autoComplete="off"
                                     value={user.phone}
                                    onChange={handleInput}
                                    />
                                </div>
                                 <div className="ragis-input">
                                    <label htmlFor="password" />
                                    <ion-icon name="lock-closed-outline" />
                                    <input 
                                    type="text" 
                                    name="password" 
                                    className="login-password"
                                    placeholder="password"
                                    id="password"
                                    required
                                    autoComplete="off"
                                     value={user.password}
                                    onChange={handleInput}
                                    />
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit">Sign Up</button>
                                <br />
                                 <p className="ragis-para navigate">Already have an account?<NavLink to="/login"><span>Sign In</span></NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
        </>
    );
   };