import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'

import NxtVideosContext from '../../context/NxtVideosContext'

import 'reactjs-popup/dist/index.css'

import {
  NavbarContainer,
  NavContentContainer,
  WebsiteLogoLink,
  NavImage,
  NavItemsMainContainer,
  NavItemsContainerForMediumAndAboveDevices,
  NavItemButton,
  NavItemsContainer,
  ProfileImage,
  LogoutButton,
  NavMenuItemsContainer,
  MenuItemName,
  StyledLink,
  PopupButton,
  PopupMessageText,
  ModalContainer,
  NavItemCloseButton,
  ModalContainerForMenuItems,
  MenuItem,
} from './styledComponents'

const Header = props => (
  <NxtVideosContext.Consumer>
    {value => {
      const {isDarkTheme, onChangeTheme} = value

      const {match} = props
      const {path} = match

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const onClickThemeButton = () => {
        onChangeTheme()
      }

      const activeTabBgColor = isDarkTheme ? '#383838' : '#f1f5f9'

      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      const iconColor = isDarkTheme ? '#ffffff' : '#000000'

      return (
        <NavbarContainer>
          <NavContentContainer>
            <WebsiteLogoLink to="/">
              <NavImage src={websiteLogoUrl} alt="website logo" />
            </WebsiteLogoLink>

            <NavItemsMainContainer>
              <NavItemButton onClick={onClickThemeButton} data-testid="theme">
                {isDarkTheme ? (
                  <FiSun size={25} color={iconColor} />
                ) : (
                  <FaMoon size={25} color={iconColor} />
                )}
              </NavItemButton>

              <NavItemsContainer>
                <>
                  <Popup
                    modal
                    trigger={
                      <NavItemButton>
                        <GiHamburgerMenu size={25} color={iconColor} />
                      </NavItemButton>
                    }
                  >
                    {close => (
                      <ModalContainerForMenuItems isDarkTheme={isDarkTheme}>
                        <NavItemCloseButton
                          type="button"
                          onClick={() => close()}
                        >
                          <IoMdClose
                            size={20}
                            color={isDarkTheme ? '#ffffff' : '#231f20'}
                          />
                        </NavItemCloseButton>
                        <NavMenuItemsContainer>
                          <StyledLink to="/">
                            <MenuItem
                              bgColor={path === '/' ? activeTabBgColor : null}
                            >
                              <AiFillHome
                                color={path === '/' ? '#ff0000' : '#475569'}
                                size={17}
                              />
                              <MenuItemName
                                isDarkTheme={isDarkTheme}
                                isActive={path === '/'}
                              >
                                Home
                              </MenuItemName>
                            </MenuItem>
                          </StyledLink>
                          <StyledLink to="/trending">
                            <MenuItem
                              bgColor={
                                path === '/trending' ? activeTabBgColor : null
                              }
                            >
                              <HiFire
                                color={
                                  path === '/trending' ? '#ff0000' : '#475569'
                                }
                                size={17}
                              />
                              <MenuItemName
                                isDarkTheme={isDarkTheme}
                                isActive={path === '/trending'}
                              >
                                Trending
                              </MenuItemName>
                            </MenuItem>
                          </StyledLink>
                          <StyledLink to="/gaming">
                            <MenuItem
                              bgColor={
                                path === '/gaming' ? activeTabBgColor : null
                              }
                            >
                              <SiYoutubegaming
                                color={
                                  path === '/gaming' ? '#ff0000' : '#475569'
                                }
                                size={17}
                              />
                              <MenuItemName
                                isDarkTheme={isDarkTheme}
                                isActive={path === '/gaming'}
                              >
                                Gaming
                              </MenuItemName>
                            </MenuItem>
                          </StyledLink>
                          <StyledLink to="/saved-videos">
                            <MenuItem
                              bgColor={
                                path === '/saved-videos'
                                  ? activeTabBgColor
                                  : null
                              }
                            >
                              <BiListPlus
                                color={
                                  path === '/saved-videos'
                                    ? '#ff0000'
                                    : '#475569'
                                }
                                size={17}
                              />
                              <MenuItemName
                                isDarkTheme={isDarkTheme}
                                isActive={path === '/saved-videos'}
                              >
                                Saved Videos
                              </MenuItemName>
                            </MenuItem>
                          </StyledLink>
                        </NavMenuItemsContainer>
                      </ModalContainerForMenuItems>
                    )}
                  </Popup>
                </>

                <>
                  <Popup
                    modal
                    trigger={
                      <NavItemButton>
                        <FiLogOut size={25} color={iconColor} />
                      </NavItemButton>
                    }
                  >
                    {close => (
                      <ModalContainer>
                        <div>
                          <PopupMessageText>
                            Are you sure, you want to logout?
                          </PopupMessageText>
                        </div>
                        <div>
                          <PopupButton type="button" onClick={() => close()}>
                            Cancel
                          </PopupButton>
                          <PopupButton type="button" onClick={onClickLogout}>
                            Confirm
                          </PopupButton>
                        </div>
                      </ModalContainer>
                    )}
                  </Popup>
                </>
              </NavItemsContainer>

              <NavItemsContainerForMediumAndAboveDevices>
                <NavItemButton>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </NavItemButton>

                <>
                  <Popup modal trigger={<LogoutButton>Logout</LogoutButton>}>
                    {close => (
                      <ModalContainer>
                        <div>
                          <PopupMessageText>
                            Are you sure, you want to logout?
                          </PopupMessageText>
                        </div>
                        <div>
                          <PopupButton type="button" onClick={() => close()}>
                            Cancel
                          </PopupButton>
                          <PopupButton type="button" onClick={onClickLogout}>
                            Confirm
                          </PopupButton>
                        </div>
                      </ModalContainer>
                    )}
                  </Popup>
                </>
              </NavItemsContainerForMediumAndAboveDevices>
            </NavItemsMainContainer>
          </NavContentContainer>
        </NavbarContainer>
      )
    }}
  </NxtVideosContext.Consumer>
)

export default withRouter(Header)
