import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const Header = ({ variant = "default" }) => {
  return (
    <header
      className={`${styles.header} ${
        variant === "absolute" ? styles.headerAbsolute : ""
      }`}
    >
      <Link href="/">
        <Image
          src="/logo-melopratesoliveira.png"
          alt="Melo, Prates & Oliveira"
          width={500}
          height={500}
          priority
        />
      </Link>
    </header>
  );
};
