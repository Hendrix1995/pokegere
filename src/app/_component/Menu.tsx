import Image from "next/image";
import * as styles from "./main.css";
import Link from "next/link";

interface MenuProps {
  title: string;
  icon: any;
  link: string;
}

const Menu = ({ title, icon, link }: MenuProps) => {
  return (
    <li className={styles.menu}>
      <Link href={link}>
        <Image className={styles.IconBox} src={icon} alt={icon} />
        <div>{title}</div>
      </Link>
    </li>
  );
};

export default Menu;
