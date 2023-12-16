import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createPosts} from '../../store/actions/PostActions'
//import avatar from '../../../public/images/avatar.jpg'
class Postbox extends Component{
    
        state={
            Discuss:''
        }
        handleChange=(e)=>{
            this.setState({
                [e.target.id]:e.target.value
            })
        }
        handlePost=(e)=>{
            e.preventDefault();
            this.props.createPosts(this.state)
        }
        render(){
            const {profile}=this.props
            return(
                    <div className="container">
                    <div className="post-box">
                        <div className="card box">
                            <ul className="collection">
                                <li className="collection-item avatar">
                                    <img src="/images/avatar.jpg" alt="" class="circle"/>
                                    <span class="title">{profile.firstName} {profile.lastName}</span>
                                    <p>Whats on your mind</p>
                                    <div className="input-field">
                                        <label htmlFor="Discuss">Discuss</label>
                                        <textarea id="Discuss" className="materialize-textarea" required onChange={this.handleChange}></textarea>
                                    </div>
                                    <div className="input-field">
                                        <button className="btn blue lighten-1" onClick={this.handlePost}>Post</button>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        }
        
            
       
    
}

const mapDispatchtoProps=(dispatch)=>{
    return{
        createPosts:(post)=>dispatch(createPosts(post))
    }

}
export default connect(null,mapDispatchtoProps)(Postbox)
