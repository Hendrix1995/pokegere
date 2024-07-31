import { iconDex, iconIdentificationCard, iconPokeBall, iconTownMap } from "../../../public/main";
import * as styles from "./main.css";
import Menu from "./Menu";

const MENU_LIST = [
  [
    { name: "도감", icon: iconDex, link: "/list" },
    { name: "포켓몬", icon: iconPokeBall, link: "/pokemons" },
  ],
  [
    { name: "라이벌", icon: iconIdentificationCard, link: "/rival" },
    { name: "바이옴", icon: iconTownMap, link: "/locations" },
  ],
];

const Main = () => {
  return (
    <div className={styles.container}>
      <h1>PokéGere</h1>

      <nav className={styles.navBox}>
        {MENU_LIST.map((list) => {
          return (
            <ul className={styles.menuBox}>
              {list.map((menu) => {
                return <Menu key={menu.name} title={menu.name} icon={menu.icon} link={menu.link} />;
              })}
            </ul>
          );
        })}
      </nav>
    </div>
  );
};

export default Main;
