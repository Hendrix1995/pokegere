import ModalHeader from "../_component/ModalHeader";
import * as styles from "./pokemonsModal.css";

const PokemonsModal = () => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <ModalHeader />
        <div>검색인풋</div>
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
