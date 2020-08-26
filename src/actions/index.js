
import _, { chain } from 'lodash'
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = ()=>async (dispatch,getState)=> {
await dispatch(fetchPosts());

// const userIds = _.uniq(_.map(getState().posts.data,'userId'));
// userIds.forEach(id=>dispatch(fetchUser(id)));

_.chain(getState().posts.data)
  .map('userId')
  .uniq()
  .forEach(id=>dispatch(fetchUser(id)))
  .value()

}

export const fetchPosts = ()=>{
 return async (dispatch)=>{
    const response = await jsonPlaceholder.get('/posts');

   dispatch({type:'FETCH_POSTS',payload:response})
 }
};

export const fetchUser =(id)=>{
  return async (dispatch)=>{
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({type:'FETCH_USER',payload:response})
  }
};


// export const fetchUser =(id)=>{
//   return  (dispatch)=>{
//     _fetchUser(id,dispatch);
//   }
// };

// const _fetchUser = _.memoize( async (id,dispatch)=>{
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({type:'FETCH_USER',payload:response})
// });