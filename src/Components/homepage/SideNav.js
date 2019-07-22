import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import M from "materialize-css";


class SideNav extends Component {
    componentDidMount() {
        let elems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(elems, {inDuration: 300, outDuration: 225, hover: true});
    }
 
    render(){
        return (
            <div>
                <ul id="dropdown1" class="dropdown-content">
                    <li><NavLink to ="/recipeDash">Dashboard</NavLink></li>
                    <li><NavLink to ="/addRecipe">Add a Recipe</NavLink></li>
                   {/*  <li><NavLink to ="/createGroup">Create a Group</NavLink></li>
                    <li><NavLink to ="/inviteFriend">Invite a Friend</NavLink></li> */}
                </ul>
            </div>
        )
    }
    
}

export default SideNav
