import React from 'react';
import Header from '../Header/header';
import CardList from '../CardList/cardlist';
import SideNav from '../SideNav/sideNav';

const Home = () => {
	return (
			<div>
				<Header headerMenu={true} cart={true}/>
				<div className='d-flex p-3 bg-light' style={{marginTop: '60px'}}>
					<SideNav/>
					<CardList/>
				</div>
			</div>
		);
}

export default Home;