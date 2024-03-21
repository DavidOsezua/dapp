import React from "react";
import styles from "./FormTwo.module.css";
import { useModal } from "../pages/walletPage";
import { NavLink } from "react-router-dom";

const SuccessForm = ({ selectedNetwork }) => {
  const { modalHandler } = useModal();

  return (
    <div className="flex flex-col items-center">
      <p className="text-[0.8rem] text-center my-[0.3rem]">
        The wallet address you deposited to serves as your referral code. Invite
        your friend and have them use your wallet address as the referral code
      </p>

      <h2 className={`${styles.successTitle} mt-[0.7rem]`}>
        Wallet registered succefully
      </h2>

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
