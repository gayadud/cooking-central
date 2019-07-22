import React, { Component } from 'react'
import M from "materialize-css";
import {connect} from 'react-redux'
import {Redirect, NavLink} from 'react-router-dom'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {updateRecipe} from '../../store/actions/recipeAction'


class EditRecipe extends Component {
    componentDidMount() {
        // Auto initialize all the things!
        M.AutoInit();
    }

    state= {
        title: '',
        cuisine : '',
        newCuisine: '',
        course: '',
        newCourse: '',
        description: '',
        prepTimehrs: '',
        prepTimemins: '',
        cookTimehrs: '',
        cookTimemins: '',
        totalTimehrs: '',
        totalTimemins: '',
        servings: '',
        ingredients: '',    
        directions: '',
        tips: ''  
    }  

    handleChange = (e) => {
        //console.log(e.target.id);
        this.setState({
            [e.target.id]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        const docId=this.props.match.params.id;
        this.props.updateRecipe(this.state, docId)
        this.props.history.push('/recipeDash')
    }

    render() {
        const {recipe, auth} = this.props;
        console.log(recipe);
        if(!auth.uid) return <Redirect to='/signin' /> 
                
        if (recipe) {
            return (
                <div className="container">
                    
                    <form className="lime lighten-4" onSubmit={this.handleSubmit}>
                        <label htmlfor="recipeTitle">Recipe Title</label>
                        <input type="text" id="title" defaultValue={recipe.title || ''} onChange={this.handleChange}/>
                   
                        <div className="row">
                        <label htmlFor="chooseCuisine">Choose Cuisine</label>
                        <div className="input-field col m5">
                            <select id="cuisine" value={recipe.cuisine || ''} onChange={this.handleChange}>                                   
                                <option>Indian</option>
                                <option>Chinese</option>
                                <option>American</option>
                                <option>French</option>
                                <option>African</option>
                                <option>Mexican</option>
                                <option>Thai</option>
                                <option>Italian</option>
                                <option>Other-Add new cuisine</option>
                            </select>
                            
                        </div>

                                    
                        <div className="input-field col m3 offset-m2">
                            <label htmlFor="newCuisine">Add New Cuisine</label>
                            <input type="text" id="newCuisine" onChange={this.handleChange} defaultValue={recipe.newCuisine || ''} />                            
                        </div> 
                        
                    </div>

                    <div className="row">
                        <label htmlFor="course">Choose Course</label>
                        <div className="input-field col m4">
                            <select id="course" defaultValue={recipe.course || ''} onChange={this.handleChange}>                                       
                                <option>Appetizers</option>
                                <option>Snacks</option>
                            </select>
                        </div>

                        <div className="input-field col m3 offset-m2">
                            <label htmlFor="newCourse">Add New Course</label>
                            <input type="text" id="newCourse" onChange={this.handleChange} defaultValue={recipe.newCourse || ''} />
                           
                        </div>  
                        
                    </div>                  

                    <div className="row">
                        <label htmlFor="description">Description</label>
                        <textarea className="materialize-textarea" defaultValue={recipe.description || ''} id="description" onChange={this.handleChange}/>
                    </div>
                    

                    <div className="row">
                        <label htmlFor="prepTime">Prep-time</label>
                        <div className="input-field col m2">
                            <input type="number" min="0" id="prepTimehrs" defaultValue={recipe.prepTimehrs || ''} onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="prepunitOfTime">Hrs</label>
                        </div>

                        <div className="input-field col m2">
                            <input type="number" min="0" id="prepTimemins" defaultValue={recipe.prepTimemins || ''} onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="prepunitOfTime">Mins</label>
                        </div>
                    </div>

                    <div className="row">
                        <label htmlFor="cookTime">Cook-time</label>
                        <div className="input-field col m2">
                            <input type="number" min="0" id="cookTimehrs" defaultValue={recipe.cookTimehrs || ''} onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="cookunitOfTime">Hrs</label>
                        </div>

                        <div className="input-field col m2">
                            <input type="number" min="0" id="cookTimemins" defaultValue={recipe.cookTimemins || ''} onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="cookunitOfTime">Mins</label>
                        </div>
                    </div>

                    <div className="row">
                        <label htmlFor="totalTime">Total-time</label>
                        <div className="input-field col m2">
                            <input type="number" min="0" id="totalTimehrs" defaultValue={recipe.totalTimehrs || ''} onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="totalunitOfTime">Hrs</label>
                        </div>

                        <div className="input-field col m2">
                            <input type="number" min="0" id="totalTimemins" defaultValue={recipe.totalTimemins || ''} onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="totalunitOfTime">Mins</label>
                        </div>
                    </div>
                        
                    <div className="row">
                        <div className="input-field col m4">
                            <label htmlFor="noOfServings">No. of Servings</label>
                            <input type="number" min="0" id="servings" defaultValue={recipe.servings || ''} onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="row">
                            <label htmlFor="ingredients">Ingredients (enter each ingredient in a new line)</label>
                            <textarea className="materialize-textarea" id="ingredients" defaultValue={recipe.ingredients || ''} onChange={this.handleChange}/>                                                                                      
                    </div>
                    
                    <div className="row">
                        <label htmlFor="directions">Directions</label>
                        <textarea className="materialize-textarea" id="directions" defaultValue={recipe.directions || ''} onChange={this.handleChange}/>
                    </div>

                    <div className="row">
                        <label htmlFor="tips">Tips</label>
                        <textarea className="materialize-textarea" id="tips" defaultValue={recipe.tips || ''} onChange={this.handleChange}/>
                    </div>

                    <div className="row">
                        <div className="input-field col m3">
                            <button className="btn red accent-2 z-depth-0">Submit</button>
                        </div>

                        <div className="input-field col m3">
                        <NavLink to ='/recipeDash' className="right btn red accent-2 z-depth-0">Cancel</NavLink>
                        </div>
                    </div>
                    

                </form>

           </div>
        )
        }else {
            return (
                <div className="container center white">
                    <p>Loading Recipe....</p>
                    <NavLink to='/recipeDash'>Go to Dashboard</NavLink>
                </div>
            )}
    }
    
}

const mapStateToProps =(state, ownProps) => {
    const id = ownProps.match.params.id;
    const recipes = state.firestore.data.recipes;
    const recipe = recipes ? recipes[id] : null;
    console.log(id);
    return {
        recipe: recipe,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {       
        updateRecipe: (recipe, docId) => dispatch(updateRecipe(recipe, docId))
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {collection: 'recipes'}
    ])
)(EditRecipe)

