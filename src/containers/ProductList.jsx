import React, { useEffect, useState } from 'react';
import { ProductItem } from '@components/ProductItem';
import axios from "axios";
import '@styles/ProductList.scss';

const API = "https://api.escuelajs.co/api/v1/products";
	
export const ProductList = () => {

	const [products, setProducts] = useState([]);

	useEffect(async() => {
		const response = await axios(API);
		setProducts(response.data);
	}, []);
	
	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem />
				))}
			</div>
		</section>
	);
}