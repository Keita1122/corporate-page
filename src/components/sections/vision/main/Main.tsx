import React from "react";
import styles from "./Main.module.scss";
import Image from "next/image";
import Technology from "../../../../assets/image/technology.jpg";

const Main = () => {

  return(
    <div className={styles.mainContainer}>
      <div className={styles.background}>
        <Image src={Technology} className={styles.image} alt="technology-image" />
      </div>
      <h3>VISION</h3>
      <h1>
        営業を、<br/>確信に変える<br/>
        テクノロジーで、<br/>ビジネスを加速させる。
      </h1>
      <p>定型的・俗人的になりがちな「営業」や「マーケティング」は、答えが見えない職種として昔から研究がなされてきました。

経営者目線での理想は、営業部隊・マーケティング部隊が最大限の力を発揮するために、部署全体の底上げを図り、安定した売上を会社にもたらしてくれる仕組み作りができることでしょう。

そんな理想を叶えるためには何が必要か、考えに考え抜いた結果、「成功パターン」を集約し、定着させることでした。

Sales Finderはそんな成功パターンの集約と、社内定着をテクノロジーの力を活用し、どの会社でも実現できることを目標として、業界・業種問わずご支援をさせていただきます。
</p>
    </div>
  )
};

export default Main;