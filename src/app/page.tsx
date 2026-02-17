import styles from "./page.module.scss";
import Header from "@/components/common/header/Header";
import Hero from "@/components/sections/hero-section/hero/Hero";
import Service from "@/components/sections/hero-section/service/Service";
import WhyUs from "@/components/sections/hero-section/why-us/WhyUs";
import Company from "@/components/sections/hero-section/company/Company";
import Contact from "@/components/sections/hero-section/contact/Contact";
import Footer from "@/components/common/footer/Footer";


export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Hero />
      <Service />
      <WhyUs />
      <Company />
      <Contact />
      <Footer />
    </div>
  );
}
