import styles from '../styles/info.module.css'

export default function Info() {
    return (
      <section className={styles.container}>
        <div>
        <h3>LEIA COM ATENÇÃO</h3>
        <p>ESTE NÃO É UM SITE GOVERNAMENTAL</p>
        </div>

        <div>
          <p>
            O serviço prestado através do site empreendedorportalmei.com.br é um
            serviço privado e opcional.<br/> O registro MEI, baixa cancelamento no CNPJ
            do MEI e alterações no cadastro do MEI podem ser feitos,<br/> gratuitamente
            sem o acompanhamento profissional deste site, através da plataforma
            governamental<br/> https://www.gov.br/.
          </p>
        </div>
      </section>
    ); 
}