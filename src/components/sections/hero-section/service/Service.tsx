import React from "react";
import styles from "./Service.module.scss";
import clsx from "clsx";

const Service = () => {

  return(
    <div className={styles.serviceSection}>
      <div className={styles.title}>
        <h3>SERVICE</h3>
        <h1>Sales Finderの3本柱</h1>
        <p>3つの事業が互いにシナジーを生み、お客様のビジネス成長を包括的に支援します。</p>
      </div>

      <div className={styles.main}>
        <div className={styles.threeColumns}>
          <div className={clsx(styles.leftSection,styles.boxSection)}>
            <div className={styles.icon}>
              
              <h3>CRM</h3>
            </div>
            <h2>自社開発CRM「Sales Finder」</h2>
            <p>日本の営業現場に特化した直感的な操作性。データの「見える化」から「勝てる化」へ。
営業活動を可視化し、チーム全体の生産性を最大化します。</p>

            <div className={styles.tagSection}>
              <p>営業効率向上</p>
              <p>収益構造分析</p>              
            </div>

            <div className={styles.buttonSection}>
              <button>→ 詳しく見る</button>
            </div>
          </div> 

          <div className={clsx(styles.centerSection,styles.boxSection)}>
            <div className={styles.icon}>
              
              <h3>DEVELOPMENT</h3>
            </div>
            <h2>受託開発</h2>
            <p>CRM連携、業務効率化ツール、Webシステム開発。お客様の「欲しい」を形にする技術力。現場を知るエンジニアが最適なソリューションを構築します。</p>
            <div className={styles.tagSection}>
              <p>業務効率改善</p>
              <p>カスタマイズ開発</p>
            </div>

            <div className={styles.buttonSection}>
              <button>→ 詳しく見る</button>
            </div>
          </div>

          <div className={clsx(styles.rightSection,styles.boxSection)}>
            <div className={styles.icon}>
              
              <h3>CONSULTING</h3>
            </div>
            <h2>IT導入コンサル</h2>
            <p>システムを入れることがゴールではない。伴走型で社内定着と売上向上を支援。戦略立案から運用定着まで一気通貫でサポートします。</p>
          
            <div className={styles.tagSection}>
              <p>業務改善提案</p>
              <p>DX化支援</p>
            </div>

            <div className={styles.buttonSection}>
              <button>→ 詳しく見る</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Service;