import styled from 'styled-components'

export const NotFoundPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const NotFoundPageResponsiveContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    height: 90vh;
  }
`

export const NotFoundContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? ' #000000' : '#ffffff')};
  padding-top: 10px;
  padding-left: 20px;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    overflow-y: auto;
    padding-top: 20px;
    padding-left: 40px;
  }
`

export const NotFoundView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  padding-top: 30px;
  @media screen and (min-width: 768px) {
    min-height: 90vh;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
export const NotFoundImage = styled.img`
  width: 50%;
  max-width: 450px;
  max-height: 350px;
`
export const NotFoundHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  text-align: center;
`
export const NotFoundMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
`
