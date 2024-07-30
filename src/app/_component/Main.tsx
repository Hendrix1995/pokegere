import * as styles from "./main.css";
import Menu from "./Menu";

const MENU_LIST_1ST = [
  { name: "도감", icon: "도감모양" },
  { name: "포켓몬", icon: "볼모양" },
];

const MENU_LIST_2ST = [
  { name: "라이벌", icon: "신분증" },
  { name: "바이옴", icon: "지도?" },
];

const Main = () => {
  return (
    <div className={styles.container}>
      <h1>PokéGere</h1>

      <nav className={styles.navBox}>
        <ul className={styles.menuBox}>
          {MENU_LIST_1ST.map((menu) => (
            <Menu title={menu.name} icon={menu.icon} />
          ))}
        </ul>

        <ul className={styles.menuBox}>
          {MENU_LIST_2ST.map((menu) => (
            <Menu title={menu.name} icon={menu.icon} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Main;
