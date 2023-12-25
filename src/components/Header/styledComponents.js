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
    width: 90%;
    margin: auto;
  }
`
export const NavImage = styled.img`
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 140px;
  }
`
export const NavItemsMainContainer = styled.div`
  display: flex;
  align-items: center;
`

export const NavItemButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    margin-left: 35px;
  }
`
export const NavItemsContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const NavItemsContainerForMediumAndAboveDevices = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ProfileImage = styled.img`
  width: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid blue;
  border-radius: 4px;
  color: blue;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  padding-top: 5px;
  padding-left: 12px;
  padding-bottom: 5px;
  padding-right: 12px;
  margin-left: 35px;
`

export const NavMenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: none;
  }
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
