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

export const ModalContainerForMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavItemCloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0;
  margin-bottom: 15px;
  align-self: flex-end;
`

export const NavMenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
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
export const MenuItemName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
`
export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PopupMessageText = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  text-align: center;
`
export const PopupButton = styled.button`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Roboto';
  color: white;
  padding: 8px 15px 8px 15px;
  margin: 8px;
  background-color: blue;
  border: none;
  border-radius: 4px;
  outline: none;
`
