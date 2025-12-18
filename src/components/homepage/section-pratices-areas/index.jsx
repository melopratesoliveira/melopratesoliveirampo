import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";
import Link from "next/link";

const cards = [
  {
    icon: "/icones/iPrevidenciario.png",
    title: "PREVIDENCIÁRIO - REGIME GERAL E PRÓPRIO",
    text: " Com especialização sólida no sistema previdenciário, atuamos em todas as modalidades de benefícios por incapacidade, como auxílio-acidente, auxílio-doença e aposentadoria por invalidez, além de demandas relacionadas tanto ao Regime Geral quanto ao Regime Próprio de Previdência.",
  },
  {
    icon: "/icones/iTrabalhista.png",
    title: "TRABALHISTA",
    text: "Defendemos os direitos e prerrogativas do trabalhador, em âmbito individual ou coletivo, assegurando o cumprimento das normas legais e a proteção diante de violações contratuais ou institucionais.",
  },
  {
    icon: "/icones/iSindical.png",
    title: "SINDICAL",
    text: "Nossos serviços também contam com larga experiência na defesa coletiva de trabalhadores, atuando em todo o Brasil em favor de centrais sindicais e dezenas de sindicatos de diversos segmentos, tais como bancários, vigilantes, comerciários, portuários, servidores públicos, professores, entre outros.",
  },
  {
    icon: "/icones/iAdministrativo.png",
    title: "ADMINISTRATIVO",
    text: "No âmbito administrativo, atuamos na defesa dos interesses do cidadão perante a Administração Pública, garantindo a observância de seus direitos e a proteção dos bens que lhes são assegurados pela legislação.",
  },
  {
    icon: "/icones/iCivel.png",
    title: "CÍVEL",
    text: "Também prestamos assessoria em questões de direito civil, abrangendo tanto demandas consultivas quanto contenciosas, de acordo com as necessidades do cliente.",
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
          <button className={styles.button}><p>SAIBA MAIS</p></button>
        </Link>
      </div>
    </section>
  );
};
