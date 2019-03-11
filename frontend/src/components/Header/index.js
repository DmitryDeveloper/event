import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/user';
import "./index.css";

class Header extends Component {

    constructor(props) {
        super(props);
    }

    handleLogout = () => {
        this.props.dispatch(logoutUser());
    };

    render() {
        const { isAuthenticated } = this.props.user;
        return (
            <header>
                <div className="exit">
                    {
                        isAuthenticated && <Link to='/login' onClick={this.handleLogout}>Exit</Link>
                    }
                </div>
            </header>
        );
    }
}

let mapStateToProps = state => ({
    user: state.auth
});

export default connect(mapStateToProps)(Header);
