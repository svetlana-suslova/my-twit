import React, { Component } from 'react';
import './post-status-filter.sass';

export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Favourite'}
        ]
    }
    render() {
        const buttons = this.buttons.map(({name, label}) => {
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const activeClass = active ? 'btn-info' : 'btn-outline-secondary'
            return (
                <button 
                type="button" 
                key={name} 
                className={`btn ${activeClass}`}
                onClick={() => onFilterSelect(name)}>{label}</button>
            )
        })
        return (
            <div className="btn-group">
             {buttons}
            </div>
        )
    }
}