import Image from "next/image";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>
          A propos de <span className={styles.highlight}>NC Beauty</span>
        </h2>
        <br />
        <h1>
          Explorez l&apos;univers de la beauté avec NaNa Cissé Beauty. <br />{" "}
        </h1>
        <p className={styles.desc}>
          Nous croyons en la puissance de la confiance en soi que procure une
          peau rayonnante et des traits délicatement rehaussés. Chez nous,
          chaque femme est célébrée pour sa beauté unique et sa personnalité
          éclatante. Rejoignez notre communauté pour découvrir des conseils, des
          astuces et des produits qui vous aideront à briller de
          l&apos;intérieur et à rayonner dans toutes les occasions.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>
              {" "}
              10 <span className={styles.highlight}>K +</span>
            </h1>
            <p>Plus de 5 ans d&apos;Expérience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/ana.png' alt='nana photo' width={500} height={500} />
      </div>
    </div>
  );
}

export default AboutPage;
