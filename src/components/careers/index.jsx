"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";

export const CareersContent = ({ vagas }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className={styles.careersSection}>
      <h1 className={styles.title}>TRABALHE CONOSCO</h1>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nisl ac
        nulla maximus tincidunt in ac turpis. In malesuada blandit massa, quis
        vestibulum erat rhoncus ac.
      </p>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/carreiras_background.jpg"
            alt="Imagem com profissionais analisando documentos"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <h2 className={styles.vagasTitle}>Confira nossas vagas em aberto:</h2>

          {vagas.length === 0 ? (
            <p className={styles.noVagas}>
              No momento não temos vagas disponíveis. Fique de olho em nossas
              atualizações!
            </p>
          ) : (
            vagas.map((vaga, index) => {
              const responsabilidades = vaga.responsabilidades
                ? vaga.responsabilidades.split("\n")
                : [];
              const qualificacoes = vaga.qualificacoes
                ? vaga.qualificacoes.split("\n")
                : [];

              return (
                <div key={index} className={styles.vagaBox}>
                  <button
                    className={styles.vagaHeader}
                    onClick={() => toggleAccordion(index)}
                  >
                    {vaga.tituloVaga}
                    <span className={styles.icon}>
                      {activeIndex === index ? "▲" : "▼"}
                    </span>
                  </button>

                  {activeIndex === index && (
                    <div className={styles.vagaContent}>
                      <div className={styles.vagaSection}>
                        <h3>DESCRIÇÃO DA VAGA</h3>
                        <p>{vaga.descricaoVaga}</p>
                      </div>

                      <div className={styles.vagaSection}>
                        <h3>RESPONSABILIDADES</h3>
                        <ul>
                          {responsabilidades.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className={styles.vagaSection}>
                        <h3>QUALIFICAÇÕES</h3>
                        <ul>
                          {qualificacoes.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <button className={styles.ctaButton}>
                        QUERO ME CANDIDATAR
                      </button>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};
