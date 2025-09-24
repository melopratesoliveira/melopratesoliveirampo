import Image from "next/image";
import styles from "./styles.module.css";

export const FilialCard = ({ nome, endereco, imagem }) => {
  const imageUrl = imagem || "/imagem-filial.png";

  return (
    <div className={styles.card}>
      <Image
        src={imageUrl}
        alt={nome}
        width={420}
        height={243}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.nome}>{nome}</h3>

        <p className={styles.endereco}>
          <Image
            src="/icones/iMap.png"
            alt="Ícone de localização"
            width={28}
            height={28}
          />
          {endereco}
        </p>

        <hr className={styles.divisor} />

        <div className={styles.contatoWrapper}>
          <p className={styles.contato}>CONTATO:</p>
          <div className={styles.icons}>
            <Image
              src="/icones/iEmail.png"
              alt="Ícone de email"
              width={25}
              height={25}
            />
            <Image
              src="/icones/iContato.png"
              alt="Ícone de telefone"
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
