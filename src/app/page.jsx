"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

import styles from "./home.module.css"; // Import your CSS module

const Home = () => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>EVENTY</h1>
        <br />
        <br />
        <p className={styles.text}>
          Bienvenue à Eventy Nous sommes ravis de vous accueillir à Eventy,
          votre salon virtuel dédié à la découverte, à l&apos;innovation et à la
          connexion.
          <br /> Chez Eventy, nous avons créé un espace où les idées se
          rencontrent, où les passions se partagent, et où les opportunités
          fleurissent.
          <br />
          <br />
          Explorez nos stands interactifs, participez à des conférences
          captivantes, et engagez-vous avec des professionnels et des passionnés
          du monde entier.
          <br /> Que vous soyez ici pour découvrir de nouvelles tendances,
          établir des contacts précieux, ou simplement pour vous inspirer,
          Eventy est le lieu où tout devient possible.
          <br />
          <br />
          Merci de nous rejoindre dans cette aventure passionnante.
          <br /> Nous espérons que votre expérience à Eventy sera enrichissante
          et mémorable.
          <br /> N&apos;hésitez pas à naviguer à travers nos différentes
          sections et à profiter pleinement de tout ce que notre salon virtuel a
          à offrir.
          <br />
          <br />
          Encore une fois, bienvenue à Eventy !
        </p>
        <br />

        <div className={styles.brands}>
          <h2 className={styles.title}>
            <span className={styles.highlight}>EVENEMENT DU MOMENT</span>
          </h2>
          <div ref={emblaRef} className={styles.brandImgContainer}>
            <div className={styles.embla__container}>
              <div className={styles.embla__slide}>
                <Image
                  src='/l.jpeg'
                  alt='brand'
                  width={900}
                  height={400}
                  priority
                />
              </div>
              <div className={styles.embla__slide}>
                <Image
                  src='/ll.jpeg'
                  alt='brand'
                  width={900}
                  height={400}
                  priority
                />
              </div>
              <div className={styles.embla__slide}>
                <Image
                  src='/lll.jpeg'
                  alt='brand'
                  width={900}
                  height={400}
                  priority
                />
              </div>
              <div className={styles.embla__slide}>
                <Image
                  src='/llll.jpeg'
                  alt='brand'
                  width={900}
                  height={400}
                  priority
                />
              </div>
              <div className={styles.embla__slide}>
                <Image
                  src='/lllll.jpeg'
                  alt='brand'
                  width={900}
                  height={400}
                  priority
                />
              </div>
              <div className={styles.embla__slide}>
                <Image
                  src='/lllllll.jpeg'
                  alt='brand'
                  width={900}
                  height={400}
                  priority
                />
              </div>
              <div className={styles.embla__slide}>
                <Image
                  src='/llllllll.jpeg'
                  alt='brand'
                  width={900}
                  height={400}
                  priority
                />
              </div>
              <div className={styles.embla__slide}>
                <Image
                  src='/g.jpeg'
                  alt='brand'
                  width={900}
                  height={400}
                  priority
                />
              </div>
              <div className={styles.embla__slide}>
                <Image
                  src='/h.jpeg'
                  alt='brand'
                  width={900}
                  height={400}
                  priority
                />
              </div>
              {/* Add more Image components here */}
            </div>
          </div>
          <h1>IDENTIFIEZ-NOUS SUR VOS SELFIES</h1>
          <br />
          <h1>
            <span className={styles.highlight}>#EVENTY</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
