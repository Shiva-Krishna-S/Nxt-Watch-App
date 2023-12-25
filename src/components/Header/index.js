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

import NxtVideosContext from '../../context/NxtVideosContext'
import {
  NavbarContainer,
  NavContentContainer,
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
  ContactDetailsContainer,
  ContactUsText,
  ContactLogosContainer,
  ContactLogo,
  ContactUsMessage,
} from './styledComponents'

class Header extends Component {
  state = {showMenuItems: false}

  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  onClickMenu = () => {
    this.setState(prevState => ({
      showMenuItems: !prevState.showMenuItems,
    }))
  }

  renderMenuItems = () => (
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
      <ContactDetailsContainer>
        <ContactUsText>Contact Us</ContactUsText>
        <ContactLogosContainer>
          <ContactLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
          />
          <ContactLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
          />
          <ContactLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
          />
        </ContactLogosContainer>
        <ContactUsMessage>
          Enjoy! Now to see your channels and recommendations!
        </ContactUsMessage>
      </ContactDetailsContainer>
    </NavMenuItemsContainer>
  )

  render() {
    const {showMenuItems} = this.state
    return (
      <NxtVideosContext.Consumer>
        {value => {
          const {isDarkTheme, onChangeTheme} = value
          const onClickThemeButton = () => {
            onChangeTheme()
          }

          return (
            <NavbarContainer>
              <NavContentContainer>
                <NavImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
                <NavItemsMainContainer>
                  <NavItemButton onClick={onClickThemeButton}>
                    {isDarkTheme ? <FiSun size={25} /> : <FaMoon size={25} />}
                  </NavItemButton>

                  <NavItemsContainer>
                    <NavItemButton onClick={this.onClickMenu}>
                      <GiHamburgerMenu size={25} />
                    </NavItemButton>

                    <NavItemButton onClick={this.onClickLogout}>
                      <FiLogOut size={25} />
                    </NavItemButton>
                  </NavItemsContainer>

                  <NavItemsContainerForMediumAndAboveDevices>
                    <NavItemButton>
                      <ProfileImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
                    </NavItemButton>
                    <LogoutButton onClick={this.onClickLogout}>
                      Logout
                    </LogoutButton>
                  </NavItemsContainerForMediumAndAboveDevices>
                </NavItemsMainContainer>
              </NavContentContainer>
              {showMenuItems ? this.renderMenuItems() : null}
            </NavbarContainer>
          )
        }}
      </NxtVideosContext.Consumer>
    )
  }
}

export default withRouter(Header)
