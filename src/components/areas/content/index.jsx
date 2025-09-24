import Image from "next/image";
import styles from "./styles.module.css"

export const AreasContent = () => {
  return (
    <section className={styles.areasSection}>
      <h1 className={styles.title}>Nossas áreas de atuação</h1>
      <p className={styles.subtitle}>
        O escritório prima pela atuação diferenciada e inovadora, buscando a
        satisfação dos clientes, a excelência no trato profissional, e a
        valorização da responsabilidade, da eficiência e confiança.
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
            Com anos no mercado jurídico, nosso escopo conta com uma abrangência
            de atendimento em Previdenciário, Trabalhista, Sindical,
            Administrativo, Cível, Consumidor, entre outros. Com uma experiência
            sólida e vasta especialização, entregamos total qualidade e a melhor
            solução para cada caso que é apresentado.
          </p>

          <p>
            Em todos os âmbitos buscamos uma solução excepcional, contamos com
            profissionais experientes, com o foco em uma entrega ágil, prática e
            eficiente para cada vez mais irmos em busca de um país mais justo e
            com menos desigualdade social.
          </p>

          <p>
            Através disso, cada área conta com um time especializado no assunto,
            tornando assim a relação com o cliente única e personalizada,
            garantindo eficácia e acima de tudo satisfação e confiança para quem
            busca contar com nossos serviços. Conheça nossas áreas e verifique
            qual a ideal a que melhor te atende no momento:
          </p>
        </div>
      </div>
    </section>
  );
};
