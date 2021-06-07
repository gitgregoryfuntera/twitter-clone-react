import { fireEvent, render, screen } from "@testing-library/react";
import CreateTweetModal from "../../Modals/CreateTweetModal/CreateTweetModal";
import CreateTweetForm from "./CreateTweetForm";

describe('CreateTweetForm Component', () => {
    it ('renders textarea and user able to change values in the text area', () => {
        const { getByRole } = render(<CreateTweetForm/>)
        const textAreaElement = getByRole('textbox');
        fireEvent.change(textAreaElement, {target: {value: 'Hello World'}});
        expect(textAreaElement.value).toBe('Hello World');
    });

});