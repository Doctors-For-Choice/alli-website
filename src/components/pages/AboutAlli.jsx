import Layout from "../Layout.jsx";
import styles from "./AboutAlli.module.scss";
import ContentSection from "../ContentSection.jsx";
import {useTranslation} from "react-i18next";

const AboutAlli = () => {
    const { t } = useTranslation("aboutAlli");
    return(
        <div className={styles.aboutAlli}>
        <Layout route={t("title")}>
            <ContentSection>
            <h1>{t("title")}</h1>
            {t("content").split("\n").map((line, index) => <p key={index}>{line}</p>)}
            </ContentSection>
            <ContentSection>
            <h2>{t("functionalityHeading")}</h2>
            <ul>
                {t("functionalities").split("\n").map((line, index) => <p key={index}>{line}</p>)}
            </ul>
            </ContentSection>
        </Layout>
        </div>
    )
}
export default AboutAlli
