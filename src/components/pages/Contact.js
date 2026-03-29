import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./Contact.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {Trans, useTranslation} from "react-i18next";

const Contact = () => {
  const { t } = useTranslation("contact"); // not passing any namespace will use the defaultNS (by default set to 'translation')
  return (
    <div className={styles.contact}>
      <Layout route={t("title")}>
        <ContentSection>
          <h1>{t("title")}</h1>
          <p>
            {t("content")}
          </p>
          <p>
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
          </p>
        </ContentSection>
      </Layout>
    </div>
  );
};

export default Contact;
