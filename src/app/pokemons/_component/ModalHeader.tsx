"use client";

import { MouseEvent } from "react";
import * as styles from "./_styles/modalHeader.css";

import { useRouter } from "next/navigation";

const ModalHeader = () => {
  const router = useRouter();

  const handleClickClose = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <h2>Pokémons</h2>
      <button className={styles.close} onClick={(e) => handleClickClose(e)}>
        X
      </button>
    </div>
  );
};

export default ModalHeader;
