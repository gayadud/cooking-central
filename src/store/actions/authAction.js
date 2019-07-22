import { storage } from '../../config/firebaseConfig';

export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {    //because we are using thunk we can return a function here
        //make async call to database
        const firebase = getFirebase();   //initializes the database
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({type: 'LOGIN_SUCCESS'});
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err});
        })        
    }
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {    //because we are using thunk we can return a function here
        //make async call to database
        const firebase = getFirebase();   //initializes the database
        firebase.auth().signOut().then(() => {
            dispatch({type: 'SIGNOUT_SUCCESS'});
        })
    }
};

export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {    //because we are using thunk we can return a function here
        //make async call to database
        const firebase = getFirebase();   //initializes the database
        const firestore = getFirestore();   //initializes the firestore
        //const storage = firebase.storage();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
                newUser.password
            ).then((resp) => {
            storage.ref('images').child(newUser.profilePicture.name).put(newUser.profilePicture)
            .then(()=> {
                storage.ref('images').child(newUser.profilePicture.name).getDownloadURL().then((url) => {
                return firestore.collection('users').doc(resp.user.uid).set({
                firstName:newUser.firstName,
                lastName:newUser.lastName,
                initials:newUser.firstName[0] + newUser.lastName[0],
                pictureURL: url
            })
        })
    })
    }).then(() => {
            dispatch({type: 'SIGNUP_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'SIGNUP_ERROR', err});
        })
        
    }
};

export const deleteProfile = () => {
    return(dispatch, getState, {getFirebase, getFirestore}) => {        //because we are using thunk we can return a function here
        //make async call to the database
        
        //initialize firestore
        const firestore = getFirestore();
        const firebase = getFirebase();
        
        const uid = firebase.auth().currentUser
        console.log(uid)
        
        uid.delete().then(()=> {
            dispatch({type: 'DELETE_PROFILE'});
        }).catch((err) => {
            dispatch({type: 'DELETE_PROFILE_ERROR', err});
        })        
    }
}

export const updateProfile = (user) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {    //because we are using thunk we can return a function here
        //make async call to database
        const firebase = getFirebase();   //initializes the database
        const firestore = getFirestore();   //initializes the firestore
        //const storage = firebase.storage();
        const uid = firebase.auth().currentUser
        console.log(uid)
        
        if(user.profilePicture) {
            storage.ref('images').child(user.profilePicture.name).put(user.profilePicture)
        .then(()=> {
            storage.ref('images').child(user.profilePicture.name).getDownloadURL().then((url) => (
                uid.updateProfile({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    initials:user.firstName[0] + user.lastName[0],
                    pictureURL: url
                })
            )
        ).then(()=> {
            dispatch({type: 'UPDATE_PROFILE'});
        }).catch((err) => {
            dispatch({type: 'UPDATE_PROFILE_ERROR', err});
        })  
    })
    } else {
        uid.updateProfile({
            firstName: user.firstName,
            lastName: user.lastName,
            initials:user.firstName[0] + user.lastName[0],           
        }).then(()=> {
            dispatch({type: 'UPDATE_PROFILE'});
        }).catch((err) => {
            dispatch({type: 'UPDATE_PROFILE_ERROR', err});
        })  
    }
}};