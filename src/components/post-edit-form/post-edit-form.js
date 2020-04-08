import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

export default class PostEditForm extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.label
        }
    }
    onValueChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    onApply = (e) => {
        const {text} = this.state;
        e.preventDefault();
        if ( !(text.trim() === '') ) {
            this.props.onEdit(this.props.id, text);        
        }
        this.props.onToogleOrCancelEdit();
    }

    onToogleOrCancelEdit = () => {
        this.setState({text: this.props.label});
        this.props.onToogleOrCancelEdit();
    }
    
      
    render() {
        let {editForm} = this.props;
        let editFormClasses = 'bottom-panel';
        if (!editForm) {
            editFormClasses +=' d-none';
        }
        if (editForm) {
            editFormClasses +=' d-flex';
        }

        return (
            <Form 
            className={editFormClasses}
            onSubmit={this.onApply}>
                <Input
                    type="text"
                    className="new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}/>
                <div className="btn-group">
                    <Button
                    type="submit"
                    outline color="secondary">Apply
                    </Button>
                    <Button
                    type="button"
                    color="info"
                    onClick={this.onToogleOrCancelEdit}>Cancel
                    </Button>
                </div>
            </Form>
        )
    }     
}