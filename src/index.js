import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import firebase from 'firebase/app'
import reportWebVitals from './reportWebVitals';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {getFirebase,  ReactReduxFirebaseProvider} from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore';
import firebaseConfig from '../src/components/config/fbConfig'
const rrfconfig={
  userProfile:'users',
  useFirestoreForProfile:true
}
const store= createStore(rootReducer,compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
        reduxFirestore(firebase,firebaseConfig),
        
       

  )
);
const rrfProps = {
  firebase,
  config: rrfconfig,firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};


ReactDOM.render(
  
        <React.StrictMode>
        <Provider store={store}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <App />
          </ReactReduxFirebaseProvider>
        </Provider>
        
        </React.StrictMode>,
        document.getElementById('root')
 
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
