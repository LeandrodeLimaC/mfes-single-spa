import {
  PersonOutlineOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { Icon, Logo, Navigate, Separator } from "../../atoms";
import { Container, GroupMenu, Wrapper } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Logo />
        <GroupMenu>
          <Navigate path="/" children="Home" />
          <Navigate path="/shop" children="Shop" />
          <Navigate path="/our_story" children="Our Story" />

          <Separator dark maxHeight="1.7rem" />

          <Icon cursorPointer>
            <SearchOutlined fontSize="large" />
          </Icon>
          <Icon cursorPointer>
            <ShoppingCartOutlined fontSize="large" />
          </Icon>
          <Icon cursorPointer>
            <PersonOutlineOutlined fontSize="large" />
          </Icon>
        </GroupMenu>
      </Wrapper>
    </Container>
  );
};
