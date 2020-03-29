import React from 'react';
import PostListItem from '../post-list-item/post-list-item'
import { ListGroup } from 'reactstrap';
import './post-list.sass';

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
    <ListGroup className="app-list">
        {elements}
    </ListGroup>
    ) 
}

export default PostList;