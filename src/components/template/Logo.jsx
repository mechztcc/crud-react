import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo-cod3r.png'
import './Logo.css';

export default props =>
	<aside className="logo">
		<Link to="/" className="logo">
			<img src={logo} alt=""/>
		</Link>
	</aside>