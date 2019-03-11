import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./index.css";

class Sidebar extends Component {

    constructor(props) {
        super(props);
    }



    render() {
        const token = localStorage.getItem('accessToken');
        return(
            <div className={ token ? "sidebar" : "none" }>
                <ul>
                    <Link to="/">Home</Link>
                </ul>
            </div>
        )
    }
}


export default Sidebar;
