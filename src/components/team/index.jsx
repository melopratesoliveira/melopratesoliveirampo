import styles from "./styles.module.css";

export const TeamContent = async ({ profissionais }) => {
  return (
    <section className={styles.teamSection}>
      <h1 className={styles.title}>profissionais</h1>
      <p className={styles.subtitle}>
        Nosso time é composto por profissionais experientes e qualificados no
        ramo jurídico, com equipes setorizadas e multidisciplinares dentro de
        suas especializações - que irão entregar o resultado que você necessita.
      </p>

      <div className={styles.cardGrid}>
        {profissionais.length === 0 ? (
          <p className={styles.noProfissionais}>
            No momento não temos profissionais cadastrados.
          </p>
        ) : (
          profissionais.map((prof) => (
            <div key={prof.nome} className={styles.card}>
              <div className={styles.cardHeader}>
                <h2 className={styles.cardName}>{prof.nome}</h2>
              </div>
              <div className={styles.divisor} />
              <p className={styles.cardText}>{prof.descricao}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
