import { H3, Paragraph, SmallText, Strong } from "../../components";
import { Section } from "../Section.styles";
import { ContactForm, EmailCopy } from "./components";
import {
  ContactContainer,
  ContactFormWrapper,
  ContactHeader,
} from "./Contact.styles";
import { Arrow } from "../../assets/icons/arrow";

const ContactSection = () => (
  <Section $variant="center" id="contact">
    <ContactContainer>
      <ContactFormWrapper>
        <ContactForm />
        <SmallText>
          Si prefieres, puedes escribirme directamente al siguiente correo
          electrónico:
        </SmallText>
        <EmailCopy />
      </ContactFormWrapper>
      <ContactHeader>
        <H3>📬 Contacto</H3>
        <Paragraph>
          <Strong $green>¡Gracias por visitar mi portafolio!</Strong> 😊 Si
          tienes alguna pregunta o propuesta de colaboración,{" "}
          <Strong $blue>completa el formulario</Strong> y me pondré en contacto
          contigo.
        </Paragraph>
        <Arrow />
      </ContactHeader>
    </ContactContainer>
  </Section>
);

export default ContactSection;
