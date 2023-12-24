import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoCardItem = styled.li`
  list-style-type: none;
  width: 100%;
  min-height: 280px;
  max-height: 330px;
  margin-bottom: 20px;
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
  margin-top: 18px;
  margin-right: 8px;
`
export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
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
