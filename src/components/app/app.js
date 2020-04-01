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
            ],
            term: ''
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
    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter ( (item) => {
            return item.label.indexOf(term) > -1
        });
    }
    onUpdateSearch = (term) => {
        this.setState({term})
    } 
       
    render() {
        const {data, term} = this.state; 
        const liked = data.filter(item  => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.searchPost(data, term);
        return (
            <div className="app">
                <AppHeader
                liked={liked}
                allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={visiblePosts}
                onDelete={this.deleteItem}
                onToogleImportant={this.onToogleImportant}
                onToogleLiked={this.onToogleLiked}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </div>      
        )
    }    
}