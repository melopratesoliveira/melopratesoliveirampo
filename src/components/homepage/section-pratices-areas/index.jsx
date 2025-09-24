import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";
import Link from "next/link";

const cards = [
  {
    icon: "/icones/iPrevidenciario.png",
    title: "PREVIDENCIÁRIO - REGIME GERAL E PRÓPRIO",
    text: "Com uma alta especialização no sistema previdenciário, atendemos os diversos tipos de ações em torno dos benefícios por incapacidade do cliente, como auxílio-acidente, auxílio-doença ou aposentadoria por invalidez.",
  },
  {
    icon: "/icones/iTrabalhista.png",
    title: "TRABALHISTA",
    text: "Lutamos em defesa de todos os direitos e prerrogativas que são necessárias e obrigatórias para o trabalhador, sejam eles individuais ou coletivos.",
  },
  {
    icon: "/icones/iSindical.png",
    title: "SINDICAL",
    text: "Nossos serviços também estão aptos para atuação na da defesa de sindicatos em todos os âmbitos críticos que o cliente necessite, inclusive patrocinando ações e dissídios coletivos.",
  },
  {
    icon: "/icones/iAdministrativo.png",
    title: "ADMINISTRATIVO",
    text: "No setor administrativo atuamos em defesa dos interesses do cidadão perante a Administração Pública, garantindo os seus direitos e bens que a sociedade o resguarda.",
  },
  {
    icon: "/icones/iCivel.png",
    title: "CÍVEL",
    text: "Você pode contar também com nossos serviços em áreas de direito civil, sendo ela consultiva ou contenciosa.",
  },
];

export const SectionPracticeAreas = () => {
  const renderedCards = cards.map((card, index) => (
    <div className={styles.card} key={index}>
      <Image
        src={card.icon}
        alt={`ícone ${card.title}`}
        width={82}
        height={82}
        className={styles.icon}
      />
      <div className={styles.textWrapper}>
        <h3 className={styles.cardTitle}>{card.title}</h3>
        <p className={styles.cardText}>{card.text}</p>
      </div>
    </div>
  ));

  return (
    <section className={styles.sectionPractice}>
      <div className={styles.contentWrapper}>
        <span className={styles.tag}>
          ÁREAS DE ATUAÇÃO
          <div className={styles.divider}></div>
        </span>
        <h2 className={styles.title}>NOSSAS ÁREAS DE ATUAÇÃO</h2>
        <p className={styles.subtitle}>
          O escritório prima pela atuação{" "}
          <strong>diferenciada e inovadora</strong>, buscando a satisfação dos
          clientes, a excelência no trato profissional, e a valorização da
          responsabilidade, da eficiência e confiança.
        </p>

        <CustomSwiper
          slides={renderedCards}
          slidesPerView={1}
          spaceBetween={20}
          pagination
          mobileOnly
          fallbackClass={styles.grid}
          autoplay={true}
          className={styles.practiceSwiper}
        />

        <Link href="/areas-de-atuacao">
          <button className={styles.button}>SAIBA MAIS</button>
        </Link>
      </div>
    </section>
  );
};
