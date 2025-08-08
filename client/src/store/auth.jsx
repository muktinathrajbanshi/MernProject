import { useContext, useEffect, useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");

    const storeTokenInLS = (serverToken) => {
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !! token;
    console.log("isLoggedIN", isLoggedIn);
    

    // tackling the logout functionality 

    const LogoutUser = () => {
        setToken("");
        return localStorage.removeItem("token");
    };

    // JWTAUTHENTICATION - to get the currently loggedIN user data

    const userAuthentication = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method:"GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if(response.ok){
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);
            }
        } catch (error) {
            console.log("Error fetching user data");  
        }
    }

    useEffect(() => {
        userAuthentication();
    }, []);

    return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user }}>
        {children}
    </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if(!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};