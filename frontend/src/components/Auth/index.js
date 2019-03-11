import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/user';
import { Link } from 'react-router-dom';
import "./index.css";

class Auth extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        if ( email && password ) {
            const data = {
                email: email,
                password: password
            };
            this.props.dispatch(loginUser(this.props.history, data));
        }
    }

    render() {
        const { email, password } = this.state;
        return(
            <div className="loginPage">
                <h2>Sign in</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleChange}
                               id="email"
                               type="text"
                               className="form-control"
                               placeholder="your email"
                               value={email}/>
                    </div>
                    <div className="form-group">
                        <input onChange={this.handleChange}
                               type="password"
                               id="password"
                               placeholder="your password"
                               className="form-control"
                               value={password}/>
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btn btn-primary"/>
                    </div>
                    <Link to='/registr'>Sign up</Link>
                </form>
            </div>
        )
    }
}


export default connect()(Auth);
