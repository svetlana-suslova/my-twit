import React, {Component} from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/serach-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.sass';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
                data : [
                0,
                ['Going to learn React.', 'fhgj'],
                'ttt',
                null,
                {label: 'Going to learn React.', important: true, id: 'fhgj'},
                {label: 'That is so good!', important: false, id: 'aisl'},
                {label: 'No boredom during the quarantine...', important: false, id: 'uiuij'}
            ]
        }
    }

    filteredData = () => {
        this.setState( ({data}) => {
            let elements = data.filter((item) => {
                return  typeof item === 'object' && !Array.isArray(item) && item != null;    
             });
             return {
                 data: elements
             }
        });
        console.log(this.state.data);
    }

    deleteItem = (id) => {
        this.filteredData();
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
            return {
                data: newArr
            }
        });
    } 
       
    render() {
        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data}
                onDelete={this.deleteItem}/>
                <PostAddForm/>
            </div>      
        )
    }    
}