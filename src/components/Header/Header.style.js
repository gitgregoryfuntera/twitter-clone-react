import styled from "styled-components";
import { Card } from "react-bootstrap";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const HeaderCard = styled(Card)`
  @media (min-width: 500px) {
    margin-left: 8em;
  }
  @media (min-width: 1000px) {
    margin-right: 25em;
  }
`;

export const HeaderAvatar = styled.span`
  @media (min-width: 500px) {
    display: none;
  }
`;
