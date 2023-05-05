import Formu from "./cabecalho";
import Info from "./Info";
import Section from "./Section";
import Faq from "./Faq";
import Footer from "./Footer";

export default function MainContainer({ children }) {
  return (
    <>
      <Formu />
      <Info />
      <Section />
      <Faq />
      <Footer />
    </>
  );
}
