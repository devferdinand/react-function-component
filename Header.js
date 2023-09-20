import { func } from 'prop-types';
import React from 'react';

// define Header component
function Header(props){
    return (
        <div>
            <img src={props.profileImg}/>
            <h1>{props.username}</h1>
        </div>
    );
};

export default Header;