import React from 'react';

const inputField = (props ) => {
    return(
        <div className="inputfield">
            <input type="text" onChange={props.changed} value={props.name}/>
            <p> count : {props.count}</p>

        </div>
    )
};

export default inputField;