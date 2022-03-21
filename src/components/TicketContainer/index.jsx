import React from "react";

const TicketContainer = () => {
  return (
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
  );
};

export default TicketContainer;
