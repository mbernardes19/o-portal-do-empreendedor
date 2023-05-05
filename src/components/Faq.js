import styles from "../styles/Faq.module.css";

export default function Faq() {
  return (
    <section className={styles.section_container}>
      <div className={styles.container}>
        <h1>Dúvidas frequentes</h1>
        <h4>MEI - MICROEMPREENDEDOR INDIVIDUAL</h4>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc1"></input>
          <label htmlFor="acc1">
            <h2>01</h2>
            <h3> O que significa MEI e o que é ?</h3>
          </label>
          <div className={styles.content}>
            <p>
              MEI significa Microempreendedor Individual. Surgiu em 2008
              possibilitando o registro do CNPJ MEI através da Lei Complementar
              nº128, que formaliza o pequeno empresário individual. Para se
              encaixar nessa categoria é necessário:<br></br>
            </p>
            <ol type="A">
              <li>Ter no máximo um empregado;</li>
              <li>Não ser sócio ou titular de outra empresa;</li>
              <li>Possuir faturamento de até R$ 81.000,00 por ano;</li>
              <li>
                Exercer uma das atividades permitidas ao MEI (segundo a
                Resolução CGSN nº140, de 2018).
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc2"></input>
          <label htmlFor="acc2">
            <h2>02</h2>
            <h3>Até quanto com um CNPJ MEI posso faturar?</h3>
          </label>
          <div className={styles.content}>
            <p>
              O MEI pode ter o seu faturamento de janeiro até dezembro, até no
              máximo R$ 81.000,00. Se caso o Microempreendedor Individual se
              formalizar durante o ano em curso, o seu faturamento deve ser
              proporcional a R$ 6.750,00 por mês, até 31 de dezembro ao ano.
            </p>
          </div>
        </div>
        <h4>PARA MEI - BENEFÍCIOS PREVIDENCIÁRIOS (INSS)</h4>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc3"></input>
          <label htmlFor="acc3">
            <h2>03</h2>
            <h3>Eu sendo MEI posso me aposentar pelo INSS?</h3>
          </label>
          <div className={styles.content}>
            <p>
              Com certeza. Com o MEI mulheres aos 60 anos e homens aos 65
              possuem direito à aposentadoria por idade. Ao se formalizar e
              mantendo suas contribuições em dia, o MEI poderá usufruir da
              aposentadoria por idade de acordo com a carência onde o tempo
              mínimo de contribuição é de 180 meses a contar do primeiro
              pagamento em dia.
            </p>
          </div>
        </div>

        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc4"></input>
          <label htmlFor="acc4">
            <h2>04</h2>
            <h3>Quem tem um CNPJ MEI pode possui outros benefícios do INSS?</h3>
          </label>
          <div className={styles.content}>
            <p>Sim. Para o MEI:</p>
            <ol type="A">
              <li>
                Pensão por morte e auxílio reclusão: Esses benefícios possuem
                duração variável, de acordo com a idade e o tipo de beneficiário
                (para seus dependentes);
              </li>
              <li>
                Auxílio doença e Aposentadoria por invalidez: Neste caso é
                necessário 12 meses de contribuição, a contar do primeiro
                pagamento em dia;
              </li>
              <li>
                Salário-maternidade: neste caso é necessário 10 meses de
                contribuição, a contar do primeiro pagamento em dia.
              </li>
            </ol>
          </div>
        </div>
        <h4>VANTAGENS EM SER MEI E MAIS BENEFÍCIOS</h4>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc5"></input>
          <label htmlFor="acc5">
            <h2>05</h2>
            <h3>Eu tenho carteira assinada. Posso ser MEI?</h3>
          </label>
          <div className={styles.content}>
            <p>
              Sim. O funcionário de uma empresa privada pode ter um CNPJ MEI.
            </p>
          </div>
        </div>

        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc6"></input>
          <label htmlFor="acc6">
            <h2>06</h2>
            <h3>Quem é MEI recebe Seguro-Desemprego?</h3>
          </label>
          <div className={styles.content}>
            <p>
              Sim. Contanto que não tenha renda mensal superior ou igual a 1
              salário mínimo durante o pagamento do benefício.
            </p>
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc7"></input>
          <label htmlFor="acc7">
            <h2>07</h2>
            <h3>Se eu tiver CNPJ MEI posso abrir uma conta jurídica?</h3>
          </label>
          <div className={styles.content}>
            <p>
              Claro. Quem possui CNPJ MEI pode abrir conta jurídica em quase
              todos os bancos do país e aproveitar os mais diversos benefícios.
            </p>
          </div>
        </div>
        <h4>PARA MEI - FUNCIONÁRIO</h4>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc8"></input>
          <label htmlFor="acc8">
            <h2>08</h2>
            <h3>Sendo MEI, posso ter funcionários?</h3>
          </label>
          <div className={styles.content}>
            <p>
              Sim. Quem é MEI pode contratar até um funcionário, porém a pessoa
              contratada não pode ser seu cônjuge. Além disso deve-se seguir
              todas as normas da CLT, pagando o piso salarial da categoria ou um
              salário mínimo.
            </p>
          </div>
        </div>
        <h4>PARA MEI - NOTA FISCAL (NFe)</h4>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc9"></input>
          <label htmlFor="acc9">
            <h2>09</h2>
            <h3>Quem possui MEI pode emitir nota fiscal?</h3>
          </label>
          <div className={styles.content}>
            <p>
              Sim. Quem é CNPJ MEI pode emitir notas fiscais (NFe) de produto ou
              serviço, de acordo com sua atividade.
            </p>
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc10"></input>
          <label htmlFor="acc10">
            <h2>10</h2>
            <h3>Para o MEI é obrigado fazer nota fiscal (NFe)?</h3>
          </label>
          <div className={styles.content}>
            <p>
              Não. Para o MEI não é obrigatória a emissão de nota fiscal para o
              consumidor pessoa física, somente quando o consumidor for outra
              empresa, salvo quando esse destinatário emitir nota fiscal de
              entrada.
            </p>
          </div>
        </div>
        <h4>PARA ABRIR SEU CNPJ MEI VEJA O QUE VOCÊ PRECISA SABER</h4>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc11"></input>
          <label htmlFor="acc11">
            <h2>11</h2>
            <h3>
              O que preciso para me tornar um Microempreendedor Individual -
              MEI?
            </h3>
          </label>
          <div className={styles.content}>
            <p>
              Basta clicar neste botão abaixo e fazer seu cadastro que nossa
              equipe cuidará de todo o processo de abertura para você sair da
              informalidade e ter o seu CNPJ MEI.
            </p>
            <a href="#">Cadastro</a>
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc12"></input>
          <label htmlFor="acc12">
            <h2>12</h2>
            <h3>Quando finalizar o cadastro, o que irei receber?</h3>
          </label>
          <div className={styles.content}>
            <p></p>
            <ol>
              <li>O Cartão do CNPJ;</li>
              <li>O Certificado de Microempreendedor Individual - CCMEI;</li>
              <li>Modelo de Relatório de Receitas Brutas;</li>
              <li>
                As guias DAS para recolhimento das contribuições ao INSS, ISS
                e/ou ICMS referentes ao ano, poderão ser baixadas pelo Painel do
                Cliente.
              </li>
            </ol>
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc13"></input>
          <label htmlFor="acc13">
            <h2>13</h2>
            <h3>Qualquer pessoa pode ser MEI?</h3>
          </label>
          <div className={styles.content}>
            <p>
              Não. Veja abaixo quem não pode ser MEI: Servidores públicos
              federais em atividade; Servidores público municipais e estaduais
              devem verificar os critérios da legislação de sua cidade e estado;
              Pensionista do RGPS/INSS inválido. Ao se registrar como MEI, o
              pensionista inválido é considerado recuperado e apto para o
              trabalho, sendo assim, deixará de receber a pensão por morte;
              Pessoas titulares, sócias ou administradoras de outra empresa, que
              possuem mais de um estabelecimento, e, se sócio de sociedade
              empresária de natureza contratual ou administrador de sociedade
              empresária, sócio ou administrador em sociedade simples.
            </p>
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc14"></input>
          <label htmlFor="acc14">
            <h2>14</h2>
            <h3>
              Fazendo o cadastro do CNPJ MEI posso perder benefícios que já
              estou recebendo do governo?
            </h3>
          </label>
          <div className={styles.content}>
            <p>
              Veja abaixo, vamos mostrar o que acontece com cada benefício após
              se tornar MEI: Beneficiários de aposentadoria por invalidez e
              pensionista inválido: perdem o benefício ao fazerem um CNPJ MEI;
              Trabalhador registrado no regime CLT: Pode se formalizar como MEI,
              mas, no caso de demissão sem justa causa, não terá direito ao
              Seguro-Desemprego; Pessoa que recebe Auxílio Doença: Pode se
              registrar como MEI, mas perde o benefício no mês da formalização;
              Pessoa que recebe Seguro-Desemprego: A pessoa está apta para se
              formalizar como MEI, porém poderá ter a suspensão do benefício.
              Nesse caso, deverá recorrer nos postos de atendimento do
              Ministério do Trabalho; Pessoas que recebem Bolsa Família: O
              registro no MEI não causa cancelamento do programa Bolsa Família,
              apenas quando há aumento na renda familiar que seja acima do
              limite do programa. Dessa forma, o cancelamento do benefício não
              ocorre de imediato, somente no ano de atualização cadastral;
              Benefício de Prestação Continuada da Assistência Social
              (BPC-LOAS): O beneficiário não perde o benefício de imediato. No
              entanto, poderá acontecer avaliação do Serviço Social, ao
              identificar aumento da renda familiar, que comprove que não existe
              necessidade de prorrogar o benefício ao portador de necessidades.
            </p>
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc15"></input>
          <label htmlFor="acc15">
            <h2>15</h2>
            <h3>Posso me registrar como MEI e manter a carteira assinada?</h3>
          </label>
          <div className={styles.content}>
            <p>
              Sim. É possível possuir carteira assinada no regime CLT e exercer
              atividades como MEI
            </p>
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc16"></input>
          <label htmlFor="acc16">
            <h2>16</h2>
            <h3>
              Quais atividades são permitidas para Microempreendedor Individual?
            </h3>
          </label>
          <div className={styles.content}>
            <p>
              Clique no botão abaixo e confira a lista completa de atividades
              permitidas para o Microempreendedor Individual - MEI.
            </p>
            <a href="#">ATIVIDADES PERMITIDAS</a>
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc17"></input>
          <label htmlFor="acc17">
            <h2>17</h2>
            <h3>
              Se eu tiver o nome sujo no SPC/SERASA, é possível realizar o
              registro do CNPJ MEI?
            </h3>
          </label>
          <div className={styles.content}>
            <p>
              Sim, com certeza, não existem impedimentos para que pessoas com
              nome sujo façam o registro do CNPJ MEI.
            </p>
          </div>
        </div>
        <div className={styles.tab}>
          <input type="checkbox" name="acc" id="acc18"></input>
          <label htmlFor="acc18">
            <h2>18</h2>
            <h3>Quanto vou pagar para ter um CNPJ MEI?</h3>
          </label>
          <div className={styles.content}>
            <p>
              Nós cobramos uma taxa única pra o registro do CNPJ MEI. Além
              disso, o MEI deve pagar mensalmente para o governo os tributos de
              R$ 49,90 (INSS), acrescido de R$ 5,00 (para Prestadores de
              Serviço) ou R$ 1,00 (para Comércio e Indústria) por meio do DAS
              (carnê) que enviaremos por e-mail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
