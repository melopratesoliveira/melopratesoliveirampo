import Image from "next/image";
import styles from "./styles.module.css";

const cards = [
  {
    icon: "/icones/iPrevidenciario.png",
    title:
      "Previdenciário - Regime Geral (INSS) e Próprio (Servidores Públicos)",
    text: "Atuamos em demandas relacionadas aos benefícios previdenciários, como auxílio-doença, aposentadoria por invalidez, auxílio-acidente, pensão por morte, salário-maternidade, aposentadorias por tempo de contribuição e demais prestações previstas em lei.Também prestamos assessoria e representação a servidores públicos em questões envolvendo o Regime Próprio de Previdência, orientando e conduzindo medidas necessárias à defesa dos seus direitos.",
  },
  {
    icon: "/icones/iTrabalhista.png",
    title: "TRABALHISTA",
    text: "Atuamos na defesa dos direitos trabalhistas, individuais e coletivos, em casos como acidentes de trabalho, doenças ocupacionais, horas extras, acúmulo de funções, assédio moral, reconhecimento de vínculo, equiparação salarial, além de demandas específicas de categorias profissionais, como bancários (incorporação de função, desconstituição de cargo de confiança, assédio moral, direitos convencionais, entre outros).",
  },
  {
    icon: "/icones/iSindical.png",
    title: "SINDICAL",
    text: "Nossa atuação sindical possui abrangência nacional e larga experiência na defesa coletiva dos trabalhadores. Representamos centrais sindicais e dezenas de sindicatos de diversos segmentos — como bancários, vigilantes, comerciários, portuários, servidores públicos, professores, entre outros — sempre com foco na proteção dos direitos coletivos e na efetividade da representação de classe. Prestamos assessoria completa às entidades sindicais, incluindo acompanhamento estratégico, consultivo e contencioso, além de patrocínio de ações judiciais e dissídios coletivos. Nosso compromisso é fortalecer a atuação sindical com técnica, responsabilidade e profundo conhecimento das especificidades de cada categoria profissional.",
  },
  {
    icon: "/icones/iAdministrativo.png",
    title: "ADMINISTRATIVO",
    text: " Atuamos na defesa dos direitos de cidadãos e servidores públicos perante a Administração Pública, em temas como diferenças remuneratórias, vantagens legais, concursos públicos e demais relações jurídico-administrativas.Também realizamos a defesa de servidores em processos administrativos disciplinares, com atuação técnica e objetiva.",
  },
  {
    icon: "/icones/iCivel.png",
    title: "CÍVEL",
    text: "Atendemos demandas de Direito Civil, tanto consultivas quanto contenciosas, envolvendo sucessões (inventários), família (divórcio, guarda, alimentos), responsabilidade civil, contratos, questões imobiliárias, entre outras. Na área de Direito do Consumidor, atuamos em situações como defeitos em produtos, serviços inadequadamente prestados, vícios redibitórios, práticas abusivas, problemas contratuais, inscrição indevida em cadastros de crédito, atrasos de voo, entre outros casos previstos na legislação consumerista.",
  },
];

export const PraticeAreasCard = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Conheça nossas áreas e verifique a que melhor te atende no
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
