import React from 'react';

const SideNav = () => {
	return (
		<div style={{minWidth: '250px'}}>
			<div className='p-3 shadow mt-3 mb-3 bg-white'>
				<h5>SORT BY:</h5>
				<ul className="list-group list-group-flush">
				  <li className="list-group-item">
				  	<input type="radio" name="sort"/> Name
				  </li>
				  <li className="list-group-item">
				  	<input type="radio" name="sort"/> Price: Low To High
		  		  </li>
				  <li className="list-group-item">
				  	<input type="radio" name="sort"/> Price: High To Low
				  </li>
				</ul>
			</div>

			<div className='p-3 shadow bg-white'>
				<h5>FILTER:</h5>
				<ul className="list-group list-group-flush">
				  	<li className="list-group-item" data-toggle="collapse" data-target="#brands">BRAND</li>
				  	<div id="brands" className="collapse p-2">
				  		<p><input type="checkbox" name="brand"/> Lakme</p>
					  	<p><input type="checkbox" name="brand"/> Mabelline New York</p>
					  	<p><input type="checkbox" name="brand"/> M.A.C</p>
					</div>
				  	<li className="list-group-item" data-toggle="collapse" data-target="#prices">PRICE</li>
				  	<div id="prices" className="collapse p-2">
					  <p><input type="checkbox" name="price"/> Rs. 0 - Rs. 499</p>
					  <p><input type="checkbox" name="price"/> Rs. 500 - Rs. 999</p>
					  <p><input type="checkbox" name="price"/> Rs. 1000 & Above</p>
					</div>
				  	<li className="list-group-item" data-toggle="collapse" data-target="#colors">COLOR</li>
				  	<div id="colors" className="collapse p-2">
					  <p><input type="checkbox" name="color"/> Red</p>
					  <p><input type="checkbox" name="color"/> Blue</p>
					  <p><input type="checkbox" name="color"/> Pink</p>
					</div>
				</ul>
			</div>
		</div>
		);
}

export default SideNav;