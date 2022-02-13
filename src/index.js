import ReactDOM, { render } from 'react-dom';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "YOUR API KEY";

// Create a new component. This component should
// produce some HTML using JSX.
class App extends Component {
    constructor(props){
        super(props)

        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('lalisa');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
             });
            // ES6 resolves {videos} as
            // this.setState({ videos: videos })
        });
    }

    render() {
        // takes a function that can only be called
        // once every 300 milliseconds
        const videoSearch = _.debounce(
           (term) => { this.videoSearch(term) }, 300 
        );

        return (
        <div>
            <SearchBar onSearchTermChange={videoSearch}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                // passing props, passing state values
                videos={this.state.videos}

                // this is now a property, that passes
                // a function that sets selectedVideo
                onVideoSelect={
                    selectedVideo => 
                        this.setState({selectedVideo})
                }
            />
        </div>
        );
    }
};

// Take this component's generated HTML and put
// it on the page (in the DOM)
ReactDOM.render(<App />, 
    document.querySelector('.container'));