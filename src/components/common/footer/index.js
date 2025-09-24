import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLogo}>
          <Image
            src="/logo-melopratesoliveira.png"
            alt="Logo Melo Prates Oliveira"
            width={120}
            height={60}
          />
        </div>

        <nav className={styles.footerMenu}>
          <Link href="/sobre">QUEM SOMOS</Link>
          <Link href="/areas-de-atuacao">ÁREAS DE ATUAÇÃO</Link>
          <Link href="/filiais">FILIAIS</Link>
          <Link href="/profissionais">PROFISSIONAIS</Link>
          <Link href="/trabalhe-conosco">TRABALHE CONOSCO</Link>
        </nav>

        <div className={styles.footerSocial}>
          <Link href="/https://www.linkedin.com/company/melo-prates-e-oliveira-advogados-associados">
            <Image src="/icones/iLinkedin.png" alt="LinkedIn" width={45} height={45} />
          </Link>
          <Link href="https://www.instagram.com/mpoadvocacia/">
            <Image src="/icones/iInstagramm.png" alt="Facebook" width={38} height={38} />
          </Link>
          <Link href="https://wa.me/554896490073">
            <Image src="/icones/iWhats.png" alt="WhatsApp" width={29} height={29} />
          </Link>
        </div>
      </div>

      <hr className={styles.footerDivider} />

      <div className={styles.footerCopy}>
        © Todos os direitos reservados - Melo Prates & Oliveira Advocacia Especializada - 2023
      </div>
    </footer>
  );
};
