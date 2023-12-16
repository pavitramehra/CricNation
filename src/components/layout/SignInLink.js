import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/AuthActions'

const SignInLink=(props)=>{
    
    return(
        <ul>
            <li><NavLink to='/posts'>posts</NavLink></li>
            <li><a onClick={props.signOut}>Sign Out</a></li>
            <li><NavLink to='/Player'>Players</NavLink></li>
            <li><NavLink to='/Matches'>matches</NavLink></li>
            <li><NavLink to='/' className="btn btn-floating blue lighten-2">{props.profile.initials}</NavLink></li>
        </ul>
        
    )
}

const mapDispatchToProps=(dispatch)=>{
    return {
        signOut: ()=> dispatch(signOut())
    }

}
export default connect(null,mapDispatchToProps)(SignInLink)