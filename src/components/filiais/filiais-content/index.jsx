import styles from "./styles.module.css";
import { FilialCard } from "../filiais-card";

export const FiliaisContent = async ({filiais}) => {
  return (
    <section className={styles.filiaisSection}>
      <h1 className={styles.title}>FILIAIS</h1>

      <p className={styles.description}>
        A Melo Prates e Oliveira perto de você
        Quer saber qual a filial mais perto de você? Confira abaixo e entre em contato.
        Será um prazer te atender e oferecer a solução exata que você precisa.
      </p>

      <div className={styles.cardsGrid}>
        {filiais.length === 0 ? (
          <p className={styles.noFiliais}>
            No momento não temos filiais cadastradas.
          </p>
        ) : (
          filiais.map((filial) => (
            <FilialCard
              key={filial.nome}
              nome={filial.nome}
              endereco={filial.endereco}
              imagem={filial.imagem?.url}
            />
          ))
        )}
      </div>
    </section>
  );
};
