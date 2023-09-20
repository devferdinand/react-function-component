import React from 'react';
import {comments} from './commentData';
import Card from './Card';

// define App component
function App(){
    // map over comments array
    return (
        <div>
            {
                comments.map(comment => {
                    <Card commentObject = {comment}/>
                })
            }
        </div>
    );
};

export default App;