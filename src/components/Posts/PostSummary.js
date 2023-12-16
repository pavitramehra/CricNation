import React,{Component} from 'react'
import {connect} from 'react-redux'
import {addComment} from '../../store/actions/PostActions'
import Comment from './Comments'
import moment from 'moment'
class PostSummary extends Component{
    state={
        comment:[],
        id:''
    }
    
    handleChange=(id,e)=>{
        this.setState({
            [e.target.id]: e.target.value,
            id:id
        
        })
    }
    handleComment=(e)=>{
        e.preventDefault();
        this.props.addComment(this.state);
        //console.log(this.state)
    }
    render(){
        const context=this.props
        //console.log(moment(context.post.createdAt.toDate()).calendar())
        const {profile}=this.props
        //console.log(context)
        /*const comments=comment.length ? (
            team1.map(player=>{    

               return(
                    <li class="collection-item avatar">
                        <div>
                            <img src={`https://www.cricapi.com/playerpic/${player.pid}.jpg`} onError={this.addDefaultSrc} alt="" class="circle"/>
                            <Link to={"/player/"+player.pid}><a href="#!" class="secondary-content"><i class="material-icons">send</i></a> </Link>
                            <span class="title">{player.name}</span>
                        </div>
                        
            
                    </li> 
                
                )
            })
        ):(<div>
        <li >Squad not available</li></div>);*/
        return (
            <div>
              <div className="card post-summary">
                            <ul className="collection">
                                <li class="collection-item avatar">
                                    <img src="/images/avatar.jpg" alt="" class="circle"/>
                                    <span >{context.post.authfirstname} {context.post.authlastname}  .{moment(context.post.createdAt.toDate()).startOf(new Date()).fromNow()}</span>
                                    <p>{context.post.Discuss}</p>
                                </li>
                                <li className="collection-item">Comments</li>
                                <Comment profile={profile} id={context.post.id}/>
                              
                            </ul>
                           
                               
                            
                    <div className="card-content">
                       

                            <div className="input-field">
                                        <label htmlFor="comment">comment</label>
                                        <textarea id="comment" className="materialize-textarea" required onChange={(e)=>{this.handleChange(context.post.id,e)}}></textarea>
                                        <button className="btn blue lighten-1" onClick={this.handleComment}>comment</button>
                            </div>       
                    </div>
                </div>  
            </div>
        )
    }
   
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addComment:(data)=>dispatch(addComment(data))
    }

}
export default connect(null,mapDispatchToProps)(PostSummary);
