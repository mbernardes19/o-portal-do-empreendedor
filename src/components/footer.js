import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.footer_contacts}>
          <h1 className={styles.contacts_title}>Fale Conosco</h1>

          <h3 className={styles.atendimento_subtilte}>
            HORÁRIO DE ATENDIMENTO:{" "}
          </h3>

          <p className={styles.parag_atendimento}>
            Seg à Sex / 8:00 - 22:00 <br></br>
            Sab / 9:30 - 17:00
          </p>

          <h3 className={styles.contacts_subtitle}>CONTATO: </h3>
          <a href="#" className={styles.link_email}>
            contato@umcontatoaleatorio.com
          </a>

          <h3 className={styles.endereco_subtitle}>ENDEREÇO: </h3>
          <p className={styles.parag_endereco}>
            RUA ALEATORIA, 000, SALA 0000-C<br></br>
            Setor ALEATORIO, BRASIL - BR
          </p>
        </div>

        <div className={styles.footer_service}>
          <h1 className={styles.service_title}>Serviços</h1>

          <ul className={styles.listas_ul}>
            <li className={styles.list_servicos}>
              <a href="#" className={styles.link_servicos}>
                Registro de CNPJ MEI
              </a>
            </li>
            <li className={styles.list_servicos}>
              <a className={styles.link_servicos} href="#">
                Alterações Cadastrais do MEI
              </a>
            </li>
            <li className={styles.list_servicos}>
              <a className={styles.link_servicos} href="#">
                Baixar/Cancelar CNPJ MEI
              </a>
            </li>
            <li className={styles.list_servicos}>
              <a className={styles.link_servicos} href="#">
                Declaração Anual DASN-SMEI
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footer_about}>
          <h1 className={styles.about_title}>Sobre o Site</h1>
          <ul className={styles.listas_ul}>
            <li className={styles.list_sobresite}>
              <a href="#" target="__blank" className={styles.link_sobresite}>
                Aviso de Privacidade
              </a>
            </li>

            <li className={styles.list_sobresite}>
              <a href="#" target="__blank" className={styles.link_sobresite}>
                Termos de Uso
              </a>
            </li>

            <li className={styles.list_sobresite}>
              <a href="#" target="__blank" className={styles.link_sobresite}>
                Quem Somos
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className={styles.hr}></hr>
      <p className={styles.footer_copy}>
        &copy; Copyright 2023 -CNPJ:00.000.000/0001-00 - EMPRESA . Todos os
        Direitos Reservados
      </p>
    </footer>
  );
}
