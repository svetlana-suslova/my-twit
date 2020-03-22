import React from 'react';
import PostListItem from '../post-list-item/post-list-item'

import './post-list.css';

const PostList = ({posts}) => {
    return (
    <ul className="app-list list-group">
        <PostListItem label={posts[0].label} important={posts[0].important}/>
        <PostListItem label={posts[1].label} important={posts[1].important}/>
        <PostListItem label={posts[2].label} important={posts[2].important}/>
    </ul>
    ) 
}

export default PostList;