import React from 'react';
import ModalWindow from '../modal-window/modal-window'; 
import './post-list-item.sass';

const PostListItem = ({label, onDelete, onToogleImportant, onToogleLiked, important, like, date, onToogleOrCancelEdit}) =>  {
    let postsClasses = 'app-list-item d-flex justify-content-between';
    
    if (important) {
        postsClasses +=' important';
    }
    if (like) {
        postsClasses +=' like';
    }

        return (
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
                        onClick={onToogleOrCancelEdit}>
                        <i className="fa fa-edit"></i>
                    </button>
                    <button 
                        type="button"
                        className="btn-trash btn-sm">
                        <ModalWindow onDelete={onDelete}></ModalWindow>
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
        )      
}

export default PostListItem;