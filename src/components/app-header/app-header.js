import React from 'react';

import './app-header.sass';

const AppHeader = ({liked, allPosts}) => {
    return (
    <div className="app-header d-flex">
        <h1>Svetlana Suslova</h1>
        <h2>{allPosts} post, liked {liked}</h2>
    </div>
    ) 
}

export default AppHeader;