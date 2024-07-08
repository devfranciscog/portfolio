import { DownloadSvg, EmailSvg } from "../../assets/icon";
import { H1, H2, PrimaryButton, SecondaryButton } from "../../components";
import SOCIAL_LINKS from "../../constants/socialLinks";
import { HomeButtonWrapper, HomeContent } from "./Home.styles";

const Home = () => {
  return (
    <HomeContent>
      <H1>Francisco Miguel González Placencia</H1>
      <H2>Ingeniero Civil Informático</H2>
      <HomeButtonWrapper>
        <PrimaryButton
          href={SOCIAL_LINKS.curriculum}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Descargar CV"
        >
          <DownloadSvg />
          Descargar CV
        </PrimaryButton>
        <SecondaryButton
          href={SOCIAL_LINKS.email}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enviar Correo Electrónico"
        >
          <EmailSvg />
          Correo Electrónico
        </SecondaryButton>
      </HomeButtonWrapper>
    </HomeContent>
  );
};

export default Home;
