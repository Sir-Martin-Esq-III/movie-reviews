import React from 'react';
import './sidebar.css'

//import MenuIcon from '@material-ui/icons/Menu';

function Sidebar() {
    return (
        <div className="sidebar">
        <ul className="sidebar-list">
            <li className="sidebar-items">Search</li>
            <li className="sidebar-items">logout</li>
        </ul>           
        </div>
    );
}

export default Sidebar;