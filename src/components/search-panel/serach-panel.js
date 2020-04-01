import React, {Component} from 'react';
import { Input } from 'reactstrap';
import './search-panel.sass';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }
    
    render() {
        return (
            <Input 
                className="search-input"
                type="text"
                placeholder="Search"
                onChange={this.onUpdateSearch}
            />
            )
    } 
}