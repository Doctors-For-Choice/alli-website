import Layout from "../Layout";
import styles from "./Feedback.module.scss";
import ContentSection from "../ContentSection";
import {Trans, useTranslation} from "react-i18next";

const Feedback = () => {
    const { t } = useTranslation("feedback");
    return(
        <div className={styles.aboutAlli}>
            <Layout route={t("title")}>
                <ContentSection>
                <h1>{t("title")}</h1>
                    <p>
                        <Trans i18nKey="content"
                            components={[<a href="mailto:team@alli-app.com"
                               aria-label="Send us a mail"
                               className={styles.mailSection}
                                key="0"
                            />]
                        }>{t("content")}</Trans>
                    </p>
                </ContentSection>
            </Layout>
        </div>
    )
}
export default Feedback;