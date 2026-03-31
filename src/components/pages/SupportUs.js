import ContentSection from "../ContentSection";
import Layout from "../Layout";
import styles from "./SupportUs.module.scss";
import { DonationWidget } from "../DonationWidget.js";
import {useTranslation} from "react-i18next";

const SupportUs = () => {
  const { t} = useTranslation("supportUs");
  return (
    <div className={styles.supportUs}>
      <Layout route="Unterstützung">
        <ContentSection>
          <h1>{t("title")}</h1>
          {t("content").split("\n").map((line, index) => <p key={index}>{line}</p>)}
            <p><a href="https://spenden.twingle.de/doctors-for-choice-germany-e-v/spende/tw5f107dd43e6cc/page" target="_blank" rel="noreferrer">{t("donationWidgetDescription")}</a></p>
            <DonationWidget> </DonationWidget>
        </ContentSection>
        <ContentSection>
          <h1>{t("getInvolvedHeading")}</h1>
          {t("getInvolvedContent").split("\n").map((line, index) => <p key={index}>{line}</p>)}
          {/*<p>Schreibe uns gerne per E-Mail an <a*/}
          {/*    href="mailto:team@alli-app.com"*/}
          {/*    aria-label="Send us a mail"*/}
          {/*    className={styles.link}*/}
          {/*>*/}
          {/*  team@alli-app.com*/}
          {/*</a>, wenn du Interesse hast!</p>*/}
        </ContentSection>
      </Layout>
    </div>
  );
};

export default SupportUs;
