import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authAction'


const SignInLink = (props) => {
    return (
        <ul className="right">
         <li><a onClick={props.signOut}>Log Out</a></li>
         <li><NavLink to ='/profile' className='btn btn-floating blue lighten-3'><img class="responsive-img" src={props.profile.pictureURL} alt="Uploaded Images" /></NavLink></li>
         <li><a class="dropdown-trigger" href='/recipesDash' data-target="dropdown1">{props.profile.initials}<i class="material-icons right">arrow_drop_down</i></a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignInLink)
