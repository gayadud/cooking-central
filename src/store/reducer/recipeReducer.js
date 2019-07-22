
const initState = {
    recipes: [ 
        {id: 1, title: 'Lemon Chicken Tenders', description: 'This a great recipe that my family loves. It is fairly quick and easy, and you more than likely dont have to go out and buy any new ingredients!'},
        {id:2, title: 'Crunchy Chicken Fingers', description: 'Chicken fingers with crunchy chip coating. Great with bbq sauce. My 3 year old helps crush the chips. Very easy to make!'},
        {id:3, title: 'Baked Chicken Nuggets', description: 'A real kid-pleaser! Adults will enjoy this recipe for a tasty appetizer, too! Serve warm with your favorite dipping sauces if desired.'}
    ]
}

const recipeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_RECIPE': 
        console.log("created recipe", action.recipe);
        return state;
        case 'CREATE_RECIPE_ERROR': 
        console.log("create recipe error", action.err);
        return state;
        case 'DELETE_RECIPE': 
        console.log("deleted recipe", action.recipe);
        return state;
        case 'DELETE_RECIPE_ERROR': 
        console.log("delete recipe error", action.err);
        return state;
        case 'UPDATE_RECIPE': 
        console.log("updated recipe", action.recipe);
        return state;
        case 'UPDATE_RECIPE_ERROR': 
        console.log("update recipe error", action.err);
        return state;
        default: 
        return state;
    }
    
}

export default recipeReducer
