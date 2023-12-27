import styled from 'styled-components'

export const VideoItemDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
`
export const VideoItemDetailsResponsiveContainer = styled.div`
  display: flex;
  min-height: 90vh;
  @media screen and (min-width: 768px) {
    height: 85vh;
  }
`
export const VideoItemDetailsContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? ' #000000' : '#ffffff')};
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-grow: 1;
    overflow-y: auto;
  }
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  @media screen and (min-width: 576px) {
    margin: 15px;
  }
  @media screen and (min-width: 768px) {
    margin: 20px;
  }
`
export const ReactPlayerContainer = styled.div`
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 500px;
  }
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;
`
export const VideoTitleText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    font-size: 21px;
  }
`
export const TextAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const StatusDetails = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`
export const StatText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin-bottom: 0;
  margin-right: 10px;
  color: ${props => (props.isDarkTheme ? '#616e7c' : '#909090')};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const StatDotOne = styled.p`
  display: flex;
  margin-bottom: 7px;
  margin-right: 10px;
  color: ${props => (props.isDarkTheme ? '#616e7c' : '#909090')};
`
export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const ReactionButton = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 12px;
  font-weight: bold;
  color: ${props => (props.isActive ? '#2563eb' : '#64748b')};
`

export const ButtonText = styled.span`
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 5px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const Separator = styled.hr`
  width: 100%;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 20px;
  margin-top: 20px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
`
export const ChannelImage = styled.img`
  height: 50px;
  width: 50px;
  flex-shrink: 0;
  margin: 10px;
  margin-top: 5px;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin-bottom: 0;
  margin-right: 10px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const DescriptionText = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  padding-left: 10px;
  margin-bottom: 0;
  margin-right: 10px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : ' #475569')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`

export const InProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  @media screen and (min-width: 768px) {
    min-height: 85vh;
  }
`
