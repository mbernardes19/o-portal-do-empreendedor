import styles from "../styles/Section.module.css"


export default function Section() {
    return (
      <>
        <h1 className={styles.h1}>Vantagens de Ser MEI</h1>
        <div className={styles.section_container}>
          <div className={styles.box_colunm}>
            <h3 className={styles.h3_box_colunm}>
              BENEFÍCIOS
              <br /> COM INSS
            </h3>

            <p className={styles.p}>
              Com seu MEI você terá <br /> cobertura previdenciária
              <br /> de benefícios tais como,
              <br /> aposentadoria, salário
              <br /> maternidade, auxílio
              <br /> doença, dentre outros.
            </p>
          </div>

          <div className={styles.box_colunm_2}>
            <h3 className={styles.h3_box_colunm_2}>
              NEGÓCIO
              <br /> RECONHECIDO
            </h3>

            <p className={styles.p}>
              A sua empresa terá um <br></br> CNPJ e poderá cumprir
              <br /> com as obrigações
              <br /> legais à um custo baixo.
            </p>
          </div>

          <div className={styles.box_colunm_3}>
            <h3 className={styles.h3_box_colunm_3}>
              EMPRÉSTIMOS
              <br /> FACILITADOS
            </h3>
            <p className={styles.p}>
              Os maiores Bancos do
              <br /> país tem crédito
              <br /> facilitado para
              <br /> empreendedor que tem
              <br /> CNPJ MEI para investir
              <br /> no seu próprio negócio.
            </p>
          </div>

          <div className={styles.box_colunm_4}>
            <h3 className={styles.h3_box_colunm_4}>
              CONTA
              <br /> EMPRESARIAL
            </h3>
            <p className={styles.p}>
              Com o CNPJ você
              <br /> pode abrir uma conta
              <br /> empresarial (PJ) em
              <br /> qualquer banco para
              <br /> obter benefícios
              <br /> oferecidos para as
              <br /> empresas.
            </p>
          </div>
        </div>

        <div className={styles.bottom_column}>
          <div className={styles.box_colunm_5}>
            <h3 className={styles.h3_box_colunm_5}>
              AUMENTE
              <br /> SUAS VENDAS
            </h3>
            <p className={styles.p}>
              Aumente suas vendas
              <br /> com a opção de
              <br /> pagamento por Cartão
              <br /> de Crédito, utilizando
              <br /> maquininhas
              <br /> disponíveis para
              <br /> empresas.
            </p>
          </div>

          <div className={styles.box_colunm_6}>
            <h3 className={styles.h3_box_colunm_6}>
              EMISSÃO DE
              <br /> NOTAS FISCAIS
            </h3>
            <p className={styles.p}>
              Ao cadastrar seu CNPJ
              <br /> MEI você pode emitir
              <br /> Nota Fiscal Eletrônica
              <br /> para produtos ou
              <br /> serviços sem
              <br /> burocracia.
            </p>
          </div>

          <div className={styles.box_colunm_7}>
            <h3 className={styles.h3_box_colunm_7}>
              CONTRATAÇÃO
              <br /> DE
              <br /> FUNCIONÁRIOS
            </h3>
            <p className={styles.p}>
              Se você precisar
              <br /> contratar e registrar um
              <br /> funcionário na sua
              <br /> empresa, você pode de
              <br /> forma legal por possuir
              <br /> um CNPJ MEI.
            </p>
          </div>

          <div className={styles.box_colunm_8}>
            <h3 className={styles.h3_box_colunm_8}>
              FINANCEIRO
              <br /> SIMPLES
            </h3>
            <p className={styles.p}>
              Economize com
              <br /> contador para fazer o<br /> seu financeiro, com o<br />{" "}
              CNPJ MEI a<br />
              contabilidade é fácil e<br /> intuitiva, faça você
              <br />
              mesmo!
            </p>
          </div>
        </div>
      </>
    );
}