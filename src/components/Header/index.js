import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {IoMdClose} from 'react-icons/io'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import NxtVideosContext from '../../context/NxtVideosContext'
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
} from './styledComponents'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  render() {
    return (
      <NxtVideosContext.Consumer>
        {value => {
          const {isDarkTheme, onChangeTheme} = value
          const onClickThemeButton = () => {
            onChangeTheme()
          }
          const websiteLogoUrl = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <NavbarContainer>
              <NavContentContainer>
                <WebsiteLogoLink to="/">
                  <NavImage src={websiteLogoUrl} alt="website logo" />
                </WebsiteLogoLink>

                <NavItemsMainContainer>
                  <NavItemButton
                    onClick={onClickThemeButton}
                    data-testid="theme"
                  >
                    {isDarkTheme ? <FiSun size={25} /> : <FaMoon size={25} />}
                  </NavItemButton>

                  <NavItemsContainer>
                    <>
                      <Popup
                        modal
                        trigger={
                          <NavItemButton>
                            <GiHamburgerMenu size={25} />
                          </NavItemButton>
                        }
                      >
                        {close => (
                          <ModalContainerForMenuItems>
                            <NavItemCloseButton
                              type="button"
                              onClick={() => close()}
                            >
                              <IoMdClose size={20} color="#231f20" />
                            </NavItemCloseButton>
                            <NavMenuItemsContainer>
                              <StyledLink to="/">
                                <AiFillHome />
                                <MenuItemName>Home</MenuItemName>
                              </StyledLink>
                              <StyledLink to="/trending">
                                <HiFire />
                                <MenuItemName>Trending</MenuItemName>
                              </StyledLink>
                              <StyledLink to="/gaming">
                                <SiYoutubegaming />
                                <MenuItemName>Gaming</MenuItemName>
                              </StyledLink>
                              <StyledLink to="/saved-videos">
                                <BiListPlus />
                                <MenuItemName>Saved Videos</MenuItemName>
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
                            <FiLogOut size={25} />
                          </NavItemButton>
                        }
                      >
                        {close => (
                          <ModalContainer>
                            <div>
                              <PopupMessageText>
                                Are you sure you want to logout?
                              </PopupMessageText>
                            </div>
                            <div>
                              <PopupButton
                                type="button"
                                onClick={() => close()}
                              >
                                Cancel
                              </PopupButton>
                              <PopupButton
                                type="button"
                                onClick={this.onClickLogout}
                              >
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
                      <Popup
                        modal
                        trigger={<LogoutButton>Logout</LogoutButton>}
                      >
                        {close => (
                          <ModalContainer>
                            <div>
                              <PopupMessageText>
                                Are you sure you want to logout?
                              </PopupMessageText>
                            </div>
                            <div>
                              <PopupButton
                                type="button"
                                onClick={() => close()}
                              >
                                Cancel
                              </PopupButton>
                              <PopupButton
                                type="button"
                                onClick={this.onClickLogout}
                              >
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
  }
}

export default withRouter(Header)
