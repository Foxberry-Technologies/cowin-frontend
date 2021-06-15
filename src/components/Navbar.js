import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import logo from '../setu1.png';

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="#">
                    <img src={logo} alt="logo" style={{ height: 55, width: 55 }} />
                </NavLink>
                <div>National Co-win Data</div>

                {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                        <ul className="navbar-nav ml-auto" style={{ marginRight: 30 }}>
                             <li className="nav-item active"> 
                                <NavLink className="nav-link" to="/">Home </NavLink>
                            </li> 
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/signIn">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/registration">Registration</NavLink>
                            </li>
                        </ul>
                    
                </div>
            </nav>
        </>
    )
}

export default Navbar;
