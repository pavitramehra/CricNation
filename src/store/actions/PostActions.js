export const createPosts=(post)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        const profile=getState().firebase.profile;
        const authorId=getState().firebase.auth.uid;
        firestore.collection('Posts').add({
            ...post,
            authfirstname:profile.firstName,
            authlastname:profile.lastName,
            authorID:authorId,
            createdAt:new Date()
        }).then(()=>{
            dispatch({
                type:'create_posts',
                post
            })
        }).catch((err)=>{
            dispatch({type:'CREATE_POST_ERR',err})
        })
       
    }
}

export const addComment=(data)=>{
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore=getFirestore();
        const profile=getState().firebase.profile;
        const authorId=getState().firebase.auth.uid;
        return firestore.collection('Posts').doc(data.id).collection('comment').add({
            comment:data.comment,
            authfirstname:profile.firstName,
            authlastname:profile.lastName,
            authorID:authorId,
            createdAt:new Date()

        }).then(()=>{
            dispatch({
                type:'COMMENT_ADDED'
            })
        }).catch((err)=>{
            dispatch({type:'COMMENT_ERR',err})
        })
    }
}