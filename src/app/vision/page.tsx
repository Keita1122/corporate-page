import React from "react";
import styles from "./page.module.scss";
import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";
import Main from "@/components/sections/vision/main/Main";

export default function VISION() {

  return(
    <div className={styles.page}>
      <Header />
      <Main />

      <Footer />
    </div>
  )
};
