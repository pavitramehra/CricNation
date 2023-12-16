import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createPosts} from '../../store/actions/PostActions'
class CreatePost extends Component {
    state={
        title:'',
        comment:''
    }
    
    handleChange=(e)=>{
      
        console.log(e)
        this.setState({
            [e.target.id]:e.target.value
        });
    };
    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.createPosts(this.state)
    };
    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Post</h5>
                        <div className="input-field">
                            <label htmlFor="title">title</label>
                            <input type="text" id="title" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="comment">Comment</label>
                            <textarea id="comment" className="materialize-textarea" onChange={this.handleChange}></textarea>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1">Post</button>
                        </div>

                    </form>
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
export default connect(null,mapDispatchtoProps)(CreatePost)
