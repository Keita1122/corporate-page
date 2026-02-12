import React from "react";
import styles from "./Hero.module.scss";
import { FaCheckCircle as Check } from "react-icons/fa";
import Button from "@/components/common/button/Button";
import DNAAnimation from "./DNATube";


const Hero = () => {

  return(
    <div className={styles.heroSection}>
      <div className={styles.twoColumn}>
        <div className={styles.leftSection}>
          <h1>
            営業を、<br/>
            <span className={styles.navyBlue}>確信</span ><span className={styles.lightBlue}>に変える。</span><br/>
            テクノロジーで、<br/>
            <span className={styles.lightBlue}>ビジネスを</span><span className={styles.navyBlue}>加速させる。</span>
          </h1>

          <div className={styles.inductionSection}>
            <div className={styles.sentence}>
              <Check className={styles.checkMark} />
              <h3>次世代CRM「Sales Finder」で営業現場のDXを加速</h3>
            </div>
            <div className={styles.buttonSection}>
              <Button className={styles.productButton} variant="primary">→ 製品を見る</Button>
              <Button className={styles.trialButton} variant="secondary">無料トライアル</Button>
            </div>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.starField}></div>
          
          <div className={styles.dnaWrapper}>
            <DNAAnimation />
          </div>
        </div>
      </div>
    </div>
  )
};

export default Hero;