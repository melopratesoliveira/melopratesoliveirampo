import styles from "./styles.module.css";
import { FilialCard } from "../filiais-card";

export const FiliaisContent = async ({filiais}) => {
  return (
    <section className={styles.filiaisSection}>
      <h1 className={styles.title}>FILIAIS</h1>

      <p className={styles.description}>
        A Melo Prates e Oliveira está presente em diferentes regiões do país <br />
        Confira abaixo nossas unidades e encontre a mais conveniente para você.
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
