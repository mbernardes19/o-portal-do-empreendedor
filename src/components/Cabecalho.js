import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from "../styles/cabecalho.module.css";

export default function Formu() {
  return (
    <>
      <section className={styles.container}>
     
          <h1>Abrir CNPJ MEI</h1>
      
        <div>
          <form>
            <input type="text" placeholder="Nome"></input>

            <input type="email" placeholder="Email"></input>

            
            <InputMask mask="(99) 9999-99999" placeholder="Telefone" id="meuInput" type="tel" />
            <button type="submit">Abrir MEI</button>
          </form>
        </div>
      </section>
    </>
  );
}
