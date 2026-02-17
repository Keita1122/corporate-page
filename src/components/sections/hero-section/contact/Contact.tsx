import React from "react";
import styles from "./Contact.module.scss";


const Contact = () => {

  return(
   <div className={styles.contactSection}>
    <div className={styles.title}>
      <h3>CONTACT</h3>
      <h1>お問い合わせ</h1>
      <p>CRM導入、システム開発、ITコンサルティングに関するご相談はお気軽にどうぞ</p>
    </div>

    <div className={styles.main}>
      <div className={styles.twoColumns}>
        <div className={styles.leftSection}>
          <div className={styles.mail}>
            <h3>メール</h3>
            <p>info@sales-finder.co.jp</p>
          </div>

          <div className={styles.place}>
            <h3>所在地</h3>
            <p>東京都中央区築地3-7-11<br/>CUBE TSUKIJI 3階</p>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.contactForm}>
            <div className={styles.gridSection}>
              <div className={styles.item}>
                <label htmlFor="">会社名</label>
                <input type="text" placeholder="株式会社〇〇" />
              </div>

              <div className={styles.item}>
                <label htmlFor="">ご担当者名</label>
                <input type="text" placeholder="山田 太郎" />
              </div>

              <div className={styles.item}>
                <label htmlFor="">メールアドレス</label>
                <input type="text" placeholder="example@company.co.jp" />
              </div>

              <div className={styles.item}>
                <label htmlFor="">電話番号</label>
                <input type="number" placeholder="080-1234-5678" />
              </div>
            </div>

            <div className={styles.form}>
              <label htmlFor="">お問い合わせ内容</label>
              <select name="" id="">
                <option value="">CRM導入に関するご相談</option>
                <option value="">社内システム開発や業務改善システム開発のご相談</option>
                <option value="">社内DX化、IT導入コンサルのご相談</option>
                <option value="">【その他】ご相談、ご要望</option>
              </select>
              <textarea placeholder="その他ご相談内容がある場合はご記入ください。" />
            </div>

            <div className={styles.buttonSection}>
              <button>送信する</button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div> 
  )
};

export default Contact;