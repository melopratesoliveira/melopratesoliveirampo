import Image from "next/image";
import styles from "./styles.module.css";
import { FilialCard } from "@/components/filiais/filiais-card";
import { CustomSwiper } from "@/components/common/swiper";

export const SectionFiliais = async ({filiais}) => {

  if (!filiais || filiais.length === 0) {
    return (
      <section className={styles.filiaisSection}>
        <Image
          src="/home_filiais_background.png"
          alt="Fundo da seção Filiais"
          fill
          className={styles.backgroundImage}
          quality={100}
          priority
        />

        <div className={styles.overlay}>
          <div className={styles.content}>
            <span className={styles.tag}>
              FILIAIS
              <div className={styles.divider}></div>
            </span>
            <h2 className={styles.title}>ONDE ESTAMOS LOCALIZADOS?</h2>
            <p className={styles.subtitle}>
              No momento não temos filiais cadastradas.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const slides = filiais.map((filial) => (
    <FilialCard
      key={filial.nome}
      nome={filial.nome}
      endereco={filial.endereco}
      imagem={filial.imagem?.url || "/imagem-filial.png"} 
    />
  ));

  return (
    <section className={styles.filiaisSection}>
      <Image
        src="/home_filiais_background.png"
        alt="Fundo da seção Filiais"
        fill
        className={styles.backgroundImage}
        quality={100}
        priority
      />

      <div className={styles.overlay}>
        <div className={styles.content}>
          <span className={styles.tag}>
            FILIAIS
            <div className={styles.divider}></div>
          </span>

          <h2 className={styles.title}>ONDE ESTAMOS LOCALIZADOS?</h2>

          <p className={styles.subtitle}>
            A Melo Prates e Oliveira perto de você. <br />
            Quer saber qual a filial mais perto de você?
            <br />
            Confira abaixo e entre em contato. Será um prazer te atender e
            oferecer a solução exata que você precisa.
          </p>

          <div className={styles.carouselWrapper}>
            <CustomSwiper
              slides={slides}
              pagination
              autoplay={true}
              autoplayDelay={3500}
              spaceBetween={24}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className={styles.filiaisSwiper}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
