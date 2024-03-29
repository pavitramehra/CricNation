import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router';
import {signIn} from '../../store/actions/AuthActions'

class SignIn extends Component {
    state={
        email:'',
        password:''
    }
    
    handleChange=(e)=>{
      
        this.setState({
            [e.target.id]:e.target.value
        });
    };
    handleSubmit=(event)=>{
       event.preventDefault();
       this.props.signIn(this.state); 
    };
    render() {
        // console.log(this.props)
        const {authError ,auth}=this.props
        if(auth.uid) return <Redirect to="/"/>
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">SignIn</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange}/>
                        </div>
                        <div className= "input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn blue lighten-1">SignIn</button>
                            <div className="red-text center">
                                    {authError ? <p>{authError}</p>:null}
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

const mapStatetoProps=(state)=>{
    //console.log(state)
    return {
        authError:state.auth.authError,
        auth:state.firebase.auth
    }
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        signIn:(creds)=>dispatch(signIn(creds))
    }
}
export default connect(mapStatetoProps ,mapDispatchtoProps)(SignIn)
