import styled from 'styled-components'

export const SavedVideosPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`
export const SavedVideosPageResponsiveContainer = styled.div`
  display: flex;
  min-height: 90vh;
  @media screen and (min-width: 768px) {
    min-height: 85vh;
  }
`
export const SavedVideosContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? ' #000000' : '#ffffff')};
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    overflow-y: auto;
  }
`
export const SavedVideosList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
`

export const SavedVideosNoResponseView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  padding-top: 30px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    min-height: 85vh;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
export const SavedVideosNoResponseImage = styled.img`
  width: 50%;
  max-width: 450px;
  max-height: 350px;
`
export const SavedVideosNoResponseHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`
export const SavedVideosNoResponseMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#475569')};
`
export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SavedVideosTopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#ebebeb')};
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`
export const IconContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#000000' : '#cbd5e1')};
  border-radius: 50px;
  padding: 5px;
  @media screen and (min-width: 768px) {
    padding: 25px;
  }
`

export const SavedVideosTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  margin-left: 14px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
