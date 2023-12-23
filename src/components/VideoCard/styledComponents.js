import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardItem = styled.li`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 48%;
  }
  @media screen and (min-width: 768px) {
    width: 33%;
  }
`
export const StyledLink = styled(Link)`
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
`
export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
`
export const StatusDetails = styled.div`
  display: flex;
  align-items: center;
`
export const StatText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 10px;
`
