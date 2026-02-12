import Image from "next/image";
import styles from "./page.module.scss";
import Header from "@/components/common/header/Header";
import Hero from "@/components/sections/hero/Hero";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
    </div>
  );
}
