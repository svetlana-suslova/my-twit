import React from 'react';

import './app-header.sass';

const AppHeader = ({liked, allPosts, postsLabel}) => {
    return (
    <div className="app-header d-flex">
        <h1>Svetlana Suslova</h1>
        <h2>{allPosts} {postsLabel}, liked {liked}</h2>
    </div>
    ) 
}

export default AppHeader;