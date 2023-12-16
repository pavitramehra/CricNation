import postReducer from './PostReducer'
import authReducer from './AuthReducer'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'
import {combineReducers} from 'redux'

const rootReducer= combineReducers({
    auth: authReducer,
    post: postReducer,
    firestore:firestoreReducer,
    firebase: firebaseReducer
});
export default rootReducer        