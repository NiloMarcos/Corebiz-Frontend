import { isMobile } from "react-device-detect";

import iconContact from "../../assets/iconContact.svg";

import iconCall from "../../assets/iconCall.svg";

import logoCorebizFooter from "../../assets/logo-footer.svg";

import styles from "./Footer.module.css";

export function Footer() {
  if (isMobile) {
    return (
      <div className={styles.container}>
        <div className={styles.local}>
          <div className={styles.containerLocal}>
            <p className={styles.textMain}>Localização</p>
            <p className={styles.textLine}>{""}</p>
            <p className={styles.text}>
              Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphavile SP
            </p>
            <p className={styles.text}> brasil@corebiz.ag</p>
            <p className={styles.text}> +55 11 3090 1039</p>
          </div>
        </div>
        <div className={styles.containerButton}>
          <button className={styles.button} type="button">
            <div className={styles.buttonImgText}>
              <img src={iconContact} alt="Ícone Contato" />
              <p className={styles.buttonText}> ENTRE EM CONTATO</p>
            </div>
          </button>
          <button className={styles.button} type="button">
            <div className={styles.buttonImgText}>
              <img src={iconCall} alt="Ícone consulta online" />
              <p className={styles.buttonText}>
                FALE COM O NOSSO CONSULTOR ONLINE
              </p>
            </div>
          </button>
          <div className={styles.containerLocal02}>
            <p className={styles.textCreated}>Created by</p>
            <div>
              <img src={logoCorebizFooter} alt="Logo Corebiz Footer" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.containerButton}>
        <button className={styles.button} type="button">
          <div className={styles.buttonImgText}>
            <img src={iconContact} alt="Ícone Contato" />
            <p className={styles.buttonText}> ENTRE EM CONTATO</p>
          </div>
        </button>
        <button className={styles.button} type="button">
          <div className={styles.buttonImgText}>
            <img src={iconCall} alt="Ícone consulta online" />
            <p className={styles.buttonText}>
              FALE COM O NOSSO CONSULTOR ONLINE
            </p>
          </div>
        </button>
      </div>
      <div className={styles.local}>
        <div className={styles.containerLocal}>
          <p className={styles.textMain}>Localização</p>
          <p className={styles.textLine}>{""}</p>
          <p className={styles.text}>
            Avenida Andrômeda, 2000. Bloco 6 e 8 - Alphavile SP
          </p>
          <p className={styles.text}> brasil@corebiz.ag</p>
        </div>
        <div className={styles.containerLocal02}>
          <p className={styles.text}> +55 11 3090 1039</p>
          <p className={styles.text}>
            Created by <img src={logoCorebizFooter} alt="Logo Corebiz - Footer" />
          </p>
        </div>
      </div>
    </div>
  );
}
