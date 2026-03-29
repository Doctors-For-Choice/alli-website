import flyerDigital from "../../assets/files/alli_app-flyer-digital.pdf"
import flyerPrint from "../../assets/files/alli_app-flyer-print.pdf"
import businessCards from "../../assets/files/alli_app-business-cards.pdf"
import qrAppStore from "../../assets/images/alli_app-qr-app_store.png"
import qrPlayStore from "../../assets/images/alli_app-qr-google_play_store.png"
import PlayStoreButton from "../../assets/images/PlayStoreButton.svg"
import AppStoreButton from "../../assets/images/AppStoreButton.svg"
import ContentSection from "../ContentSection";
import Layout from "../Layout";
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
          <p>Für einen einfachen Zugang zur App bieten wir Download-Flyer zum Druck an, auf denen die Patient*innen nur einen QR-Code mit ihrem Handy scannen müssen:</p>
          <div className={styles.two_columns}>
            <p><a href={flyerDigital} download={"Alli-App-Flyer-Digital.pdf"}>Einzelner Flyer</a></p>
            <p><a href={flyerPrint} download={"Alli-App-Flyer-Print.pdf"}>Print-Version: vier Flyer pro Seite</a></p>
          </div>
          <h3>QR-Codes</h3>
            <p>Zur Gestaltung und Integration in Ihre eigenen Unterlagen bieten wir hier auch die QR-Codes allein an. Sie können diese durch einen Klick auf das jeweilige Bild herunterladen.</p>
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
          <h3>Visitenkarten</h3>
          <p>Gerne schicken wir Ihnen auch Alli-Visitenkarten (gegen eine kleine Spende) für die Praxis zu! Senden Sie uns dafür gerne eine Mail an <a href="mailto:buero@doctorsforchoice.de">buero@doctorsforchoice.de</a>.</p>
          <p>Alternativ können Sie diese auch mit der folgenden Datei selbst ausdrucken.</p>
          <p>
            <a
              href={businessCards}
              download={"Alli-App-Visitenkarten.pdf"}
            >
            Visitenkarten
            </a>
          </p>
        </ContentSection>
      </Layout>
    )
}
export default Information;
