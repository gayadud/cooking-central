export const createRecipe = (recipe) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {        //because we are using thunk we can return a function here
        //make async call to the database
        
        //initialize firestore
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authoruid = getState().firebase.auth.uid;
        //access the collection in the firestore and add the document
        firestore.collection('recipes').add({
            ...recipe,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorID: authoruid,
            createdAt: new Date(),
            modifiedOn: new Date()
        }).then(()=> {
            dispatch({type: 'CREATE_RECIPE', recipe});
        }).catch((err) => {
            dispatch({type: 'CREATE_RECIPE_ERROR', err});
        })


        
    }
}


export const deleteRecipe = (id) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {        //because we are using thunk we can return a function here
        //make async call to the database
        
        //initialize firestore
        const firestore = getFirestore();
        
        //access the collection in the firestore and delete the document
        firestore.collection('recipes').doc(id).delete().then(()=> {
            dispatch({type: 'DELETE_RECIPE'});
        }).catch((err) => {
            dispatch({type: 'DELETE_RECIPE_ERROR', err});
        })


        
    }
}

export const updateRecipe = (recipe, docId) => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {        //because we are using thunk we can return a function here
        //make async call to the database
        
        //initialize firestore
        const firestore = getFirestore();        
        //access the collection in the firestore and add the document
        firestore.collection('recipes').doc(docId).update({
            ...recipe,            
           modifiedOn: new Date()
        }).then(()=> {
            dispatch({type: 'UPDATE_RECIPE', recipe});
        }).catch((err) => {
            dispatch({type: 'UPDATE_RECIPE_ERROR', err});
        })


        
    }
}