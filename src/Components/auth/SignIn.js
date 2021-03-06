import React, { Component } from 'react'
import {signIn} from '../../store/actions/authAction'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class SignIn extends Component {
    state={
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state);
        }
    render() {
        const {authError, auth} = this.props;
        if(auth.uid) return <Redirect to='/recipeDash' />

        return (
            <div className="container">
                <form className="lime lighten-4" onSubmit={this.handleSubmit}>
                    <h5 className="red-text text-accent-2">Sign In</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <button className="btn red accent-2 z-depth-0">Login</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>


                </form>
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

const mapStateToProps =(state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
