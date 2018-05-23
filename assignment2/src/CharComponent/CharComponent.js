import React from 'react';
import './CharComponent.css'
const charList = (props ) => {


    // var char = [(props.char).split('')]
    // var charList1 = [(props.char).split('')].map((character) =>{
    //     <li>{character}</li>
    //     console.log(char);
    // });

    return(
        <div className="charcomp">

        <ul>
        {[(props.char).split('')].map((character, index) =>{
            return <li className="charClass">{character}</li>;
            })}
        </ul>
    </div>
    )
};

export default charList;