import React from "react";
import { menuImageUrl } from "../utils/constants/myUrls";

function MenuCard({ ele }) {
  return (
    <div className="card w-75 shadow-lg p-3 mb-5 bg-white rounded">
      <div className="row g-0">
        <div className="col-md-10">
          <div className="card-body">
            <h5 className="card-title">{ele.card?.info?.name}</h5>
            <p className="card-text fw-bold">
              {ele.card?.info?.price
                ? `₹ ${(ele.card.info.price / 100).toLocaleString()}`
                : "N/A"}
            </p>
            <div className="d-flex justify-content-start mt-3">
              <svg width="20" height="20" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="12" fill="green" />
                <path
                  d="M12 2.5l2.89 6.14 6.49.59-4.84 4.41 1.56 6.36-5.62-3.5-5.62 3.5 1.56-6.36-4.84-4.41 6.49-.59L12 2.5z"
                  fill="white"
                />
              </svg>
              <p className="card-text ms-2 text-success">
                <small class="text-body-secondary fw-bold">
                  {ele.card?.info?.ratings?.aggregatedRating?.rating}
                </small>
              </p>
            </div>
          </div>
          <p className="card-text ms-3">{ele.card?.info?.description}</p>
        </div>
        <div className="col-md-2">
          <img
            src={`${menuImageUrl}${ele.card?.info?.imageId}`}
            className="img-fluid rounded-start"
            alt="..."
          />
          <div className="d-flex justify-content-center p-2">
            <button
              type="button"
              class="btn btn-outline-success z-3 fw-bold rounded ps-5 pe-5"
            >
              ADD
            </button>
          </div>
          <p style={{ textAlign: "center" }} className="fw-light">
            Customisable
          </p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
