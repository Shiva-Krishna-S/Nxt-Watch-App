import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
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
export const ProfileImage = styled.img`
  width: 30px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoutButton = styled.button``
