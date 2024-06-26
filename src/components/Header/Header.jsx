import { HeaderContainer, NavBarContainer } from "./Header.styles";
import NavBar from "../Navbar/Navbar";

const Header = () => {
  return (
    <HeaderContainer>
      <NavBarContainer>
        <NavBar />
      </NavBarContainer>
    </HeaderContainer>
  );
};

export default Header;
