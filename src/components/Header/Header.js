import React, { useCallback, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ProfileAvatar from "../Profile/ProfileAvatar";
import { MoonFill, SunFill } from "react-bootstrap-icons";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentUser } from "../../redux/store/user/userSlice";
import { toggleTheme } from "../../redux/store/theme/themeSlice";
import Switch from "react-switch";
import {
  HeaderContainer,
  HeaderCard,
  HeaderAvatar,
  HeaderHomeLabel,
  TopTweets,
  SwitchIcon,
  ProfileAvatarContainer
} from "./Header.style";

const Header = () => {
  const [currentUser, setCurrentUser] = useState();
  const [checked, setChecked] = useState(false);
  const dispatch = useDispatch();
  const themeValue = useSelector((state) => state.theme.isLightTheme);

  const fetchCurrentUser = useCallback(async () => {
    try {
      const {
        data: { results },
      } = await axios.get(`https://randomuser.me/api/`);
      if (results.length) {
        setCurrentUser(results[0]);
        dispatch(updateCurrentUser(results[0]));
      } else {
        throw new Error("Something went wrong here...");
      }
    } catch (e) {
      /**
       * TODO: Add error handlers for avatar images
       */
      console.log(e);
    }
  }, []);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  const toggleThemeHandler = (checked) => {
    setChecked(checked);
    dispatch(toggleTheme());
    console.log(themeValue);
  };

  return (
    <HeaderContainer>
      <HeaderCard isLightTheme={themeValue}>
        <Card.Body>
          <div className="d-flex">
            <HeaderAvatar>
              {currentUser && (
                <ProfileAvatarContainer>
                  <ProfileAvatar
                    avatar={currentUser.picture.large}
                  />
                </ProfileAvatarContainer>

              )}
            </HeaderAvatar>

            <HeaderHomeLabel className="p-0 m-0 position-relative font-weight-bold">
              Home
            </HeaderHomeLabel>
            <TopTweets>
              <Switch
                onChange={(checked) => toggleThemeHandler(checked)}
                uncheckedIcon={
                  <SwitchIcon>
                    <SunFill />
                  </SwitchIcon>
                }
                checked={checked}
                checkedIcon={
                  <SwitchIcon>
                    <MoonFill />
                  </SwitchIcon>
                }
                offColor="#007bff"
                onColor="#4a4e51"
              />
            </TopTweets>
          </div>
        </Card.Body>
      </HeaderCard>
    </HeaderContainer>
  );
};

export default Header;
