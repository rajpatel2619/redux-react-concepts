import React from 'react'
import PostList from './PostList'

const App =()=>{
return(
    <div className="ui container">
        <h3 style={{textAlign:'center'}}>Jsonplaceholder api </h3>
        <PostList />
    </div>
)
}

export default App;