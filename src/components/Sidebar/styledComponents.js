import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  max-width: 250px;
  flex-shrink: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const OptionsContainer = styled.div`
  flex-grow: 1;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 16px;
  background-color: ${props => props.bgColor};
`
export const OptionText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 14px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`
export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactUsText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  padding-left: 12px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`
export const ContactLogosContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 12px;
  margin-top: 10px;
  margin-bottom: 10px;
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
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`
