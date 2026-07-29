import AlliTitle from "../AlliTitle.jsx";
import ContentSection from "../ContentSection.jsx";
import Layout from "../Layout.jsx";
import styles from "./Home.module.scss"
import app_banner from "../../assets/images/app-banner.png"
import PlayStoreButton from "../../assets/images/PlayStoreButton.svg"
import AppStoreButton from "../../assets/images/AppStoreButton.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Trans, useTranslation } from "react-i18next";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
    const { t } = useTranslation("home");
    return(
        <div className={styles.home}>
            <Layout route={t("title")}>
                <ContentSection>
                    <p>
                        <Trans
                            i18nKey="description"
                            components={[
                                <AlliTitle className="alliTitleHome" key="0" />,
                                <em className={styles.emphasized} key="1" />,
                                <em className={styles.emphasized} key="2" />,
                                <em className={styles.emphasized} key="3" />
                            ]}
                        >{t("description")}</Trans>
                    </p>
                </ContentSection>
                <ContentSection>
                    <h2>
                        {t("featureHeading")}
                    </h2>
                    <ul>
                        {t("featureBulletpoints").split("\n").map((item, i) => {
                            return <li key={i}>
                                <Trans i18nKey="featureDescription"
                                       components={{ 1: <b/> }}>
                                    {item}
                                </Trans>
                            </li>
                        })}
                    </ul>
                </ContentSection>
                <ContentSection>
                    <h2>Download</h2>
                    <img className={styles.img} src={app_banner} alt="Ein Banner, dass die App auf einem mobilen Endgerät darstellt." />

                    <div className={styles.imgContainer}>
                        <button>
                            <a href="https://play.google.com/store/apps/details?id=de.doctorsforchoice.alli">
                                <FontAwesomeIcon icon={faGooglePlay}
                                                 alt="Google Play Store" />
                                <span>Google Play Store</span>
                            </a>
                        </button>
                        <button>
                            <a href="https://apps.apple.com/us/app/alli/id6737808794">
                                <FontAwesomeIcon icon={faApple}
                                                 alt="Apple Store"
                                />
                                <span>Apple Store</span>
                            </a>
                        </button>
                    </div>

                </ContentSection>
            </Layout>
        </div>
      )
  }
export default Home;
