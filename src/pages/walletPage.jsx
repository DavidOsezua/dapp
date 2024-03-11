import React, { useState } from "react";
import { Modal, WalletCard, WalletHeader } from "../components";
import styles from "./WalletPage.module.css";
import { walletData } from "../data/data";

const walletPage = () => {
  const [selectedWallet, setSelectedWallet] = useState(null);

  const handleSelection = (wallet) => {
    setSelectedWallet((curr) => (curr?.id === wallet.id ? "" : wallet));
  };

  const modalHandler = () => {
    setSelectedWallet(null);
  };

  return (
    <>
      <WalletHeader />
      <section className={`${styles.section}`}>
        {/* TITLE */}
        <div className={`${styles.select}`}>
          <h2 className={`${styles.title}`}>SELECT WALLET</h2>
          <div className={`${styles.loader}`}></div>
        </div>

        {/* WALLET CARDS */}
        <div className={`${styles.container}`}>
          <div className={`${styles.cardContainer}`}>
            {walletData.map((wallet, i) => (
              <WalletCard
                key={wallet.id}
                wallet={wallet}
                num={i}
                selectedWallet={selectedWallet}
                onSelection={handleSelection}
              />
            ))}
          </div>
        </div>
        {selectedWallet ? (
          <Modal selectedWallet={selectedWallet} modalHandler={modalHandler} />
        ) : (
          ""
        )}
      </section>
    </>
  );
};

export default walletPage;
