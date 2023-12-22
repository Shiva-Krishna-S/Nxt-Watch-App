import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {
  NavbarContainer,
  NavContentContainer,
  NavImage,
  NavItemsMainContainer,
  NavItemsContainer,
  NavItemsContainerForMediumAndAboveDevices,
  NavItem,
  ProfileImage,
  LogoutButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NavbarContainer>
      <NavContentContainer>
        <NavImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
        <NavItemsMainContainer>
          <NavItemsContainer>
            <NavItem>
              <FaMoon size={25} />
            </NavItem>
            <NavItem>
              <GiHamburgerMenu size={25} />
            </NavItem>
            <NavItem>
              <FiLogOut size={25} onClick={onClickLogout} />
            </NavItem>
          </NavItemsContainer>
          <NavItemsContainerForMediumAndAboveDevices>
            <NavItem>
              <FaMoon size={25} />
            </NavItem>
            <NavItem>
              <ProfileImage src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" />
            </NavItem>
            <NavItem>
              <LogoutButton onClick={onClickLogout}>Logout</LogoutButton>
            </NavItem>
          </NavItemsContainerForMediumAndAboveDevices>
        </NavItemsMainContainer>
      </NavContentContainer>
    </NavbarContainer>
  )
}

export default withRouter(Header)
