import Image from "next/image";
import styles from "./styles.module.css";

export const AboutContent = () => {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.title}>Sobre nós</h1>
      <p className={styles.subtitle}>
        Atuando de maneira eficiente e especializada, a Melo Prates e Oliveira já está há 36 anos no mercado,
        oferecendo soluções jurídicas de qualidade para todos os casos que lhe são confiados.
      </p>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/sobre_background.png"
            alt="Imagem institucional"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <p>
          Iniciamos nossa jornada em Santa Catarina e, hoje, o escritório conta com 13 advogados e sedes físicas em outros estados do país (Alagoas, Ceará, Amazonas e Mato Grosso do Sul), além de atendimento por meios telemáticos em quase todo o território nacional.
          </p>

          <p>
            O escritório <strong>Melo Prates e Oliveira</strong> compreende que cada cliente é único, e que cada situação é peculiar e demanda um atendimento ético, responsável e especializado. Atuamos com compromisso e transparência, sempre orientados pelos valores que defendemos e pela busca de uma sociedade mais justa e igualitária.
          </p>

          <p>
          Temos o propósito de oferecer um atendimento correto, técnico e atento, gerando qualidade e confiança para todos que buscam nossos serviços — e nos tornando um parceiro seguro para pessoas, entidades e empresas.
          </p>
        </div>
      </div>
    </section>
  );
};
