import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import i18n from "../../utils/i18next.js";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <Layout route="Kontakt">
        <ContentSection>
          <p>
            Hallo, schön, dass du Kontakt zu uns aufnehmen willst! Wir werden uns so schnell wie möglich mit dir in Verbindung setzen. Aufgrund unseres kleinen Teams kann es manchmal allerdings etwas dauern, bis du von uns hörst. Vielen Dank für dein Verständnis und deine Geduld.
          </p>
          <a
            href="mailto:team@alli-app.com"
            aria-label="Send us a mail"
            className={styles.mailSection}
          >
            <FontAwesomeIcon
              className={styles.envelopeIcon}
              icon={faEnvelope}
              aria-hidden="true"
            />
            <div className={styles.link}>team@alli-app.com</div>
          </a>
        </ContentSection>
      </Layout>
    </div>
  );
};

export default Contact;
