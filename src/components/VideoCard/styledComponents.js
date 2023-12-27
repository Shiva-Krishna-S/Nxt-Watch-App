import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardItem = styled.li`
  list-style-type: none;
  width: 100%;
  min-height: 280px;
  max-height: 380px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f1f5f9')};
  @media screen and (min-width: 576px) and (max-width: 991px) {
    width: 49%;
  }
  @media screen and (min-width: 992px) {
    width: 33%;
  }
`
export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
`

export const VideoThumbnailImage = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
`
export const ChannelImage = styled.img`
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  margin: 8px;
  margin-top: 18px;
`
export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin-bottom: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#212121')};
`
export const StatusDetailsContainer = styled.div`
  display: flex;
  margin-top: 0;
  @media screen and (min-width: 576px) {
    flex-direction: column;
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
`
export const StatDotOne = styled.p`
  display: flex;
  margin-bottom: 7px;
  margin-right: 10px;
  color: ${props => (props.isDarkTheme ? '#616e7c' : '#909090')};
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const StatDotTwo = styled.p`
  display: flex;
  margin-bottom: 7px;
  margin-right: 10px;
  color: ${props => (props.isDarkTheme ? '#616e7c' : '#909090')};
`
