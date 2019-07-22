import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/actions/authAction'

class SignUp extends Component {
    state={
        email: '',
        password: '',
        firstName:'',
        lastName:'',
        profilePicture: null,        
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
       console.log(this.state);
       this.props.signUp(this.state)       
        }
    handleFile = (e) => {
        console.log(e.target.files[0])
        const profilePicture = e.target.files[0];
        this.setState(() => ({profilePicture}));
        }
              
    render() {
        const {auth, authError} = this.props;
        if(auth.uid) return <Redirect to='/recipeDash' />
        
        return (
            <div className="container">
                <form className="lime lighten-4" onSubmit={this.handleSubmit}>
                    <h5 className="red-text text-accent-2">Sign Up</h5>

                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" id="firstName" onChange={this.handleChange}/>
                    </div>

                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id="lastName" onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Profile Picture</label>
                        <input type="file" onChange={this.handleFile}/>                                                
                    </div>
                                        
                    <div className="input-field">
                        <button className="btn red accent-2 z-depth-0">SignUp</button>
                        <div className="red-text center">
                            {authError ? <p>{authError}</p> : null}
                        </div>
                    </div>

                </form>
                
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDisptachToProps)(SignUp)
