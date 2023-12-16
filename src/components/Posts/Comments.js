import React,{Component} from 'react'
import db from '../config/fbConfig'
import moment from 'moment'
class Comment extends Component{
    state={
        comments:[]
    }
    componentDidMount()
    {
        const id=this.props.id;
        if(id)
        {
            
            return db.collection('Posts').doc(id).collection('comment').orderBy('createdAt','desc').onSnapshot(snapshot=>{
                var comment=[]
                snapshot.docs.map((doc)=>{
                 // console.log(doc.data())
                   comment.push(doc.data())
                  
                    
                })
                this.setState({
                    comments:comment
                })
                
               
            
            })
            
        }
    }
    render(){
        //console.log(this.state)
        const {auth}=this.props
        const commentlist=this.state.comments.length ? (
            this.state.comments.map(val=>{
                return(
                    <li class="collection-item avatar">
                        <img src="/images/avatar.jpg" alt="" class="circle"/>
                        <span>{val.authfirstname} {val.authlastname}  .  {moment(val.createdAt.toDate()).startOf(new Date()).fromNow()} </span>
                        <p>{val.comment}</p>
                    </li> 
            )
                
            })
        ) : (
                <div className="center">write a comment</div>
        )
        return (
            <div>
                {commentlist}
            </div>
                
           
        )
    }
}

export default Comment;