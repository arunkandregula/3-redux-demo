/*
Deprecated same as FilterLink
*/
import classNames from 'classnames';
import React from 'react';
import './Link.css';

const Link = ({isActive, children, onClick})=>{
	debugger;
    const classList= classNames({
        'active': isActive,
        'Link': true
    });
    return <a href="#" className={classList} onClick={onClick}>{children}</a>;
}

export default Link;