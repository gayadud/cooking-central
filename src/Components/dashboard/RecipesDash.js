import React, { Component } from 'react'
import RecipeList from '../Recipes/RecipeList'
import FriendsList from '../Friends/FriendsList'
import PeopleList from '../Groups/PeopleList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect, NavLink} from 'react-router-dom'

class RecipesDash extends Component {
    render() {
       //console.log(this.props);
       const {recipe, auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        return (
            
            <div className="RecipeList-container">
                <div className="row">
                    <div className="col s12 m6 lime lighten-4">
                        <h4 className="center red-text text-accent-2">My Recipes</h4>
                        <NavLink to ='/addRecipe' className="right btn red accent-2 z-depth-0">Add New Recipe</NavLink>
                        <br />
                        <RecipeList recipes={recipe}/>
                    </div>  {/* this div is for project for small screens give this div 12 columns and for medium screens give this div 6 columns i.e. half the space of the screen */}
                    {/* <div className="col s12 m2 offset-m1 lime lighten-4">
                        <FriendsList />
                    </div> */}    {/* this div is for notifications with one column less to have gap between the two divs */}
                    {/* <div className="col s12 m2 offset-m1 lime lighten-4">
                        <PeopleList />
                    </div>  */}   {/* this div is for notifications with one column less to have gap between the two divs */}
                </div>
            </div>
        )
    }
}

const mapStateToProps =(state) => {
    console.log(state);
    return {
        recipe: state.firestore.ordered.recipes,
        auth: state.firebase.auth
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect((props) => {
        if (!props.auth.uid) return []
        return [
            {collection: 'recipes',
            where: [
                ['authorID', '==', props.auth.uid]
            ]
        }
        ]
    } )
)(RecipesDash)