import React from 'react'
import ProductCard from '../../components/ProductCard'
import './cart.css'
const Cart = () => {
  const imageUrl='https://picsum.photos/200/300';

  return (
    <div>
      <div className="cart-container flex-row flex-justify-content-center">
		<div className="product-list-container flex-column">
			<ProductCard cartActionBtnContainer={false} imagePath={imageUrl} variant="horizontal" badgeText={'New Arrival'} title = {'One ear 100 headphones black'} price={1890} actualPrice={2099} discountPercentage={10} />
			<ProductCard cartActionBtnContainer={false} imagePath={imageUrl} variant="horizontal" badgeText={'New Arrival'} title = {'One ear 100 headphones black'} price={1890} actualPrice={2099} discountPercentage={10} />
			<ProductCard cartActionBtnContainer={false} imagePath={imageUrl} variant="horizontal" badgeText={'New Arrival'} title = {'One ear 100 headphones black'} price={1890} actualPrice={2099} discountPercentage={10} />
			<ProductCard cartActionBtnContainer={false} imagePath={imageUrl} variant="horizontal" badgeText={'New Arrival'} title = {'One ear 100 headphones black'} price={1890} actualPrice={2099} discountPercentage={10} />

		</div>
		<div className="total-ticket-container flex-column">
			<div className="card-text-container flex-column ">
				<div className="border-bottom">
					<p className="typo-md text-bold-weight margin-bottom-10">
						Price Details
					</p>
				</div>
				
				<div className="text-container-description flex-column border-bottom">
					<div className="flex-row ticket-container-item margin-top-bottom-10">
						<p className="typo-md text-light-weight margin-top-bottom-10">
							Price (2 items)
						</p>
						<p className="typo-md text-light-weight margin-top-bottom-10">
							₹ 4198
						</p>
					</div>
					<div className="flex-row ticket-container-item margin-top-bottom-10">
						<p className="typo-md text-light-weight margin-top-bottom-10">
							Discount
						</p>
						<p className="typo-md text-light-weight margin-top-bottom-10">
							-₹ 418
						</p>
					</div>
					<div className="flex-row ticket-container-item margin-top-bottom-10">
						<p className="typo-md text-light-weight margin-top-bottom-10">
							Delivery charges
						</p>
						<p className="typo-md text-light-weight margin-top-bottom-10">
							₹ 499
						</p>
					</div>
				</div>
				<div className="flex-row ticket-container-item margin-top-bottom-10 border-bottom">
					<p className="typo-md text-bold-weight margin-top-bottom-10">
						TOTAL AMOUNT
					</p>
					<p className="typo-md text-bold-weight margin-top-bottom-10">
						₹ 4279
					</p>
				</div>
				<p className="typo-sm text-light-weight margin-top-bottom-10">
					You will save ₹ 418 on this order.
				</p>
				<div className="card-action-btn-container margin-top-16">
					<button className="btn btn-filled-primary text-bold-weight">
						PLACE ORDER
					</button>
				</div>
			</div>
      </div>

		</div>
    </div>
  )
}

export default Cart
