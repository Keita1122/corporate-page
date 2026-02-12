import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";


type Props = {
  children: React.ReactNode; // ボタン内テキスト
  onClick?: () => void;
  className?: string; // 追加スタイル用
  variant?: "primary" | "secondary" | "danger";
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  onClick,
  className,
  variant = "primary",
  type = "button",
}: Props) => {

  return(
    <button
      type={type}
      onClick={onClick}
      className={clsx(styles.button, styles[variant], className)}
    >
      {children}
    </button>
  )
};

export default Button;