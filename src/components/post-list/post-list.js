import React from 'react';
import PostListItem from '../post-list-item/post-list-item'

import './post-list.css';

const PostList = ({posts}) => {

    let elements = posts.filter((item) => {
        return  typeof item === 'object' && !Array.isArray(item) && item != null;
         
     });
     elements = elements.map((item) => {
         const {id, ...itemProps} = item;
         return (
             <li key={id} className="list-group-item">
                 <PostListItem {...itemProps}/>
             </li>
         )
     });

    return (
    <ul className="app-list list-group">
        {elements}
    </ul>
    ) 
}

export default PostList;