import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {updateProfile} from '../../store/actions/authAction'

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
       this.props.updateProfile(this.state)       
        }
    handleFile = (e) => {
        console.log(e.target.files[0])
        const profilePicture = e.target.files[0];
        this.setState(() => ({profilePicture}));
        }
              
    render() {
        const {auth, profile} = this.props;
        if(!auth.uid) return <Redirect to='/signIn' />
        
        return (            
            <div className="container">
                <form className="lime lighten-4" onSubmit={this.handleSubmit}>
                    <h5 className="red-text text-accent-2">Edit Profile</h5>
                    <label htmlFor="firstName">First Name</label>
                    <div className="input-field">                        
                        <input type="text" id="firstName" defaultValue={profile.firstName || ''} onChange={this.handleChange}/>
                    </div>

                    <label htmlFor="lastName">Last Name</label>
                    <div className="input-field">                        
                        <input type="text" id="lastName" defaultValue={profile.lastName || ''} onChange={this.handleChange}/>
                    </div>

                    <div>
                        <label>Profile Picture</label>
                        <input type="file" defaultValue={profile.profilePicture || ''} onChange={this.handleFile}/>                                                
                    </div>
                                        
                    <div className="input-field">
                        <button className="btn red accent-2 z-depth-0">Submit</button>                       
                    </div>

                </form>
                
            </div>            
        )
    }
}

const mapStateToProps =(state) => {
    console.log(state);
    return {
        auth: state.firebase.auth,        
        profile: state.firebase.profile
    }
}

const mapDisptachToProps = (dispatch) => {
    return {
        updateProfile: (user) => dispatch(updateProfile(user))
    }
}
export default connect(mapStateToProps, mapDisptachToProps)(SignUp)
