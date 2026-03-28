import Layout from "../Layout";
import styles from "./Imprint.module.scss";
import ContentSection from "../ContentSection";
import {useTranslation} from "react-i18next";

const Imprint = () => {
    const { t } = useTranslation("imprint");
    return(
        <div className={styles.aboutAlli}>
        <Layout route={t("title")}>
            <ContentSection>
            <div className={styles.section}>
                <h1>{t("title")}</h1>
                <p>
                Doctors for Choice Germany e.V. – Franz-Ehrlich-Str. 12, 12489 Berlin
                </p>
                <h1>Credits</h1>
                {/* <h2>Graphics:</h2>
                <p>
                We utilize illustrations from{" "}
                <a
                    href="https://undraw.co/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Link to undraw.co"
                    className={styles.link}
                >
                    unDraw.co{" "}
                </a>{" "}
                and are incredibly grateful for the open-source illustrations they
                provide.
                </p> */}
                {/* <h2>Icons:</h2> */}
                <p>
                    {t("credits")}{" "}
                <a
                    href="https://fontawesome.com/"
                    aria-label="Link to fontawesome.com"
                    target="_blank"
                    rel="noreferrer"
                    className={styles.link}
                >
                    fontawesome.com
                </a>
                </p>
                <h1>{t("headingDisclaimer")}</h1>
                {t("contentDisclaimer").split("\n").map(line => <p>{line}</p>)}
                <h1>{t("headingCopyright")}</h1>
                {t("contentCopyright").split("\n").map(line => <p>{line}</p>)}
            </div>
            </ContentSection>
        </Layout>
        </div>
    )
}
export default Imprint;
