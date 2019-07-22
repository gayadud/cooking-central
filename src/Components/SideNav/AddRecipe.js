import React, { Component } from 'react'
import M from "materialize-css";
import {createRecipe} from '../../store/actions/recipeAction'
import {connect} from 'react-redux'
import {Redirect, NavLink} from 'react-router-dom'


class AddRecipe extends Component {
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
        this.props.createRecipe(this.state)
        this.props.history.push('/recipeDash')
    }

   
    render() {
        const {auth} = this.props;
        if(!auth.uid) return <Redirect to='/signin' />

        return (
           <div className="container">
               <form className="lime lighten-4" onSubmit={this.handleSubmit}>
                   <label for="recipeTitle">Recipe Title</label>
                   <input type="text" id="title" onChange={this.handleChange}/>
                   
                    <div className="row">
                        <label htmlFor="chooseCuisine">Choose Cuisine</label>
                        <div className="input-field col m5">
                            <select id="cuisine" onChange={this.handleChange}>   
                                <option value="" disabled selected></option>
                                <option>African</option> <option>Algerian</option> <option>American</option>
                                <option>Belgian</option> <option>Brazilian</option> <option>British</option>
                                <option>Cajun</option> <option>Canadian</option> <option>Chinese</option>
                                <option>Cuban</option> <option>Egyptian</option> <option>French</option>
                                <option>German</option> <option>Greek</option> <option>Haitian</option>
                                <option>Hawaiian</option> <option>Indian</option> <option>Irish</option>                                                                                        
                                <option>Italian</option> <option>Japanese</option> <option>Jewish</option>
                                <option>Kenyan</option> <option>Korean</option> <option>Latvian</option>
                                <option>Libyan</option> <option>Mexican</option> <option>Mormon</option>
                                <option>Nigerian</option> <option>Peruvian</option> <option>Polish</option>
                                <option>Portuguese</option> <option>Russian</option> <option>Salvadorian</option>
                                <option>Scottish</option> <option>Swedish</option> <option>Tahitian</option>
                                <option>Tibetian</option> <option>Turkish</option> <option>Thai</option>  
                                <option>Welsh</option> 
                                <option>Other-Add new cuisine</option>
                            </select>
                            
                        </div>
                                              
                        <div className="input-field col m3 offset-m2">
                            <label htmlFor="newCuisine">Add New Cuisine</label>
                            <input type="text" id="newCuisine" onChange={this.handleChange} value={this.state.newCuisine} />
                            {/* <button onClick={this.handleAdd} >Add</button> */}
                        </div> 
                        
                    </div>

                    <div className="row">
                        <label htmlFor="course">Choose Course</label>
                        <div className="input-field col m4">
                            <select id="course" onChange={this.handleChange}>   
                                <option value="" disabled selected></option>    
                                <option>Appetizers</option> <option>Baked Goods</option> <option>Breads</option>
                                <option>Cereals</option> <option>Condiments</option> <option>Confectionary</option>
                                <option>Dairy Products</option> <option>Deserts</option> <option>Dips, pastes and spreads</option>
                                <option>Dried Foods</option> <option>Eggs</option> <option>Fast Food</option>
                                <option>Fermented Foods</option> <option>Halal Foods</option> <option>Kosher Foods</option>
                                <option>Meat</option> <option>Noodles</option> <option>Pies</option>
                                <option>Salads</option> <option>Sandwiches</option> <option>Sauces</option>  
                                <option>Seafood</option> <option>Snacks</option> <option>Soups</option>
                                <option>Stews</option>
                            </select>
                        </div>

                        <div className="input-field col m3 offset-m2">
                            <label htmlFor="newCourse">Add New Course</label>
                            <input type="text" id="newCourse" onChange={this.handleChange} value={this.state.newCourse} />
                            {/* <button>Add</button> */}
                        </div>  
                        
                    </div>                  

                    <div className="row">
                        <label htmlFor="description">Description</label>
                        <textarea className="materialize-textarea" id="description" onChange={this.handleChange}/>
                    </div>
                    

                    <div className="row">
                        <label htmlFor="prepTime">Prep-time</label>
                        <div className="input-field col m2">
                            <input type="number" min="0" id="prepTimehrs" onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="prepunitOfTime">Hrs</label>
                        </div>

                        <div className="input-field col m2">
                            <input type="number" min="0" id="prepTimemins" onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="prepunitOfTime">Mins</label>
                        </div>
                    </div>

                    <div className="row">
                        <label htmlFor="cookTime">Cook-time</label>
                        <div className="input-field col m2">
                            <input type="number" min="0" id="cookTimehrs" onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="cookunitOfTime">Hrs</label>
                        </div>

                        <div className="input-field col m2">
                            <input type="number" min="0" id="cookTimemins" onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="cookunitOfTime">Mins</label>
                        </div>
                    </div>

                    <div className="row">
                        <label htmlFor="totalTime">Total-time</label>
                        <div className="input-field col m2">
                            <input type="number" min="0" id="totalTimehrs" onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="totalunitOfTime">Hrs</label>
                        </div>

                        <div className="input-field col m2">
                            <input type="number" min="0" id="totalTimemins" onChange={this.handleChange} />
                        </div>

                        <div className="input-field col m2">
                            <label htmlFor="totalunitOfTime">Mins</label>
                        </div>
                    </div>
                        
                    <div className="row">
                        <div className="input-field col m4">
                            <label htmlFor="noOfServings">No. of Servings</label>
                            <input type="number" min="0" id="servings" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="row">
                            <label htmlFor="ingredients">Ingredients (enter each ingredient in a new line)</label>
                            <textarea className="materialize-textarea" id="ingredients" onChange={this.handleChange}/>                                                                                      
                    </div>
                    
                    <div className="row">
                        <label htmlFor="directions">Directions</label>
                        <textarea className="materialize-textarea" id="directions" onChange={this.handleChange}/>
                    </div>

                    <div className="row">
                        <label htmlFor="tips">Tips</label>
                        <textarea className="materialize-textarea" id="tips" onChange={this.handleChange}/>
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
        
    }
    
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRecipe: (recipe) => dispatch(createRecipe(recipe))
    }
}

const mapStateToProps =(state) => {
    return {
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)

