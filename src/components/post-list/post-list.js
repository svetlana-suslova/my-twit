import React from 'react';
import PostListItem from '../post-list-item/post-list-item'
import { ListGroup } from 'reactstrap';
import './post-list.sass';

const PostList = ({posts, onDelete, onToogleImportant, onToogleLiked, onEdit, onToogleEdit}) => {
     
     let elements = posts.map((item) => {
         const {id, ...itemProps} = item;
         return (
             <li key={id} className="list-group-item">
                 <PostListItem
                 {...itemProps}
                 label={itemProps.label} onEdit={onEdit} id={id}
                 onDelete={ () => onDelete(id) }
                 onToogleImportant={ () => onToogleImportant(id) }
                 onToogleLiked={ () => onToogleLiked(id)}
                 onToogleEdit={ () => onToogleEdit(id)}/>
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