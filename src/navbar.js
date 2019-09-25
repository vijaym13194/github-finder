import React from 'react';
import propTypes from 'prop-types';
import {Link} from 'react-router-dom';
 const Navbar = ({icon, title})=> {
	return (
			//<nav className='navbar bg-primary'>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<h1>
				<i className={icon}/>{title}</h1>
				 <div className="collapse navbar-collapse">
				<ul className="navbar-nav mr-auto">
				<li className="navbar-item">
				<Link to='/'> Home </Link>
				  </li>

				  <li className="navbar-item">
				 <Link to='/about'>About </Link>
				 </li>
				</ul>
				</div>
			</nav>
		);
	
}
 Navbar.defaultProps ={
	title:"Github Finder",
	icon:'fab fa-github'
}
Navbar.propsTypes = {
	title:"propsTypes.string.isRequired",
	icon:"propsTypes.string.isRequired",
}
export default Navbar;