import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect, NavLink, Link} from 'react-router-dom'
import moment from 'moment'
import {deleteRecipe} from '../../store/actions/recipeAction'


const RecipeDetails = (props) => {

    const {recipe, auth} = props;
    const id = props.match.params.id;
    console.log(recipe);
    if(!auth.uid) return <Redirect to='/signin' />  
   
    if (recipe) {
        return(
            <div className="container section recipe-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title red-text text-accent-2"><b>{recipe.title}</b> - ({recipe.cuisine}, {recipe.course}) </span>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Created by {recipe.authorFirstName} {recipe.authorLastName}</div>
                        <div>{moment(recipe.createdAt.toDate()).calendar()}</div>
                        {recipe.modifiedOn ? <div>Modified On {moment(recipe.modifiedOn.toDate()).calendar()}</div> : null}
                        
                    </div>
                    <div className="card-content">
                        <h5>Description: </h5>
                        <p>{recipe.description.split("\n").map((text, i) => i ? [<br/>, text] : text)}</p>
                        <br />                       
                        <p>Prep Time = {recipe.prepTimehrs}: {recipe.prepTimemins} | Cook Time = {recipe.cookTimehrs}: {recipe.cookTimemins} | Total Time = {recipe.totalTimehrs}: {recipe.totalTimemins} | Servings = {recipe.servings}</p>
                        <h5>Ingredients</h5>
                        <p>{recipe.ingredients.split("\n").map((text, i) => i ? [<br/>, text] : text)}</p>
                        <h5>Directions</h5>
                        <p>{recipe.directions.split("\n").map((text, i) => i ? [<br/>, text] : text)}</p>
                        <h5>Tips</h5>
                        <p>{recipe.tips.split("\n").map((text, i) => i ? [<br/>, text] : text)}</p>          
                        {/* <button className="right red accent-2 z-depth-0">Edit Recipe</button>    */}
                        <Link to={'/editRecipe/' + id}><button className="right btn red accent-2 z-depth-0">Edit Recipe</button></Link>
                        <br /><br />                      
                        <button className="right red accent-2 z-depth-0" onClick={props.deleteRecipe}>Delete Recipe</button>
                    </div>                    
                    <br />                
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center white">
                <p>Loading Recipe....</p>
                <NavLink to='/recipeDash'>Go to Dashboard</NavLink>
            </div>
        )
    }            
}

const mapStateToProps =(state, ownProps) => {
    const id = ownProps.match.params.id;
    const recipes = state.firestore.data.recipes;
    const recipe = recipes ? recipes[id] : null;
    
    return {
        recipe: recipe,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {  
    //const id = ownProps.match.params.id;  
    //console.log(id);
    return {
        deleteRecipe: () => dispatch(deleteRecipe(ownProps.match.params.id))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'recipes'}
    ])
)(RecipeDetails)