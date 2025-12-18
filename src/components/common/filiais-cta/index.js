import Image from "next/image";
import styles from "./styles.module.css";

export const FiliaisCallToAction = () => {
  return (
    <section className={styles.ctaContainer}>
      <div className={styles.ctaContent}>
        <div className={styles.imageWrapper}>
          <Image
            src="/homem-tablet-na-mao-sorrindo.PNG"
            alt="Profissional sorrindo com tablet"
            width={200}
            height={400}
            priority
          />
        </div>

        <div className={styles.textAndButton}>
          <div className={styles.textWrapper}>
            <h2>Precisa de orientação jurídica?</h2>
            <p>
              <strong>
              Entre em contato conosco e saiba mais sobre nossos serviços.
              </strong>
            </p>
            <p>Estamos à disposição para atendê-lo.</p>
          </div>

          <button className={styles.ctaButton}>SOLICITE UMA CONSULTA</button>
        </div>
      </div>
    </section>
  );
};
