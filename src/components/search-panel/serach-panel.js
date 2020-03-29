import React from 'react';
import { Input } from 'reactstrap';
import './search-panel.sass';

const SearchPanel = () => {
    return (
    <Input 
        className="search-input"
        type="text"
        placeholder="Search"
    />
    ) 
}

export default SearchPanel;