import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
`
export const NavContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 80%;
  }
`
export const NavImage = styled.img`
  width: 120px;
`
export const NavItemsMainContainer = styled.div`
  display: flex;
`

export const NavItemsContainer = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavItemsContainerForMediumAndAboveDevices = styled.ul`
  padding: 0;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const NavItem = styled.li`
  list-style-type: none;
  margin-left: 20px;
  @media screen and (min-width: 768px) {
    margin-left: 40px;
  }
`
export const NavItemButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
`
export const ProfileImage = styled.img`
  width: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutButton = styled.button``

export const NavMenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const MenuItemName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: black;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 12px;
`
export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const ContactUsText = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  padding-left: 12px;
`
export const ContactLogosContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
  margin-top: 15px;
  margin-bottom: 15px;
`

export const ContactLogo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 12px;
`
export const ContactUsMessage = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  padding-left: 12px;
`
