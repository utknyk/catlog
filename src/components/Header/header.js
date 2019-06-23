import React from 'react';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = ({headerMenu,cart}) => {
	return (
		<div className='header shadow'>
			
			<div className='d-flex'>
				<div id='logo'>LOGO</div>
				{ headerMenu ?
					<div id='headerMenu'>
						<p className='m-2 cursor'>CATEGORY</p>
						<p className='m-2 cursor'>BRANDS</p>
					</div>
					:
					<div/>
				}
			</div>

			<nav className="navbar navbar-light">
			  <form className="form-inline">
			    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
			    <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
			  </form>
			</nav>

			{cart ?
				<div/>
				:
				<div style={{marginTop: '10px'}}><button className="btn btn-success my-2 my-sm-0" type="submit">ADD PRODUCT</button></div>
			}

			<div className='d-flex'>
				{ cart ?
					<FontAwesomeIcon icon={faShoppingCart} style={{cursor: 'pointer', width: '1.5rem', height: '1.5rem'}} className='mt-4 ml-5'/>
					:
					<div/>
				}

				<div className='mt-3 ml-5'>
				  <button type="button" className="btn dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				    <FontAwesomeIcon icon={faUser} style={{width: '1.5rem', height: '1.5rem'}}/>
				  </button>
				  <div className="dropdown-menu">
				    <p className="dropdown-item">My Profile</p>
				    <p className="dropdown-item">My Orders</p>
				    <p className="dropdown-item">My Complaints</p>
				    <div className="dropdown-divider"></div>
				    <p className="dropdown-item">Sign Out</p>
				  </div>
				</div>
			</div>
		</div>
		);
}

export default Header;