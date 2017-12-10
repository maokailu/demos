import React from 'react';
import "./arrow.scss";
export default function Arrow(props){
    return (
        <i className={props.arrow_direction_type}></i>
    );
}