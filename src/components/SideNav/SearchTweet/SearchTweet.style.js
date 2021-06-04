import styled from "styled-components";
import { Search } from "react-bootstrap-icons";
export const Input = styled.input`
  width: 80%;
  position: relative;
  left: 1em;
  outline: none;
  border: none;
`;

export const InputContainer = styled.div`
  padding: 1.2em;
  outline: none;
  border-radius: 2;
  border-radius: 50px;
  border: 1px solid;
`;

export const Icon = styled(Search)`
  font-size: 1.2em;
  position: relative;
  left: 4%;
  bottom: 3px;
`;
