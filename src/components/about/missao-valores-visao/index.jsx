import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";

const cardData = [
  {
    icon: "/icones/iMissao.png",
    title: "MISSÃO",
    text: "Defender o cliente com grande estrutura técnica multidisciplinar e alta capacitação dos advogados e colaboradores, a fim de contribuir para o desenvolvimento do projeto de país instituído na Constituição Federal de diminuição da desigualdade social.",
  },
  {
    icon: "/icones/iVisao.png",
    title: "VISÃO",
    text: "Atuar por meio de critérios técnicos e científicos, valorizando a simplicidade, a transparência e a acessibilidade, com a melhor tecnologia disponível no mercado.",
  },
  {
    icon: "/icones/iValores.png",
    title: "VALORES",
    text: "Ética e comprometimento na defesa intransigente de direitos, com responsabilidade social, criatividade, inovação e lealdade ao interesse do cliente.",
  },
];

export const MissionVisionValues = () => {
  const cards = cardData.map((item, index) => (
    <div className={styles.card} key={index}>
      <Image
        src={item.icon}
        alt={`Ícone ${item.title}`}
        width={64}
        height={64}
        className={styles.icon}
      />
      <h3 className={styles.cardTitle}>{item.title}</h3>
      <p className={styles.cardText}>{item.text}</p>
    </div>
  ));

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>CONHEÇA NOSSA MISSÃO E VALORES</h2>

      <CustomSwiper
        slides={cards}
        pagination
        mobileOnly
        autoplay={true}
        fallbackClass={styles.cardsContainer}
        className={styles.mobileSwiper}
      />
    </section>
  );
};
