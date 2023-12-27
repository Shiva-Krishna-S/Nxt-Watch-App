import styled from 'styled-components'

export const NotFoundPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const NotFoundPageResponsiveContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    height: 85vh;
  }
`

export const NotFoundContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? ' #000000' : '#ffffff')};
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    overflow-y: auto;
  }
`

export const NotFoundView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding-top: 30px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    min-height: 85vh;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
export const NotFoundImage = styled.img`
  width: 50%;
  max-width: 450px;
  max-height: 350px;
  margin: 20px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`
export const NotFoundMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
`
