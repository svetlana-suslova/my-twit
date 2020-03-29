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
                {label: 'Going to learn React.', important: true, id: 1},
                {label: 'That is so good!', important: false, id: 2},
                {label: 'No boredom during the quarantine...', important: false, id: 3}
            ]
        };
        this.maxId = 4;
        let elements = this.state.data.filter((item) => {
            return  typeof item === 'object' && !Array.isArray(item) && item != null;    
         });
         this.state.data = elements; 

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
    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
           const newArr = [...data, newItem];
           return {
               data: newArr
           }
       })
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
                <PostAddForm
                onAdd={this.addItem}/>
            </div>      
        )
    }    
}