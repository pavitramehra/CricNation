const initState={
    post:[
        {id:'1',title:'new players match', comments:'haha nice'},
        {id:'2',title:'who will win today', comments:'haha nice'},
        {id:'3',title:'well it was good', comments:'haha nice'}
    ]
}
const postReducer= (state=initState,action)=>{
    switch(action.type)
    {
        case 'create_posts':
            console.log('created post',action.post);
            return state;
        case 'CREATE_POST_ERR':
            console.log('create post error',action.err);
            return state;
        case 'COMMENT_ADDED':
            console.log('comment_added');
            return state;
        case 'COMMENT_ERR':
            console.log('comment_err',action.err);
            return state;
        default:
            return state;
    }
    
}
export default postReducer