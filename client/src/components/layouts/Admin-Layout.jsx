import { NavLink, Outlet, Navigate } from "react-router-dom";
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../../store/auth";

export const AdminLayout = () => {
    const { user, isLoading } = useAuth();
    console.log("admin layout", user);

    if (isLoading) {
        return <h1>Loading ...</h1>;
    }

    if(!user.isAdmin) {
        return <Navigate to="/" />;
    }
    
    return (
        <>
            <header>
                <section className="container">
                    <nav className="admin-section">
                        <ul>
                            <li><NavLink to="/admin/users"><FaUser /> users </NavLink></li>
                            <li><NavLink to="/admin/contacts"><FaMessage /> contacts </NavLink></li>
                            <li><NavLink to="/admin/contacts"><FaRegListAlt /> services </NavLink></li>
                            <li><NavLink to="/admin/contacts"><FaHome /> home </NavLink></li>
                        </ul>
                    </nav>
                </section>
            </header>
            <Outlet />
        </>
    );
};