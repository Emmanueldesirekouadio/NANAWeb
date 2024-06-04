"use client";

import React from "react";

import styles from "./home.module.css"; // Import your CSS module

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1>
          {" "}
          <span className={styles.highlight}>BlaNian.Event</span>
        </h1>
        <br />
        <br />
        <p className={styles.text}>
          Bienvenue à BlaNian.Event Nous sommes ravis de vous accueillir à
          BlaNian.Event, votre salon virtuel dédié à la découverte, à
          l&apos;innovation et à la connexion.
          <br /> Chez BlaNian.Event, nous avons créé un espace où les idées se
          rencontrent, où les passions se partagent, et où les opportunités
          fleurissent.
          <br />
          <br />
          Explorez nos stands interactifs, participez à des conférences
          captivantes, et engagez-vous avec des professionnels et des passionnés
          du monde entier.
          <br /> Que vous soyez ici pour découvrir de nouvelles tendances,
          établir des contacts précieux, ou simplement pour vous inspirer, est
          blabaNiant.event le lieu où tout devient possible.
          <br />
          <br />
          Merci de nous rejoindre dans cette aventure passionnante.
          <br /> Nous espérons que votre expérience à BlaNiant.Event sera
          enrichissante et mémorable.
          <br /> N&apos;hésitez pas à naviguer à travers nos différentes
          sections et à profiter pleinement de tout ce que notre salon virtuel a
          à offrir.
          <br />
          <br />
          Encore une fois, bienvenue à BlaNian.Event!
        </p>
        <br />

        {/* Add more Image components here */}
      </div>
    </div>
  );
};

export default Home;
