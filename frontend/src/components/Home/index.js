import React from 'react';
import Auth from './../Auth';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const token = localStorage.getItem('accessToken');
        if (!token) {
            this.props.history.push('/login');
        } else {
            return (
                <div className="home">
                    <h1>Home page</h1>
                </div>
            )
        }
    }
}

export default Home;
