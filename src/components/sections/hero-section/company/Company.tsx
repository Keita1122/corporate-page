import React from "react";
import styles from "./Company.module.scss";
import clsx from "clsx";


const Company = () => {

  return(
    <div className={styles.companySection}>
      <div className={styles.title}>
        <h3>COMPANY</h3>
        <h1>会社概要</h1>
      </div>

      <div className={styles.main}>
        <div className={styles.twoColumns}>
          <div className={clsx(styles.leftSection, styles.columnDesign)}>
            <h2>「Finder（見つける人）」として、<br/>企業の埋もれた可能性を見つけ出す。</h2>
            <p>私たちSales Finderは、「営業」と「テクノロジー」を融合し、企業の成長を支援するパートナーです。CRMの開発・導入から、システムの受託開発、さらにはIT導入のコンサルティングまで、一気通貫でお客様のビジネスに寄り添います。
  現場を知っているからこそ、最適なシステムを作れる。その信念のもと、お客様一社一社のビジネスに真正面から向き合い、埋もれた可能性を発掘して参ります。</p>
          </div>

          <div className={clsx(styles.rightSection, styles.columnDesign)}>
            <h3>基本情報</h3>
            <div className={styles.companyInfo}>
              <div className={styles.item}>
                <h3 className={styles.tag}>会社名</h3>
                <p className={styles.contents}>株式会社Sales Finder</p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.tag}>設立</h3>
                <p className={styles.contents}>2025年10月1日</p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.tag}>所在地</h3>
                <p className={styles.contents}>東京都中央区築地3-7-11<br/>CUBE TSUKIJI 3階</p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.tag}>資本金</h3>
                <p className={styles.contents}>1,000,000円</p>
              </div>
              <div className={styles.item}>
                <h3 className={styles.tag}>従業員数</h3>
                <p className={styles.contents}>7名（2026年2月現在）</p>
              </div>
            </div>

            <div className={styles.serviceInfo}>
              <h3>事業内容</h3>
              <p>・自社CRMの開発及び販売</p>
              <p>・Webシステム、業務システムの受託開発</p>
              <p>・IT導入コンサルティング</p>              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Company;