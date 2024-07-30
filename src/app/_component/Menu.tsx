import * as styles from "./main.css";

interface MenuProps {
  title: string;
  icon: string;
}

const Menu = ({ title, icon }: MenuProps) => {
  return (
    <li className={styles.menu}>
      <a>
        <div className={styles.IconBox}>{icon}</div>
        <div>{title}</div>
      </a>
    </li>
  );
};

export default Menu;
