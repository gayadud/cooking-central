import React from 'react'
import {Link} from 'react-router-dom'
import SignInLink from './SignInLink';
import SideNav from './SideNav';
import SignOutLink from './SignOutLink'
import {connect} from 'react-redux'

const Navbar = (props) => {
    const {auth, profile} = props;
    const links = auth.uid ? <div><SignInLink profile={profile}/> <SideNav /></div> : <SignOutLink />;
    return (
        <nav className="nav-wrapper red accent-2">
            <div className="container">
                <Link to='/' className="brand-logo">COOKING CENTRAL<sub className="yellow-text">  A place to store all your recipes</sub></Link>
                
                {links}
                
                </div>
        </nav>
    )
}

const mapStateToProps = (state) => {
    console.log(state);
    return{
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
