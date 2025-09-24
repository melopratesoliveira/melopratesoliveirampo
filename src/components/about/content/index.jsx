import Image from "next/image";
import styles from "./styles.module.css";

export const AboutContent = () => {
  return (
    <section className={styles.aboutSection}>
      <h1 className={styles.title}>Sobre nós</h1>
      <p className={styles.subtitle}>
        Atuando de maneira eficiente e especializada, a Melo Prates e Oliveira já está há 36 anos no mercado,
        entregando as melhores soluções de serviços jurídicos para todos os casos que chegam até nós.
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
            Iniciamos nossa jornada em Santa Catarina e hoje o escritório conta com 13 advogados e sedes físicas em
            outros estados do país (Alagoas, Ceará, Amazonas e Mato Grosso do Sul), além de atendimento por meios
            telemáticos em quase todos os estados localizados no Brasil.
          </p>

          <p>
            O escritório <strong>Melo Prates e Oliveira</strong> compreende que cada cliente é único, cada situação
            é peculiar e exige um atendimento ético e altamente especializado. Nós gostamos de mudar vidas, sempre de
            forma ética, comprometida e transparente, em prol de uma sociedade mais justa e igualitária.
          </p>

          <p>
            Sendo assim, temos o propósito de assegurar e entregar da maneira correta, resultados para todos que
            confiam em nossos serviços, gerando qualidade e confiança, nos tornando o parceiro ideal para sua empresa.
          </p>

          <p>
            Aqui na <strong>Melo Prates e Oliveira</strong> compreendemos que cada cliente é único, cada situação
            é peculiar e merece um cuidado e atenção especializada. Nós gostamos de mudar vidas, sempre de forma ética,
            comprometida e transparente, em prol de uma sociedade mais justa e igualitária.
          </p>

          <p>
            Sendo assim, temos o propósito de assegurar e entregar da maneira correta, resultados para todos que
            confiam em nossos serviços, gerando qualidade e confiança, nos tornando o parceiro ideal para
            soluções das suas demandas jurídicas.
          </p>
        </div>
      </div>
    </section>
  );
};
