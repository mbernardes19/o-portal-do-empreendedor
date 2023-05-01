import Navbar from "./Navbar";
import Formu from "./cabecalho";
import Info from "./Info";
import Section from "./Section";
import Faq from "./Faq";
import Footer from "./Footer";
import styles from "../styles/MainContainer.module.css";

export default function MainContainer({ children }) {
  return (
    <>
      <div className={styles.container}>{children}</div>
      <Navbar />
      <Formu />
      <Info />
      <Section />
      <Faq />
      <Footer />
    </>
  );
}
