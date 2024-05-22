// Parent.js

import React from 'react';
import { Link } from 'react-router-dom';
import './parent.css';

function Parent() {
    return (
        <nav className="NavContainer">
            <ul className="NavList">
                <li className="NavItem"><Link to="/parent/home1" className="NavLink">Home</Link></li>
                <li className="NavItem"><Link to="/parent/school" className="NavLink">Schools</Link></li>
                <li className="NavItem"><Link to="/parent/college" className="NavLink">Colleges</Link></li>
                <li className="NavItem"><Link to="/parent/university" className="NavLink">Universities</Link></li>
                <li className="NavItem"><Link to="/awards-certifications" className="NavLink">Awards & Certifications</Link></li>
                <li className="NavItem"><Link to="/student/dashboard/review" className="NavLink">Reviews & Ratings</Link></li>
                <li className="NavItem"><Link to="/student/dashboard/contact-us" className="NavLink">Contact Us</Link></li>
                <li className="NavItem"><Link to="/career" className="NavLink">Career</Link></li>
                <li className="NavItem"><Link to="/parent/enquiry" className="NavLink">Support</Link></li>
            </ul>
        </nav>
    );
}

export default Parent;
