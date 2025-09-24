import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionEquipe = () => {
  return (
    <section className={styles.equipeSection}>
      <div className={styles.quemFaz}>
        <span className={styles.tag}>
          PROFISSIONAIS
          <div className={styles.divider}></div>
        </span>
        <h2 className={styles.title}>QUEM FAZ ACONTECER</h2>
        <p className={styles.description}>
          Nosso time é composto por{" "}
          <strong>profissionais experientes e qualificados</strong> no ramo
          jurídico, com equipes setorizadas e{" "}
          <strong>multidisciplinares dentro de suas especializações</strong> –
          que irão entregar o resultado que você necessita.
        </p>
        <Link href="/profissionais">
          <button className={styles.button}>CONHEÇA NOSSO TIME</button>
        </Link>
      </div>

      <div className={styles.trabalheConosco}>
        <div className={styles.text}>
          <span className={styles.tag}>
            TRABALHE CONOSCO
            <div className={styles.divider}></div>
          </span>
          <h3 className={styles.subtitle}>CONFIRA NOSSAS VAGAS EM ABERTO</h3>
          <p className={styles.textDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nisl
            ac nulla maximus tincidunt in ac turpis. In malesuada blandit massa,
            quis vestibulum erat rhoncus ac.
          </p>
          <Link href="/trabalhe-conosco">
            <button className={styles.button}>SAIBA MAIS</button>
          </Link>
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src="/equipe_conversando.jpg"
            alt="Imagem equipe reunida"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};
