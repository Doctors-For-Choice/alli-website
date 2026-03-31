import React from 'react';
import BmbfLogo from '../assets/images/logo_BMBF.svg';
import PrototypefundLogo from '../assets/images/logo_prototypefund.svg';
import DoctorsForChoiceLogo from '../assets/images/logo_DfC.svg';

import styles  from "./Footer.module.scss"
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h1 className={styles.text}>Funded by</h1>
            <div className={styles.imgContainer}>
                <a href="https://prototypefund.de/" target="_blank" rel="noreferrer" aria-label="Open website of Prototypefund">
                    <img className={styles.img} src={PrototypefundLogo} alt="Logo of Prototypefund" />
                </a>
                <a href="https://www.bmbf.de/bmbf/de/home/home_node.html" target="_blank" rel="noreferrer" aria-label="Open Website of BmBF">
                    <img src={BmbfLogo} className={styles.img} alt="Logo of Bundesministerium für Bildung und Forschung (BMBF)" />
                </a>
                <a href="https://doctorsforchoice.de/" target="_blank" rel="noreferrer" aria-label="Open Website of Doctors for Choice e.V.">
                    <img src={DoctorsForChoiceLogo} className={styles.img} alt="Logo of Doctors For Choice Germany e.V." />
                </a>
            </div>
        </footer>
    )
}

export default Footer;
