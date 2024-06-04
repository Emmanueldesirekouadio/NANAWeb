import Image from "next/image";
import styles from "./about.module.css";

function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.textImageContainer}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>
            <span className={styles.highlight}>BlaNian.Event </span>
          </h2>
          <br />
          <p className={styles.desc}>
            À Propos de BlaNian.Event Bienvenue sur Eventy, votre destination
            virtuelle pour l&apos;innovation, l&apos;inspiration et la
            connexion.
            <br />
            Chez BlaNian.Event , nous croyons au pouvoir de rassembler les
            esprits créatifs, les entrepreneurs ambitieux et les curieux
            passionnés pour partager des idées, explorer de nouvelles
            perspectives et créer des opportunités sans limites.
            <br />
            Notre mission est de fournir une plateforme dynamique et accessible
            où les innovateurs du monde entier peuvent se réunir, échanger des
            connaissances, collaborer sur des projets et découvrir les dernières
            tendances dans leur domaine d&apos;intérêt.
            <br />
            Que vous soyez un professionnel à la recherche de nouvelles
            collaborations, un créateur désireux de partager vos créations avec
            le monde, ou simplement un enthousiaste de la technologie et de
            l&apos;innovation, Eventy est l&apos;endroit où vous trouverez
            l&apos;inspiration, l&apos;expertise et les connexions dont vous
            avez besoin pour réaliser vos rêves.
            <br />
            Rejoignez-nous dès aujourd&apos;hui et faites partie d&apos;une
            communauté mondiale d&apos;innovateurs passionnés qui repoussent les
            limites de ce qui est possible. l&apos;avenir est entre vos mains.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>
                {" "}
                10 <span className={styles.highlight}>K + abonnés </span>
              </h1>
              <p>Plus de 5 ans d&apos;Expérience</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='/r.jpg' // Replace with your image path
            alt='About Image'
            width={500}
            height={500}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
