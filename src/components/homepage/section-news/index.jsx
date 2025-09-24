import Image from "next/image";
import styles from "./styles.module.css";
import { CustomSwiper } from "@/components/common/swiper";

export const SectionNews = async ({ novidades }) => {
  const slides = novidades.map((news, index) => (
    <div key={index} className={styles.newsSlide}>
      <div className={styles.imageWrapper}>
        <Image
          src={news.imagem.url}
          alt={news.tituloNovidade}
          fill
          className={styles.image}
        />
      </div>
      <div className={styles.newsContent}>
        <h3 className={styles.newsTitle}>{news.tituloNovidade}</h3>
        <p className={styles.newsText}>{news.descricaoNovidade}</p>
      </div>
    </div>
  ));

  return (
    <section className={styles.section_two}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.tag}>NOVIDADES</span>
          <div className={styles.divider}></div>
          <h2 className={styles.title}>CONFIRA AS NOSSAS NOVIDADES.</h2>
          <p className={styles.description}>
            Nosso maior objetivo é poder disponibilizar uma experiência única,
            entregar as melhores soluções jurídicas e que cada cliente tenha um
            resultado completo com 100% de satisfação.
          </p>
        </div>

        <div className={styles.right}>
          <CustomSwiper
            slides={slides}
            pagination={true}
            autoplay={false}
            autoplayDelay={8000}
            className={styles.newsSwiper}
          />
        </div>
      </div>
    </section>
  );
};
