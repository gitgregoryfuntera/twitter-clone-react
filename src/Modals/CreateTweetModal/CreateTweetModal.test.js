import {
  fireEvent,
  render,
  screen,
} from "@testing-library/react";
import Tweet from "../../contents/Tweet/Tweet";
import { store } from "../../redux/store/store";
import { Provider } from "react-redux";
import ActionNav from "../../components/ActionNav/ActionNav";
import ReactTestUtils from "react-dom/test-utils";
import CreateTweetModal from "./CreateTweetModal";
import { toggle } from "../../redux/store/modal/modalSlice";
import { shallow, configure, mount  } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import CreateTweetForm from "../../components/CreateTweetForm/CreateTweetForm";
configure({adapter: new Adapter()});
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
    const wrapper  =  shallow(
      <Provider store={store}>
          <CreateTweetModal />
      </Provider>
    )
    
    // store.dispatch(toggle());

    // const { getByRole } = render(
    //   <Provider store={store}>
    //     <CreateTweetModal />
    //   </Provider>
    // );

    store.dispatch(toggle());
    const actions = store.getState();
    expect(actions.modal.isCreateTweetModalOpen).toBe(true);
    console.log(wrapper.debug());
    
    // expect(wrapper.find(CreateTweetForm)).toHaveLength(1);

    // textInput.simulate('change', {target: {value: 'hello'}});
    // const textareaElement = getByRole('textbox');
    // // textareaElement.value  = 'Hello';
    // ReactTestUtils.Simulate.keyDown(textareaElement, {key: "Enter", keyCode: 13, which: 13});
    // // fireEvent.change(textareaElement, {target: {value: 'Hello'} })
    // expect(textareaElement).not.toHaveValue(null);
    // const modalButtonElement = getByRole("button", { name: "Tweet" });
    // expect(modalButtonElement).not.toBeDisabled();

  });

});
