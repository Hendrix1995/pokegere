import ModalHeader from "../_component/ModalHeader";
import SearchInput from "../_component/SearchInput";
import * as styles from "./pokemonsModal.css";

const PokemonsModal = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <ModalHeader />
        <SearchInput />
        <div>
          <div>이미지</div>
          <div>
            <div>
              <div>이름</div>
              <div>속성</div>
            </div>
            <div>능력치</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonsModal;
