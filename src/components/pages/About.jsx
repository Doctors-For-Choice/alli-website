import Layout from "../Layout.jsx";
import ContentSection from "../ContentSection.jsx";
import styles from "./About.module.scss"
import {useTranslation} from "react-i18next";

const About = () => {
  const { t } = useTranslation("aboutUs");

  return (
    <div className={styles.about}>
      <Layout route={t("title")}>
        <ContentSection>
          <h1>{t("title")}</h1>
          {t("content").split("\n").map(line => <p>{line}</p>)}
        </ContentSection>
      </Layout>
    </div>
  )
}

export default About;
