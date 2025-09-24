import Image from "next/image";
import styles from "./styles.module.css";
import { OpenMenu } from "../menu-aberto";
import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.hamburguer_menu}>
        <OpenMenu />
      </div>

      <div className={styles.spacer} />

      <div className={styles.socialIcons}>
      <Link href="https://www.linkedin.com/company/melo-prates-e-oliveira-advogados-associados" target="_blank" rel="noopener noreferrer">
        <Image
          src="/icones/iLinkedin.png"
          alt="LinkedIn"
          width={48}
          height={48}
        />
      </Link>

      <Link href="https://www.instagram.com/mpoadvocacia/" target="_blank" rel="noopener noreferrer">
        <Image
          src="/icones/iInstagramm.png"
          alt="Facebook"
          width={38}
          height={38}
        />
      </Link>

      <Link href="https://wa.me/554896490073" target="_blank" rel="noopener noreferrer">
        <Image
          src="/icones/iWhats.png"
          alt="WhatsApp"
          width={30}
          height={30}
        />
      </Link>
    </div>
    </aside>
  );
}
