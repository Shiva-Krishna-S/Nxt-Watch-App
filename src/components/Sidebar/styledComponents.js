import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  max-width: 200px;
  flex-shrink: 0;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const OptionsContainer = styled.div`
  flex-grow: 1;
`
export const OptionContainer = styled(Link)`
  display: flex;
  align-items: center;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 12px;
  text-decoration: none;
`
export const OptionText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
`
export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
export const ContactUsText = styled.p`
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
