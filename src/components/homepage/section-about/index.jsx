import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";

export const SectionAbout = () => {
  return (
    <section className={styles.sectionAbout}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/colegas_analisando_grafico.jpg"
            alt="colegas concentrados analisando graficos discutindo trabalho profissional"
            width={600}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.textContent}>
          <span className={styles.tag}>
            SOBRE NÓS
            <div className={styles.divider}></div>
          </span>
          <h2 className={styles.aboutTitle}>
            SOLUÇÕES JURÍDICAS CONFIÁVEIS PARA O MUNDO REAL
          </h2>
          <p className={styles.description}>
            Atuando de maneira eficiente e especializada, a{" "}
            <strong>Melo Prates e Oliveira</strong> já está há 36 anos no
            mercado, entregando as melhores soluções de serviços jurídicos para
            todos os casos que chegam até nós.
          </p>
          <Link href="/sobre" className={styles.linkHref}>
            <button className={styles.button}>
              <p>SAIBA MAIS</p>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
