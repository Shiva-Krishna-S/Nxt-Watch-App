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

export const NavMenuItemsContainer = styled.ul`
  padding-left: 0;
`
export const MenuItem = styled.li`
  list-style-type: none;
`
export const MenuItemName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`
