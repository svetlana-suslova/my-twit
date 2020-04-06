import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

import './post-list-item.sass';

export default class PostListItem extends Component  {
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
        this.props.onToogleEdit();
    }
    onCancel = () => {
        this.props.onToogleEdit();
    }
      
    render() {
        let {label, onDelete, onToogleImportant, 
            onToogleLiked, important, like, date, onToogleEdit, editForm} = this.props;
            let postsClasses = 'app-list-item d-flex justify-content-between';
            let editFormClasses = 'bottom-panel';
    
    if (important) {
        postsClasses +=' important';
    }
    if (like) {
        postsClasses +=' like';
    }
    if (!editForm) {
        editFormClasses +=' d-none';
    }
    if (editForm) {
        editFormClasses +=' d-flex';
    }

        return (
            <>
                <div className={postsClasses}>
                    <span 
                    className="app-list-item-label"
                    onClick={onToogleLiked}>
                        {label}
                    </span>
                    <div className="d-flex justify-content-center align-items-center">
                        <button 
                            type="button"
                            className="btn-star btn-sm"
                            onClick={onToogleImportant}>
                            <i className="fa fa-star"></i>
                        </button>
                        <button 
                            type="button"
                            className="btn-edit btn-sm"
                            onClick={onToogleEdit}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button 
                            type="button"
                            className="btn-trash btn-sm"
                            onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                        <i className="fa fa-heart"></i>
                        <span 
                        className="app-list-item-date">
                        {new Intl.DateTimeFormat('en-US', 
                        { hour: 'numeric', minute: 'numeric', hour12: false} )
                        .format(date)}
                        </span>
                    </div>
                </div>
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
                        onClick={this.onCancel}>Cancel
                        </Button>
                    </div>
                </Form>
            </>  
        )

    }   
    
}