import React from 'react';
import Constants from '../../constants/Constants';
import {Link} from 'react-router';
import './Footer.css';
import classNames from 'classnames';

const activeStyle = {
	textDecoration: 'none',
	color: 'black'
};

const classList= classNames({
	'Link': true
});

const Footer = () => (
    <div className="Footer">
        Show: <Link to="/" className={classList} activeStyle={activeStyle}>All</Link>
        <Link to="/active" className={classList} activeStyle={activeStyle}>Active</Link>
        <Link to="/completed" className={classList} activeStyle={activeStyle}>Completed</Link>
    </div>
)

export default Footer;