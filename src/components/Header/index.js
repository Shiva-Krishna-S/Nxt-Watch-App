import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  NavbarContainer,
  NavContentContainer,
  NavImage,
  NavItemsMainContainer,
  NavItemsContainer,
  NavItemsContainerForMediumAndAboveDevices,
  NavItem,
  NavItemButton,
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
      <NavbarContainer>
        <NavContentContainer>
          <NavImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
          <NavItemsMainContainer>
            <NavItemsContainer>
              <NavItem>
                <NavItemButton>
                  <FaMoon size={25} />
                </NavItemButton>
              </NavItem>
              <NavItem>
                <NavItemButton onClick={this.onClickMenu}>
                  <GiHamburgerMenu size={25} />
                </NavItemButton>
              </NavItem>
              <NavItem>
                <NavItemButton onClick={this.onClickLogout}>
                  <FiLogOut size={25} />
                </NavItemButton>
              </NavItem>
            </NavItemsContainer>
            <NavItemsContainerForMediumAndAboveDevices>
              <NavItem>
                <NavItemButton>
                  <FaMoon size={25} />
                </NavItemButton>
              </NavItem>
              <NavItem>
                <NavItemButton>
                  <ProfileImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
                </NavItemButton>
              </NavItem>
              <NavItem>
                <LogoutButton onClick={this.onClickLogout}>Logout</LogoutButton>
              </NavItem>
            </NavItemsContainerForMediumAndAboveDevices>
          </NavItemsMainContainer>
        </NavContentContainer>
        {showMenuItems ? this.renderMenuItems() : null}
      </NavbarContainer>
    )
  }
}

export default withRouter(Header)
