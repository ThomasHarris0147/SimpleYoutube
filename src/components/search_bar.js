import React, { Component } from 'react';

class SearchBar extends Component {
    // class based components have states
    constructor(props){
        super(props);
        // can use any state name, term like searchterm            
        this.state = { term: '' };
    }
    // required render function for Component
    render() {
        return (
            <div className='search-bar'>
                <input 
                value={this.state.term}
                // setState restarts the JSX component
                onChange={(event) => this.onInputChange(event.target.value)}  />
            </div>
        );
    }

    // Event-Handler
    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar; // we get SearchBar when
// import search_bar.js