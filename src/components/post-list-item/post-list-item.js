import React, {Component} from 'react';

import './post-list-item.sass';

export default class PostListItem extends Component {
    render() {
        const {label, onDelete, onToogleImportant, onToogleLiked, important, like} = this.props;
        let classes = 'app-list-item d-flex justify-content-between';
        
        if (important) {
            classes +=' important';
        }
        if (like) {
            classes +=' like';
        }
        
        return (
            <div className={classes}>
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
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
             </div>
        )
    }
}