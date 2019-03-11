import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/actions/user';

class Registration extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: ""
        };
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password, firstName, lastName } = this.state;
        if ( email && password ) {
            const data = {
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName
            };
            const { history } = this.props;
            this.props.dispatch(register(data, history));
        }
    }

    render() {
        const { email, password, firstName, lastName } = this.state;
        return(
            <div className="loginPage">
                <h2>Registration</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First name</label> <br/>
                        <input onChange={this.handleChange}
                               id="firstName"
                               type="text"
                               className="form-control"
                               placeholder="your first name"
                               value={firstName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last name</label> <br/>
                        <input onChange={this.handleChange}
                               type="text"
                               id="lastName"
                               className="form-control"
                               placeholder="your last name"
                               value={lastName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">email</label> <br/>
                        <input onChange={this.handleChange}
                               id="email"
                               type="text"
                               className="form-control"
                               placeholder="your email"
                               value={email}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">password</label> <br/>
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
                    <Link to='/login'>Sign in</Link>
                </form>
            </div>
        )
    }
}


export default connect()(Registration);
