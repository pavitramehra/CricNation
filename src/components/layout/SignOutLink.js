import React from 'react'
import {NavLink} from 'react-router-dom'
const SignOutLink=()=>{
    return(
        <ul>
            <li><NavLink to='/Signup'>Signup</NavLink></li>
            <li><NavLink to='/Signin'>SignIn</NavLink></li>
            
        </ul>
        
    )
}

export default SignOutLink