import Image from "next/image";
import styles from "./styles.module.css"

export const AreasContent = () => {
  return (
    <section className={styles.areasSection}>
      <h1 className={styles.title}>Nossas áreas de atuação</h1>
      <p className={styles.subtitle}>
      O escritório prima por uma atuação técnica, responsável e atualizada, orientada pela satisfação dos clientes, pela excelência no exercício profissional e pelos valores de responsabilidade, eficiência e confiança.
      </p>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
            src="/area-atuacao_background.jpg"
            alt="Vista frontal de mulher de negócios elegante segurando prancheta com espaço para texto"
            fill
            className={styles.image}
          />
        </div>

        <div className={styles.textBlock}>
          <p>
          Com anos de experiência no mercado jurídico, contamos com um escopo abrangente nas áreas Previdenciária, Trabalhista, Sindical, Administrativa, Cível e de Defesa do Consumidor, entre outras. Nossa equipe possui sólida formação e especialização, permitindo um atendimento de qualidade e conduzido com rigor ético.
          </p>

          <p>
          Nosso compromisso é oferecer uma atuação ágil, precisa e alinhada às necessidades de cada cliente, contribuindo para relações mais justas e para o fortalecimento do acesso à justiça.
          </p>

          <p>
          Cada área do escritório é formada por profissionais dedicados ao tema, garantindo atendimento personalizado e adequado à situação apresentada.
          </p>

          <p>
          A seguir, você pode conhecer nossas áreas e identificar aquela que melhor atende à sua demanda:
          </p>
        </div>
      </div>
    </section>
  );
};
