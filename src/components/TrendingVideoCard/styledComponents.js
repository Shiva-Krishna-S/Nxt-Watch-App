import styled from 'styled-components'

export const TrendingVideoCardItem = styled.li`
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    width: 33%;
  }
`
export const VideoThumbnailImage = styled.img`
  width: 100%;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 50%;
  }
`
export const VideoDetailsContainer = styled.div`
  display: flex;
`
export const ChannelImage = styled.img`
  height: 40px;
  width: 40px;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    display: none;
  }
`
export const VideoStatsContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    display: none;
  }
`
export const VideoStatsContainerSmallDevices = styled.div`
  display: none;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
`
export const StatusDetails = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const StatText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 10px;
`
export const StatsViewCountAndTime = styled.div`
  display: flex;
  align-items: center;
`
