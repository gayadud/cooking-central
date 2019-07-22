
const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS': 
            console.log('Login Success');
                return {
                    ...state,
                    authError: null
                }
        case 'LOGIN_ERROR': 
            console.log('Login Error');
            return {
                ...state,
            authError: 'Login Failed'
            }
        case 'SIGNOUT_SUCCESS': 
            console.log('Signout_Success');
            return state;
        case 'SIGNUP_SUCCESS': 
            console.log('Signup_Success');
            return {
                ...state, 
                authError: null
            }
        case 'SIGNUP_ERROR': 
            console.log('Signup_Error');
            return {
                ...state,
                authError: action.err.message
            }
        case 'DELETE_PROFILE': 
            console.log('Profile Deleted');
            return state;
        case 'DELETE_PROFILE_ERROR': 
            console.log('Delete Profile Error');
            return {
                ...state,
                authError: action.err.message
            }
            
        default:
            return state;
    }
    
}

export default authReducer
