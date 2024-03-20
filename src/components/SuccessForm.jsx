import React from "react";
import styles from "./FormTwo.module.css";
import { useModal } from "../pages/walletPage";
import { NavLink } from "react-router-dom";

const SuccessForm = () => {
  const { selectedWallet, modalHandler } = useModal();

  return (
    <div className="flex flex-col items-center">
      <p>Invite friend through referral code below</p>
      <img src="" className="w-[100px] mb-[1rem]" />

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
