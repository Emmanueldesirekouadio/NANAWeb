import Image from "next/image";
import styles from "./home.module.css"; // Importez votre module CSS

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>
          BIENVENUE CHEZ <span className={styles.highlight}>NANA CISSE</span>
        </h1>
        <br />
        <br />
        <p className={styles.text}>
          Bienvenue sur notre site dédié à l&apos;univers du maquillage ! <br />{" "}
          Que vous soyez un amateur passionné ou un professionnel chevronné,
          vous trouverez ici des conseils, des astuces et des tutoriels pour
          sublimer votre beauté. <br />
          Explorez nos articles sur les dernières tendances en matière de
          maquillage, découvrez des critiques de produits incontournables et
          apprenez des techniques pour créer des looks époustouflants. <br />
          Nous sommes là pour vous aider à exprimer votre créativité et à vous
          sentir confiante dans votre routine beauté. <br />
          Préparez-vous à plonger dans un monde de couleurs, de textures et de
          styles qui célèbrent la diversité et l&apos;individualité. Bonne
          exploration !
        </p>
        <br />
        <div className={styles.buttons}>
          <button className={styles.button}>Découvrir</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>Nos Réalisations</span>
          </h2>
          <div className={styles.brandImgContainer}>
            <Image
              src='/beauty.png'
              alt='brand'
              className={styles.brandImg}
              width={900}
              height={400}
              priority
            />
          </div>
          <h1>IDENTIFIEZ - NOUS SUR VOS SELFIES </h1>
          <br />
          <h1>
            {" "}
            <span className={styles.highlight}>#NANA_MAKEUP</span>{" "}
          </h1>
          <div className={styles.VideoContainer}>
            {/* <Video
              src={Nana}
              // poster='/nana.jpg'
              // width={800}
              // height={400}
              // controls
            /> */}
          </div>
          {/* <Player /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
