import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import './post-add-form.sass';

const PostAddForm = ({onAdd}) => {
    return (
    <div className="bottom-panel d-flex">
        <Input
            type="text"
            placeholder="What are your thoughts?"
            className="new-post-label"/>
        <Button
        onClick={() => onAdd('Hello')} 
        outline color="secondary">Add
        </Button>
    </div>
    ) 
}

export default PostAddForm;