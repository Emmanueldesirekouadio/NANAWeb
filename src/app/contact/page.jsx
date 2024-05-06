import Image from "next/image";
import styles from "./contact.module.css";

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

function ContactPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='/contact.png' alt='' className={styles.img} fill />
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <input type='text' placeholder='Noms et Prenoms' />
          <input type='text' placeholder='Adresse Email' />
          <input type='text' placeholder='Numéro de telephone  (Optional) ' />
          <textarea
            name=''
            id=''
            cols='30'
            rows='10'
            placeholder='Message'
          ></textarea>
          <button>Envoyer</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
