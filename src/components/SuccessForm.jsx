import React from "react";
import styles from "./FormTwo.module.css";
import { useModal } from "../pages/walletPage";
import { NavLink } from "react-router-dom";

const SuccessForm = ({ selectedNetwork }) => {
  const { modalHandler } = useModal();

  return (
    <div className="flex flex-col items-center">
      <p className="text-[0.8rem] text-center">
        Invite friend through referral code below
      </p>

      <p>Share</p>

      <p className="text-[0.7rem] font-bold my-[0.7rem]">
        {selectedNetwork.address}
      </p>

      <h2 className={`${styles.successTitle}`}>Wallet registered succefully</h2>

      <button className={`${styles.btn} max-w-[350px] `} onClick={modalHandler}>
        Close
      </button>

      <button className={`${styles.btnTransparent} max-w-[350px] `}>
        <NavLink to="/">Home</NavLink>
      </button>
    </div>
  );
};

export default SuccessForm;
