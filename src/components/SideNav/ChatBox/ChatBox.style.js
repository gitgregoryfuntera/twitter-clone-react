import styled from "styled-components";
import { Card } from 'react-bootstrap';

export const ChatBoxContainer = styled(Card)`
    position: fixed;
    bottom: 0;
    width: 100%;
    cursor: pointer;
    max-width: 25em;
`

export const ToggleChatBoxIcon = styled.span`
    position: fixed;
    right: 1em;
`