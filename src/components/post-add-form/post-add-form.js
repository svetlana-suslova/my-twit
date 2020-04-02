import React, {Component} from 'react';
import { Button, Form, Input } from 'reactstrap';
import './post-add-form.sass';

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    onSubmit = (e) => {
        const {text} = this.state;
        e.preventDefault();
        if ( !(text.trim() === '') ) {
            this.props.onAdd(text);  
        }
        this.setState({
            text: ''
        })  
    }

    render() {
        return (
            <Form 
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}>
                <Input
                    type="text"
                    placeholder="What are your thoughts?"
                    className="new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}/>
                <Button
                outline color="secondary">Add
                </Button>
            </Form>
            )
    }   
}