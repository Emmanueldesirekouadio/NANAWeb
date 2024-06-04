import Image from "next/image";
import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
function Navbar() {
  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        <Image src='/k.png' alt='logo' width={300} height={200} />
      </Link>
      <div>
        <Links />
      </div>
    </div>
  );
}

export default Navbar;
