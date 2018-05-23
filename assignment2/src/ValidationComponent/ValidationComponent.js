import React from 'react';

const validationField = (props ) => {
    var message;
    if(props.validation>5){
        console.log(props.length);
        message="string too long";
    }
    else{
        message="string too short";
    }

    return(
        <div className="inputfield">
            <p>{message}</p>
        </div>
    )
};

export default validationField;