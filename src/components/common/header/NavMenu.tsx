import { MENU_ITEMS } from "./menu.config";
import NavItem from "./NavItem";
import styles from "./NavMenu.module.scss";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <ul>
        {MENU_ITEMS.map((item) => (
          <NavItem key={item.href} {...item} />
        ))}
      </ul>
    </nav>
  );
}
