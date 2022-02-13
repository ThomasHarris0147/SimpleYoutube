import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // array of components
    const videoItems = props.videos.map(
        (video) => {
            return <VideoListItem 
            onVideoSelect={props.onVideoSelect}
            key={video.etag} 
            video={video} 
            />
        }
    );
    return(
    // using bootstrap (className=...) 
    // for detailing
    <ul className="col-md-4 list-group">
        { // react will recognize the array
        // and individually render it
        videoItems}
    </ul>
    );
};

export default VideoList;