import React, { useContext } from 'react';
import { OrderItem } from '@components/OrderItem';
import { AppContext } from "@context/AppContext";
import '@styles/MyOrder.scss';
import arrowIcon from "@icons/flechita.svg";

export const MyOrder = () => {

	const { state } = useContext(AppContext);

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrowIcon} alt="arrow" />
				<p className="title">My order</p>
			</div>

			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}

				<div className="order">
					<p><span>Total</span></p>
					<p>${state.total}</p>
				</div>
                
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}