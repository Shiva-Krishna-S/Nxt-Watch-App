import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TrendingVideoCardItem = styled.li`
  list-style-type: none;
  width: 100%;
  margin-bottom: 15px;
`
export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`

export const VideoThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 50%;
    max-width: 400px;
    max-height: 250px;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
`
export const ChannelImage = styled.img`
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  margin-top: 18px;
  margin-right: 8px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    padding: 10px;
    margin-top: 0;
  }
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 0;
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
`
export const StatDotOne = styled.div`
  display: flex;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`
export const StatDotTwo = styled.div`
  display: flex;
  margin-right: 10px;
`
