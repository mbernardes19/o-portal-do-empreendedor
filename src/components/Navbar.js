import { useState } from "react"; 
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  const [aberto, setAberto] = useState(false)
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">O Portal do Empreendedor</Link>
      </div>
      <ul className={styles.menu}>
      </ul>
      <div className={styles.menu_mobile} onClick={() => setAberto(!aberto)}>
        <div className={styles.barra}></div>
        <div className={styles.barra2}></div>
        <div className={styles.barra3}></div>
      </div>

      {aberto && (
        <ul className={styles.menulist_mobile}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Abrir MEI</a>
          </li>
          <li>
            <a href="#">Alterar MEI</a>
          </li>
          <li>
            <a href="#">Cancelar MEI</a>
          </li>
          <li>
            <a href="#">Declaração Anual</a>
          </li>
        </ul>
      )}
    </nav>
  );
}








