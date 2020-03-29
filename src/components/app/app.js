import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/serach-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.sass';

const App = () => {

    const data = [
        0,
        ['Going to learn React.', 'fhgj'],
        'ttt',
        null,
        {label: 'Going to learn React.', important: true, id: 'fhgj'},
        {label: 'That is so good!', important: false, id: 'aisl'},
        {label: 'No boredom during the quarantine...', important: false, id: 'uiuij'}
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
  
    ) 
}

export default App;