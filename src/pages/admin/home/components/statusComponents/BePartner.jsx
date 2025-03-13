import React, { useState } from "react";
import { toast } from "react-hot-toast";
import UrgentImage from "../../../../../assets/images/icons/Urgent 1.png";
import axiosInstance from "../../../../../services";

const BePartner = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const handleConfirmPriceChange = async () => {
    setIsLoading(true);

    try {
      const response = await axiosInstance.post(
        `/adminActivity/confirmSellingPrice?watch_id=${props?.item?.watch_details?.watch_id}`,
        {
          confirmed_price: props?.item?.watch_details?.confirmed_price ?? 9600,
        }
      );
      toast.success("Selling price confirmed successfully!");
    } catch (error) {
      toast.error("Failed to confirm selling price. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h3>
        Seller has selected 'Be partner with Estipal'. Confirm selling price to
        Seller:
        <input
          type="text"
          style={{ width: "130px", textAlign: "center" }}
          className={`text-center watch-desc-input ${
            props?.input_confirmed_price ? "not_changed" : ""
          }`}
          name="confirmed_price"
          id="confirmed_price"
          value={props?.input_confirmed_price}
        />{" "}
        {props?.item?.currency_unit}
      </h3>
      <h3>Status: {props?.item?.watch_status}</h3>
      <div className="select_box text-center mt-20">
        <div className="select_box_inner !max-sm:p-[10px]">
          <p className="flex max-sm:flex-col items-center justify-center gap-[10px] mb-[10px]">
            <span>
              <img
                src={UrgentImage}
                alt="Urgent"
                className="w-[40px] block mx-auto"
              />{" "}
            </span>
            <span className="pending_status">Pending Action:</span>
            <span>Confirmation is required</span>
          </p>
          <ul className="list-unstyled list-inline">
            <li
              id="confirmSellingPrice"
              name={props?.item?.watch_details?.watch_id}
              value={props?.item?.user1_id}
              className={props?.input_confirmed_price ? "inactiveLink" : ""}
            >
              <button
                className={`btn ${
                  props?.input_confirmed_price ? "dark_green" : "dark_yellow"
                }`}
                onClick={handleConfirmPriceChange}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Confirm Selling Price"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BePartner;
