import React from 'react';
import {comments} from './commentData'

// define App component
function App(){
    // map over comments array
    comments.map(comment => {
        <Card commentObject = {comment}/>
    });
};