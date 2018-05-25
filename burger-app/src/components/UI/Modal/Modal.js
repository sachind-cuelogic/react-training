import React from 'react';
import classes from './Modal.css'

const modal = (props) => (
    <div classNam={classes.Modal}>
        {props.children}
    </div>
);

export default modal;