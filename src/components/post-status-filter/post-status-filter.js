import React from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.sass';

const PostStatusFilter = () => {
    return (
    <div className="btn-group">
        <Button color='info'>All</Button>
        <Button outline color='secondary'>Favourite</Button>
    </div>
    ) 
}

export default PostStatusFilter;