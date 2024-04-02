import { HeaderWrapper, Navigation, List, ListItem, StyledNavLink, StyledLogo } from "./Header.styled";
import icons from "../../images/icons.svg";
const Header = () => {
  return (
    <HeaderWrapper>
      <Navigation>
        <StyledLogo to="/">
          <svg width={40} height={40}>
            <use href={icons + "#iconn"} />
          </svg>
          RBTua
        </StyledLogo>
        <List>
          <ListItem>
            <StyledNavLink to="catalog">Каталог</StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to="cart">Корзина</StyledNavLink>
          </ListItem>
        </List>
      </Navigation>
    </HeaderWrapper>
  );
};

export default Header;
