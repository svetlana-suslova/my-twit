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
                true,
                {label: 'Going to learn React.', important: true, like: false, id: 1},
                {label: 'That is so good!', important: false, like: false, id: 2},
                {label: 'No boredom during the quarantine...', important: false, like: false, id: 3}
            ]
        };
        this.maxId = 4;
        let elements = this.state.data.filter(item => typeof item === 'object' && !Array.isArray(item) && item != null);
        this.state.data = elements; 
    }
    deleteItem = (id) => {
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
    onToogleImportant = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }
    onToogleLiked = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    } 
       
    render() {
        const {data} = this.state; 
        const liked = data.filter(item  => item.like).length;
        const allPosts = data.length;
        return (
            <div className="app">
                <AppHeader
                liked={liked}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data}
                onDelete={this.deleteItem}
                onToogleImportant={this.onToogleImportant}
                onToogleLiked={this.onToogleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </div>      
        )
    }    
}