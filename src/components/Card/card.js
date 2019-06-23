import React from 'react';
import './card.css';

const Card = ({url,title,price,user}) => {
	return(
		<div className="card shadow">
		  <img className="p-2 card-img-top" src={url} alt="*"/>
		  <div className='p-1'>
		  	<h5>{title}</h5>
		  	<em>{price}</em>
		  </div>
		  {
		  	user === 'admin'
	  		?
	  		<div className='d-flex'>
		  		<div className='btn btn-info' style={{width: '50%', cursor: 'pointer'}}>UPDATE</div>
		  		<div className='btn btn-danger' style={{width: '50%', cursor: 'pointer'}}>DELETE</div>
  			</div>
	  		:
	  		<div className="btn addBtn" style={{cursor: 'pointer'}}>Add To Bag</div>
		  }
		</div>
		);
}

export default Card;