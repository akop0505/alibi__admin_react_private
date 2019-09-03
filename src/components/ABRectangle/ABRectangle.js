import React from 'react';
import './ABRectangle.css';

export const ABRectangle = (props) => {
    return (
    <div className={"rectangle d-inline-flex justify-content-center align-items-center"}>
        <span>{props.name}</span>
        <i className={'fa fa-circle 1x'}/>
    </div>)
}