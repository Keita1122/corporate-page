import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";
import Logo from "../../../assets/image/new-logo.png";


const Footer = () => {

  return(
    <div className={styles.footerContainer}>
      <div className={styles.upperContainer}>
        <div className={styles.upperLeftSide}>
          <div className="logo">
            <Image src={Logo} alt="logo" className={styles.logo} />
            <p>自社CRM × 開発受託 × ITコンサル。<br/>
               現場の課題を、本質的な解決へと導くSales Finder。</p>
          </div>
        </div>

        <div className={styles.upperRightSide}>
          <div className={styles.leftSide}>
            <h3>SERVICES</h3>
            <a href="#">自社開発CRM</a>
            <a href="#">開発受託</a>
            <a href="#">IT導入コンサル</a>
          </div>

          <div className={styles.rightSide}>
            <h3>COMPANY</h3>
            <a href="#">会社概要</a>
            <a href="#">導入事例</a>
            <a href="#">お問い合わせ</a>
          </div>
        </div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.bottomLeftSide}>
          <p>© 2025 Sales Finder Inc. All rights reserved.</p>
        </div>

        <div className={styles.bottomRightSide}>
          <a href="#">プライバシーポリシー</a>
          <a href="#">利用規約</a>
        </div>
      </div>
    </div>
  )
};

export default Footer;