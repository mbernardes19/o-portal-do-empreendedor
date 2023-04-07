import styles from '../styles/Footer.module.css'

export default function Footer () {
    return (
        <footer /*className={styles.footer}*/>



            <div className={styles.container}>

            <div className={styles.filho}>
            <h1  className={styles.titulo_um}>Fale Conosco</h1>

            <h3 className={styles.subtitulo_um} >HORÁRIO DE ATENDIMENTO: </h3>

            <p className={styles.parag_atendimento} >Seg à Sex / 8:00 - 22:00 <br></br>
               Sab / 9:30 - 17:00</p>
            
            <h3 className={styles.subtitulo_dois} >CONTATO: </h3>
            <a href='#' className={styles.link_email}>contato@umcontatoaleatorio.com</a>

            <h3 className={styles.subtitulo_tres} >ENDEREÇO: </h3>
            <p className={styles.parag_endereco}>RUA ALEATORIA, 000, SALA 0000-C<br></br>
               Setor ALEATORIO, BRASIL - BR
            </p>
            </div>

            <div className={styles.neto} >
            <h1  className={styles.titulo_dois}>Serviços</h1>
             
             <ul className={styles.ul} >

                <li  className={styles.list_servicos}><a  href='#' className={styles.link_servicos}>Registro de CNPJ MEI</a></li>
                <li  className={styles.list_servicos}><a className={styles.link_servicos} href='#'>Alterações Cadastrais do MEI</a></li>
                <li  className={styles.list_servicos}><a className={styles.link_servicos} href='#'>Baixar/Cancelar CNPJ MEI</a></li>
                <li  className={styles.list_servicos}><a className={styles.link_servicos} href='#'>Declaração Anual DASN-SMEI</a></li>
             </ul>
            </div>

            <div className={styles.netinho}>   
                <h1 className={styles.titulo_tres}>Sobre o Site</h1>
           <ul className={styles.ul} >

            <li className={styles.list_sobresite}>
                <a href='#' target='__blank'  className={styles.link_sobresite}>Aviso de Privacidade</a>
            </li>

            <li className={styles.list_sobresite}>
                <a  href='#' target='__blank'  className={styles.link_sobresite}>Termos de Uso</a>
            </li>
            
            <li className={styles.list_sobresite}>
                <a  href='#' target='__blank' className={styles.link_sobresite}>Quem Somos</a>
            </li>

           </ul>
            </div>
           

            
            </div>
             <hr className={styles.linha}></hr>
            <p className={styles.direitos}>&copy; Copyright 2023 -CNPJ:00.000.000/0001-00 - EMPRESA . Todos os Direitos Reservados</p>
        </footer>
    )
}