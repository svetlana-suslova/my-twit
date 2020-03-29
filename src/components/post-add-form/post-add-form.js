import React from 'react';
import { Button, Form, Input } from 'reactstrap';
import './post-add-form.sass';

const PostAddForm = () => {
    return (
    <Form className="bottom-panel d-flex">
        <Input
            type="text"
            placeholder="What are your thoughts?"
            className="new-post-label"
        />
        <Button outline color="secondary">Add</Button>
    </Form>
    ) 
}

export default PostAddForm;