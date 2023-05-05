import Formu from "./Cabecalho";
import Info from "./Info";
import Section from "./Section";
import Faq from "./Faq";
import Footer from "./footer";

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
