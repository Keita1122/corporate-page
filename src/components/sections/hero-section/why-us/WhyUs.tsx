import React from "react";
import styles from "./WhyUs.module.scss";
import clsx from "clsx";

const WhyUs = () => {

  return(
    <div className={styles.mainSection}>
      <div className={styles.title}>
        <h3>WHY US?</h3>
        <h1>私たちの強み</h1>
        <p>現場のプロフェッショナルによる総合的な提案力に自信があります。</p>
      </div>

      <div className={styles.main}>
        <div className={styles.threeColumns}>
          <div className={clsx(styles.leftSection,styles.boxSection)}>
            <div className={styles.icon}>
              
              <h3>01</h3>
            </div>
            <h2>現場主義</h2>
            <p>自社製品を持っているからこそ、ユーザーの使い勝手を極限まで理解している。現場の声がダイレクトにプロダクトに反映される開発体制。</p>
          </div> 

          <div className={clsx(styles.centerSection,styles.boxSection)}>
            <div className={styles.icon}>
              
              <h3>02</h3>
            </div>
            <h2>一気通貫</h2>
            <p>戦略立案から実装、運用保守までワンストップで対応。お客様は複数のベンダーを管理する必要がなく、一貫した品質でプロジェクトを推進。</p>
          </div>

          <div className={clsx(styles.rightSection,styles.boxSection)}>
            <div className={styles.icon}>
              
              <h3>03</h3>
            </div>
            <h2>技術 × 営業</h2>
            <p>エンジニア視点だけでなく、ビジネスを伸ばす視点での提案。テクノロジーを手段として、売上向上という真のゴールに向き合います。</p>
          </div>
        </div>
      </div>
    </div>
  )
};

export default WhyUs;