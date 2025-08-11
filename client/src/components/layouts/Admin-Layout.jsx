import { NavLink, Outlet } from "react-router-dom";
import { FaUser, FaRegListAlt, FaHome } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

export const AdminLayout = () => {
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li><NavLink to="/admin/users"><FaUser /> users </NavLink></li>
                            <li><NavLink to="/admin/contacts"><FaMessage /> contacts </NavLink></li>
                            <li><NavLink to="/admin/contacts"><FaRegListAlt /> services </NavLink></li>
                            <li><NavLink to="/admin/contacts"><FaHome /> home </NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <Outlet />
        </>
    );
};