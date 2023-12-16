import React, { Component } from 'react'
import PostList from './PostsList'
import { connect } from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import Postbox from './PostBox'
import { Redirect } from 'react-router'
class Dashboard extends Component{
    
    render()
    {
        
        //console.log(this.props);
        
        const {posts , auth ,profile }=this.props
        console.log(profile)
        if(!auth.uid)
            return <Redirect to='/signin' />
        return(
           
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <Postbox profile={profile}/>
                        <PostList posts={posts} profile={profile}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps=(state)=>{
    console.log(state)
    return{
        posts:state.firestore.ordered.Posts,
        auth:state.firebase.auth,
        profile:state.firebase.profile
    }

}
export default compose(
    connect(mapStatetoProps),
    firestoreConnect([
        {
            collection:'Posts',
            orderBy:['createdAt','desc']
        }
    ])
)(Dashboard);