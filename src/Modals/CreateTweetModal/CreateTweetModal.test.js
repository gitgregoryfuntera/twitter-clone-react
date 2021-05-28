import {
  findByTestId,
  fireEvent,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import Tweet from "../../contents/Tweet/Tweet";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";

import MatchMediaMock from "jest-matchmedia-mock";

let matchMedia;

const renderComponent = () =>
  render(
    <Provider store={store}>
      <Tweet />
    </Provider>
  );
describe("CreateTweetModal Component", () => {
  beforeAll(() => {
 
  });

//   afterEach(() => {
//     matchMedia.clear();
//   });
  test("renders CreateTweetModal upon click", async () => {
    // const target = {
    //     innerHeight: 600,
    //     innerWidth: 800,
    //     addEventListener: jest.fn(),
    //     removeEventListener: jest.fn()
    // }
    // console.log(target);
    const  { getByText } = renderComponent();
    global.matchMedia = media => ({
        addListener: () => {},
        removeListener: () => {},
        matches: media === '(min-width: 545px)',
    });
    const buttonWidgetElement = await screen.findByTestId(
      "create-tweet-widget-button"
    );
    expect(buttonWidgetElement).toBeInTheDocument();

    fireEvent.click(buttonWidgetElement);
    expect(
      getByText(`Woohoo, you're reading this text in a modal!`)
    ).toBeInTheDocument();
  });
});
