import styled from "styled-components";
import { Card } from "react-bootstrap";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const HeaderCard = styled(Card)`
  background: ${props => (props.isLightTheme ? '' : '#000')};
  color: ${props => (props.isLightTheme ? '' : '#fff')};
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

export const HeaderHomeLabel = styled.h3`
  top: 0.5em;
  left: 0.4em;
  right: 0;
`;

export const TopTweets = styled.span`
  margin-left: auto;
  margin-top: 0.5em;
  font-size: 1.5em;
`;

export const SwitchIcon = styled.div`
  position: relative;
  bottom: 0.4rem;
  font-size: 1.25rem;
  left: 0.3rem;
  color: #fff;
`;

export const ProfileAvatarContainer = styled.div`
  width: 4em;
  height: 4em;
`;
