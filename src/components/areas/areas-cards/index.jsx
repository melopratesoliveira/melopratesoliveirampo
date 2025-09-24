import Image from "next/image";
import styles from "./styles.module.css";

const cards = [
  {
    icon: "/icones/iPrevidenciario.png",
    title:
      "Previdenciário - Regime Geral (INSS) e Próprio (Servidores Públicos)",
    text: "Com uma alta especialização no sistema previdenciário, atendemos os diversos tipos de ações em torno dos benefícios por incapacidade do cliente, como auxílio-acidente, auxílio-doença ou aposentadoria por invalidez. Com isso, buscamos soluções que melhor atendam o segurado, garantindo que ele receba os seus direitos de forma correta, desde a aposentadoria, a salário-maternidade, pensão por morte entre diversos outros. Além disso, abrangemos também soluções para regime próprio, atendendo servidores públicos e os auxiliando e solucionando em seus casos.",
  },
  {
    icon: "/icones/iTrabalhista.png",
    title: "TRABALHISTA",
    text: "Lutamos em defesa de todos os direitos e prerrogativas que são necessárias e obrigatórios para o trabalhador, sejam eles individuais ou coletivos. Na busca por justiça dentro da sociedade, temos ênfase e grande experiência na responsabilidade extracontratual do empregador, como por exemplo: acidente de trabalho, doença ocupacional, horas extras e acúmulo de funções, assédio moral, reconhecimento de vínculo empregatício; equiparação salarial; bancários (incorporação de função, desconstituição de cargo de confiança, assédio moral, doenças ocupacionais) entre outros.",
  },
  {
    icon: "/icones/iSindical.png",
    title: "SINDICAL",
    text: "Nossos serviços também estão aptos para atuação da na defesa de sindicatos em todos os âmbitos críticos que o cliente necessite, inclusive patrocinando ações e dissídios coletivos.",
  },
  {
    icon: "/icones/iAdministrativo.png",
    title: "ADMINISTRATIVO",
    text: "No setor administrativo atuamos em defesa dos interesses do cidadão perante a Administração Pública, garantindo os seus direitos e bens que a sociedade o resguarda. Como por exemplo diferenças salariais para servidores públicos em situações diversas (insalubridade, horas extras, desvio de função, cumprimento de vantagens legais e negociadas), concursos públicos. Estamos a postos para também prestar a defesa para os servidores públicos em processos administrativos disciplinares de forma ética e objetiva",
  },
  {
    icon: "/icones/iCivel.png",
    title: "CÍVEL",
    text: "Você pode contar também com nossos serviços em áreas de direito civil, sendo ela consultiva ou contenciosa. Dentro desse setor estamos disponíveis para atender casos como sucessões (inventário), família (pensão alimentícia, divórcio, regulação de guarda), coisas (imobiliário, indenização por danos morais e materiais, etc.), entre outras necessidades. Consumidor: Compreendendo o quanto os consumidores sofrem diariamente em diversas situações, contamos com a especialização no setor a fim de auxiliá-los na defesa de tudo que os seus direitos os garante. Podendo vir desde problemas relacionados a produtos com defeitos, serviços feitos incorretamente, vícios redibitórios, problemas com contratos e práticas abusivas de comércio (inscrição indevida no SPC/SERASA, atraso de voo, contratos abusivos, entre outros).",
  },
];

export const PraticeAreasCard = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Conheça nossas áreas e verifique qual a ideal a que melhor te atende no
        momento:
      </h2>
      <div className={styles.grid}>
        {cards.map((card, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.mobileCard}>
              <div className={styles.IconAndTitle}>
                <Image
                  src={card.icon}
                  alt={`ícone ${card.title}`}
                  width={82}
                  height={82}
                  className={styles.icon}
                />
                <h3 className={styles.cardTitle}>{card.title}</h3>
              </div>
              <p className={styles.cardText}>{card.text}</p>
            </div>

            <Image
              src={card.icon}
              alt={`ícone ${card.title}`}
              width={82}
              height={82}
              className={`${styles.icon} ${styles.desktopCard}`}
            />
            <div className={styles.desktopCard}>
              <div className={styles.textWrapper}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardText}>{card.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
