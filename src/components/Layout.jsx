import { useState } from "react";
import Footer from "./Footer.jsx";
import Header from "./Header.jsx";
import styles from "./Layout.module.scss"
import RouteComponent from "./RouteComponent.jsx";

export default function Layout({ children, route }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <a href="#main-content" className={styles.srOnly}>Skip to Content</a>
      <div>HEADER PLACEHOLDER</div>
        {/*<Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>*/}
      <div className={styles.page}
           style={{ height: isMenuOpen && "0px", overflow: isMenuOpen && "hidden"}}>
        <div id="main-content" className={styles.content}>
          {children}
        </div>
      <div>ROUTE COMPONENT PLACEHOLDER</div>
        {/*<RouteComponent route={route}/>*/}
      <Footer />
      </div>
    </div>
  );
}

