import { fireEvent, render, screen } from "@testing-library/react";
import Tweet from "../../contents/Tweet/Tweet";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";
import ActionNav from "../../components/ActionNav/ActionNav";
import CreateTweetModal from "./CreateTweetModal";
import { toggle } from "../../redux/store/modal/modalSlice";

describe("CreateTweetModal Component", () => {
  it("renders CreateTweetModal, users does not enter a value in the textbox and the tweet  button should be disabled", async () => {
    const { getByRole, findByRole } = render(
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
  });

  it("renders CreateTweetModal, users does not enter a value in the textbox and the tweet  button should be disabled", async () => {
    store.dispatch(toggle());
    const { getByRole } = render(
      <Provider store={store}>
        <CreateTweetModal />
      </Provider>
    );

    store.dispatch(toggle());
    const actions = store.getState();
    expect(actions.modal.isCreateTweetModalOpen).toBe(true);
    const textareaElement = getByRole.toString('textbox');
  });
});
