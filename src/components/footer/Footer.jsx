import Image from "next/image";
import styles from "./footer.module.css";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        {" "}
        <Image src='/logo.jpeg' alt='logo' width={60} height={60} />
      </div>
      <div className={styles.text}>
        NaNa Cisse Beauty 2024 © Tous droits réservés
      </div>
      <div></div>
    </div>
  );
}

export default Footer;
