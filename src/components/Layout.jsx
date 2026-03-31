import { useState } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import styles from "./Layout.module.scss"
import Route from "./Route.jsx";

export default function Layout({ children, route }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <a href="#main-content" className={styles.srOnly}>Skip to Content</a>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      <div className={styles.page} style={{ height: isMenuOpen && "0px", overflow: isMenuOpen && "hidden"}}>
        <div id="main-content" className={styles.content}>
          {children}
        </div>
      <Route route={route}/>
      <Footer />
      </div>
    </div>
  );
}

