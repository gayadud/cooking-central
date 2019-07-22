import React from 'react'
import moment from 'moment'

const RecipeSummary = ({recipe}) => {
    return (
        <div className="card z-depth-0 recipe-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{recipe.title}</span>
                <p className="recipeDescription">{recipe.description.split("\n").map((text, i) => i ? [<br/>, text] : text)}</p>
                <p className="grey-text">Created On {moment(recipe.createdAt.toDate()).calendar()}</p>
                {recipe.modifiedOn ? <p className="grey-text">Modified On {moment(recipe.modifiedOn.toDate()).calendar()}</p> : null}
            </div>
        </div>
    )
}

export default RecipeSummary
