const initState={
    authError:null
}
const authReducer= (state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_ERR':
            console.log('login_error')
            return {
                ...state,
                authError:'login_failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login_success')
            return{
                ...state,
                authError:null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout_success');
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP_SUCCESS');
            return{
                ...state,
                authError:null
            }
        case 'SIGNUP_FAILED':
            console.log('Signup_error');
            return{
                ...state,
                authError:action.err.message
            }
        default:
            return state;
    }
    
}
export default authReducer