import React from 'react';

import './post-add-form.sass';

const PostAddForm = () => {
    return (
    <form className="bottom-panel d-flex">
        <input
            type="text"
            placeholder="What are your thoughts?"
            className="form-control new-post-label"
        />
        <button
            type="submit"
            className="btn btn-outline-secondary">
            Add</button>
    </form>
    ) 
}

export default PostAddForm;