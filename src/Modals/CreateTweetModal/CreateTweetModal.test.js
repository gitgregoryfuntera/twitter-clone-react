import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import Tweet from "../../contents/Tweet/Tweet";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";
import ActionNav from "../../components/ActionNav/ActionNav";
import userEvent from "@testing-library/user-event";

describe("CreateTweetModal Component", () => {
  it("renders CreateTweetModal, users does not enter a value in the textbox and the tweet  button should be disabled", async () => {
    const { getByRole } = render(
      <Provider store={store}>
        <Tweet />
        <ActionNav />
      </Provider>
    );

    const buttonWidgetElement = await screen.findByTestId(
      "create-tweet-widget-button"
    );

    expect(buttonWidgetElement).toBeInTheDocument();
    fireEvent.click(buttonWidgetElement);
    const modalButtonElement = getByRole("button", { name: "Tweet" });
    expect(modalButtonElement).toBeDisabled(); // Test Case for tweet button should be disabled

    const textAreaElement = getByRole("textbox"); // Enter an input in the textbox
    expect(textAreaElement).toBeInTheDocument();
    userEvent.type(textAreaElement, "Hello")
      .then(() => {
        expect(textAreaElement).toBe("hello");
        expect(modalButtonElement).toBeEnabled(); // Test for tweet button should be  enabled
      });
  });
});
