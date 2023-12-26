import styled from 'styled-components'

export const VideoItemDetailsMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  padding-bottom: 30px;
`
export const VideoItemDetailsResponsiveContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    height: 85vh;
  }
`
export const VideoItemDetailsContentContainer = styled.div`
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
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`
export const ReactPlayerContainer = styled.div`
  height: 300px;
  @media screen and (min-width: 768px) {
    height: 480px;
  }
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitleText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
`
export const TextAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`
export const ViewsAndCountText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-right: 12px;
`
export const ButtonsContainer = styled.div`
  display: flex;
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

export const ButtonText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-left: 5px;
`
export const Separator = styled.hr`
  width: 100%;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 20px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
`
export const ChannelImage = styled.img`
  height: 50px;
  width: 50px;
  flex-shrink: 0;
  margin-top: 18px;
  margin-right: 12px;
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
