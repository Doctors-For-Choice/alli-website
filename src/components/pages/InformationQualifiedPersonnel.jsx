import flyerDigital from "../../assets/files/alli_app-flyer-digital.pdf"
import flyerPrint from "../../assets/files/alli_app-flyer-print.pdf"
import businessCards from "../../assets/files/alli_app-business-cards.pdf"
import qrAppStore from "../../assets/images/alli_app-qr-app_store.png"
import qrPlayStore from "../../assets/images/alli_app-qr-google_play_store.png"
import PlayStoreButton from "../../assets/images/PlayStoreButton.svg"
import AppStoreButton from "../../assets/images/AppStoreButton.svg"
import ContentSection from "../ContentSection.jsx";
import Layout from "../Layout.jsx";
import styles from "./InformationQualifiedPersonnel.module.scss"
import {Trans, useTranslation} from "react-i18next";

const Information = () => {
  const { t } = useTranslation("information");
    return (
      <Layout route={t("title")}>
        <ContentSection>
          <h1>{t("title")}</h1>
          {t("content").split("\n").map((item, index) => <p key={index}>{item}</p>)}
        </ContentSection>
        <ContentSection>
          <h2>{t("materials")}</h2>
          <p>
            <Trans
              i18nKey="materialsContent"
              components={{ "strong": <strong />}}
            >
              {t("materialsContent")}
            </Trans>
          </p>
          <h3>Flyer</h3>
          <p>{t("flyerDescription")}</p>
          <div className={styles.two_columns}>
            <p><a href={flyerDigital} download={"Alli-App-Flyer-Digital.pdf"}>{t("singleFlyerLayout")}</a></p>
            <p><a href={flyerPrint} download={"Alli-App-Flyer-Print.pdf"}>{t("fourFlyerLayout")}</a></p>
          </div>
          <h3>QR-Codes</h3>
            <p>{t("qrCodesDescription")}</p>
            <div className={styles.two_columns}>
              <div id="android" className={styles.imgContainer}>
                <a href={qrPlayStore} download={"alli_app-qr-google_play_store.png"}>
                  <img
                    src={qrPlayStore}
                    alt="QR Code zum Download für Android aus dem Google Play Store"
                  />
                </a>
                <img
                  alt="Android App aus dem Google Play Store herunterladen"
                  src={PlayStoreButton}
                />
              </div>
              <div id="apple" className={styles.imgContainer}>
                <a href={qrAppStore} download={"alli_app-qr-apple_app_store.png"}>
                  <img
                    src={qrAppStore}
                    alt="QR Code zum Download für iOS aus dem App Store"
                  />
                </a>
                <img
                  src={AppStoreButton}
                  alt="iOS App aus dem App Store herunterladen"
                />
              </div>
            </div>
          <h3>{t("businessCards")}</h3>
          <p>
            <Trans
              i18nKey="businessCardsDescription"
              components={[
                <a href="mailto:buero@doctorsforchoice.de" key="0">buero@doctorsforchoice.de</a>
              ]}
            >
              {t("businessCardsDescription")}
            </Trans>
          </p>
          <p>{t("businessCardsPrintTemplateDescription")}</p>
          <p>
            <a
              href={businessCards}
              download={"Alli-App-Visitenkarten.pdf"}
            >
              {t("businessCards")}
            </a>
          </p>
        </ContentSection>
      </Layout>
    )
}
export default Information;
