import React, { useState } from "react";
import InputMask from "react-input-mask";
import styles from "../styles/cabecalho.module.css";

export default function Formu() {
   /* const [valor, setValor] = useState("");

    function handleInputChange(event) {
      const { value } = event.target;
      if (value.length <= 11) {
        setValor(value);
      }
    }*/
  return (
    <>
      <section className={styles.container}>
        <div>
          <h1>Abrir CNPJ MEI</h1>
        </div>
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
/*
<input
              type="number"
              placeholder="Telefone"
              value={valor}
              onChange={handleInputChange}
            ></input>*/