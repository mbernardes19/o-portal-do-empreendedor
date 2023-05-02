import { useState } from "react"; 
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [aberto, setAberto] = useState(false)
  return (
    <nav className={styles.nav}>
      <div class={styles.logo}>
        <a href="#">MEI Suporte</a>
      </div>
      <ul class={styles.menu}>
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
      <div className={styles.menu_mobile} onClick={() => setAberto(!aberto)}>
        <div class={styles.barra}></div>
        <div class={styles.barra2}></div>
        <div class={styles.barra3}></div>
      </div>

      {aberto && (
        <ul class={styles.menulist_mobile}>
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








