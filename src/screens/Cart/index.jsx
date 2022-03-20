import React from 'react'
import ProductCard from '../../components/ProductCard'
import './cart.css'
const Cart = () => {
  const imageUrl='https://picsum.photos/200/300';

  return (
    <div>
      <div class="cart-container flex-row flex-justify-content-center">
		<div class="product-list-container flex-column">
			<ProductCard cartActionBtnContainer={true} imagePath={imageUrl} variant="horizontal" />

		</div>
		<div class="total-ticket-container flex-column">
			<div class="card-text-container flex-column ">
				<div class="border-bottom">
					<p class="typo-md text-bold-weight margin-bottom-10">
						Price Details
					</p>
				</div>
				
				<div class="text-container-description flex-column border-bottom">
					<div class="flex-row ticket-container-item margin-top-bottom-10">
						<p class="typo-md text-light-weight margin-top-bottom-10">
							Price (2 items)
						</p>
						<p class="typo-md text-light-weight margin-top-bottom-10">
							₹ 4198
						</p>
					</div>
					<div class="flex-row ticket-container-item margin-top-bottom-10">
						<p class="typo-md text-light-weight margin-top-bottom-10">
							Discount
						</p>
						<p class="typo-md text-light-weight margin-top-bottom-10">
							-₹ 418
						</p>
					</div>
					<div class="flex-row ticket-container-item margin-top-bottom-10">
						<p class="typo-md text-light-weight margin-top-bottom-10">
							Delivery charges
						</p>
						<p class="typo-md text-light-weight margin-top-bottom-10">
							₹ 499
						</p>
					</div>
				</div>
				<div class="flex-row ticket-container-item margin-top-bottom-10 border-bottom">
					<p class="typo-md text-bold-weight margin-top-bottom-10">
						TOTAL AMOUNT
					</p>
					<p class="typo-md text-bold-weight margin-top-bottom-10">
						₹ 4279
					</p>
				</div>
				<p class="typo-sm text-light-weight margin-top-bottom-10">
					You will save ₹ 418 on this order.
				</p>
				<div class="card-action-btn-container margin-top-16">
					<button class="btn btn-filled-primary text-bold-weight">
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
