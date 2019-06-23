import React from 'react';
import Card from '../Card/card';

const url = 'https://images-na.ssl-images-amazon.com/images/I/61Cosqwv6VL._SX425_.jpg';
const price = 'Rs 2000';
const title = 'Hair Dryer';

const CardList = ({user}) => {
	let prods = [];
	for(let i=0;i<10;i++)
		prods.push(<div key={i} className='p-3'><Card user={user} url={url} title={title} price={price}/></div>);

	return (
		<div className='d-flex flex-wrap justify-content-center'>
			{prods}
		</div>
		);
}

export default CardList;;