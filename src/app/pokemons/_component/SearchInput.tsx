"use client";

import { MouseEvent, MutableRefObject, useRef } from "react";

import * as styles from "./_styles/searchInput.css";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();
  const inputRef = useRef(null) as MutableRefObject<null | HTMLInputElement>;

  const onSearch = () => {
    if (inputRef.current) {
      router.replace(`/pokemons?search=${inputRef.current.value}`);
    }
  };

  const handleClickSearch = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <div className={styles.container}>
      <input className={styles.input} ref={inputRef} />
      <button onClick={(e) => handleClickSearch(e)}>Search</button>
    </div>
  );
};

export default SearchInput;
