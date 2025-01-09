import { useState } from "react";

import styles from "./Newsletter.module.css";

export function Newsletter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    let hasError = false;

    if (!name.trim()) {
      setNameError("Preencha com seu nome completo");
      hasError = true;
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      setEmailError("Preencha com um e-mail válido");
      hasError = true;
    } else {
      setEmailError("");
    }

    if (hasError) {
      return;
    }

    const payload = { name, email };

    try {
      const response = await fetch(
        "https://corebiz-test-server.onrender.com/api/v1/newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setIsSuccess(true);
        setName("");
        setEmail("");
        setNameError("");
        setEmailError("");
      } else {
        setNameError("");
        setEmailError("Ocorreu um erro ao enviar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      setEmailError("Erro na comunicação com o servidor.");
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setNameError("");
    setEmailError("");
  };

  return (
    <div className={styles.container}>
      {isSuccess ? (
        <div className={styles.successContainer}>
          <p className={styles.successMessage}>
            Seu e-mail foi cadastrado com sucesso!
          </p>
          <p className={styles.descriptionSuccessMessage}>
            A partir de agora você receberá as novidades e ofertas exclusivas.
          </p>
          <div className={styles.containerNewsletterButton}>
            <button type="button" className={styles.newsletterButtonNew} onClick={resetForm}>
              Cadastrar novo e-mail
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className={styles.newletterContainerText}>
            <h2 className={styles.newsletterTitle}>
              Participe de nossas news com promoções e novidades!
            </h2>
          </div>
          <div className={styles.newletterContainer}>
            <div className={styles.newsletterContent}>
              <div className={styles.containerInput}>
                <input
                  type="text"
                  placeholder="Digite seu nome"
                  className={`${styles.newsletterInput} ${
                    nameError ? styles.errorInput : ""
                  }`}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div>
                  {nameError && (
                    <p className={styles.feedbackMessage}>{nameError}</p>
                  )}
                </div>
              </div>
              <div className={styles.containerInput}>
                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  className={`${styles.newsletterInput} ${
                    emailError ? styles.errorInput : ""
                  }`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div>
                  {emailError && (
                    <p className={styles.feedbackMessage}>{emailError}</p>
                  )}
                </div>
              </div>
              <button
                type="submit"
                className={`${styles.newsletterButton} ${
                  nameError || emailError ? styles.buttonGray : ""
                }`}
                onClick={handleSubmit}
              >
                Eu quero!
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
