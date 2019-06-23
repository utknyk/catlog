import React from 'react';
import Header from '../Header/header';
import CardList from '../CardList/cardlist';

const Admin = () => {
	return (
		<div>
			<Header/>
			<div style={{marginTop: '60px'}}><CardList user='admin'/></div>
		</div>
		);
}

export default Admin;