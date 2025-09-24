"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";
import { IoClose } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

export const OpenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 782);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <>
      <button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isOpen && isMobile ? (
          <IoClose size={40} color="#fff" />
        ) : (
          <RiMenu3Line />
        )}
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          <IoClose />
        </button>

        <div className={styles.logoWrapper}>
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo-melopratesoliveira.png"
              alt="Logo"
              width={150}
              height={60}
            />
          </Link>
        </div>

        <ul className={styles.navList}>
          <li>
            <Link href="/sobre" onClick={() => setIsOpen(false)}>
              SOBRE NÓS
            </Link>
          </li>
          <li>
            <Link href="areas-de-atuacao" onClick={() => setIsOpen(false)}>
              ÁREAS DE ATUAÇÃO
            </Link>
          </li>
          <li>
            <Link href="/filiais" onClick={() => setIsOpen(false)}>
              FILIAIS
            </Link>
          </li>
          <li>
            <Link href="/profissionais" onClick={() => setIsOpen(false)}>
              PROFISSIONAIS
            </Link>
          </li>
          <li>
            <Link href="/trabalhe-conosco" onClick={() => setIsOpen(false)}>
              TRABALHE CONOSCO
            </Link>
          </li>          
        </ul>

        <div className={styles.socials}>
          <Link href="/https://www.linkedin.com/company/melo-prates-e-oliveira-advogados-associados">
            <Image
              src="/icones/iLinkedin.png"
              alt="LinkedIn"
              width={48}
              height={48}
            />
          </Link>
          <Link href="https://www.instagram.com/mpoadvocacia/">
            <Image
              src="/icones/iInstagramm.png"
              alt="Facebook"
              width={38}
              height={38}
            />
          </Link>
          <Link href="https://wa.me/554896490073">
            <Image
              src="/icones/iWhats.png"
              alt="WhatsApp"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
    </>
  );
};
