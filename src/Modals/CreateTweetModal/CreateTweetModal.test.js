import {
  act,
  cleanup,
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import Tweet from "../../contents/Tweet/Tweet";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";
import ActionNav from "../../components/ActionNav/ActionNav";
import TweetList from "../../components/TweetList/TweetList";
import CreateTweetModal from "./CreateTweetModal";


describe("CreateTweetModal Component", () => {
  test("renders CreateTweetModal upon click on Desktop and Small Screens", async () => {
    const { getByText, rerender } = render(
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
    expect(
      getByText(`Woohoo, you're reading this text in a modal!`)
    ).toBeInTheDocument();

    // Re-render for small devices
    rerender(
      <Provider store={store}>
        <TweetList isMobileScreen={true}/>
        <CreateTweetModal />
      </Provider>
    );

    const buttonWidgetElementMobile = await screen.findByTestId(
      "create-tweet-widget-button"
    );

    expect(buttonWidgetElementMobile).toBeInTheDocument();
     
    expect(
      getByText(`Woohoo, you're reading this text in a modal!`)
    ).toBeInTheDocument();

  });
});
