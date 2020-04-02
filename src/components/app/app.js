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
            term: '',
            filter: 'all'
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

    onToogleOption = (id, option) => {  
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, [option]: !old[option]};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
            return {
                data: newArr
            }
        })
    }

    onToogleImportant = (id) => {
        this.onToogleOption(id, 'important');
    }

    onToogleLiked = (id) => {
        this.onToogleOption(id, 'like');
    }

    searchPost = (items, term) => {
        if (term.length === 0) {
            return items
        }
        return items.filter ( (item) => {
            return item.label.indexOf(term) > -1
        });
    }

    filterPost = (items, filter) => {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }    
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }
     
    onFilterSelect = (filter) => {
        this.setState({filter})
    } 
       
    render() {
        const {data, term, filter} = this.state; 
        const liked = data.filter(item  => item.like).length;
        const allPosts = data.length;
        let postsLabel = 'post';
        if (allPosts > 1) {
            postsLabel = 'posts';
        }
        const visiblePosts = this.filterPost( this.searchPost(data, term), filter );
        
        return (
            <div className="app">
                <AppHeader
                liked={liked}
                allPosts={allPosts} 
                postsLabel={postsLabel}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                    onUpdateSearch={this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter={filter}
                    onFilterSelect={this.onFilterSelect}/>
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