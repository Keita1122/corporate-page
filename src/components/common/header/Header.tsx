import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import Logo from "../../../assets/image/new-logo.png";
import NavMenu from "./NavMenu";


const Header = () => {

  //const [open, setOpen] = useState(false);

  return(
    <div className={styles.header}>
      <div className={styles.inner}>
        <Image className={styles.logo} src={Logo} alt="Logo" />
        <NavMenu />
      </div>
    </div>
  )
};

export default Header;