import React from 'react'
import {Redirect, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteProfile} from '../../store/actions/authAction'



const Profile = (props) => {
    const {auth, profile} = props;
    if(!auth.uid) return <Redirect to='/signin' />
    console.log(props);

    return (
        <div className="card z-depth-0 profile">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">Profile Details</span>
                <p>Name: {profile.firstName} {profile.lastName}</p>
                <p>Email: {auth.email}</p>
                <p>Profile Picture: <br /><img class="responsive-img" width="250" src={profile.pictureURL} alt="Uploaded Images" /></p>                                                     
                {/* <Link to='/editProfile'><button className="right btn red accent-2 z-depth-0">Edit Profile</button></Link> */}
                
                <button className="right red accent-2 z-depth-0" onClick={props.deleteProfile}>Delete Profile</button>                                                                                               
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {  
    console.log(ownProps);        
    return {
        deleteProfile: () => dispatch(deleteProfile())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile)
