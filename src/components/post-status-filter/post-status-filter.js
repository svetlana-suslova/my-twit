import React, { Component } from 'react';
import { Button } from 'reactstrap';
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
            return (
                <Button key={name} color='info'>{label}</Button>
            )
        })
        return (
            <div className="btn-group">
             {buttons}
            </div>
        )
    }
}