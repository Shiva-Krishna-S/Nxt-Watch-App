import styled from 'styled-components'

export const VideoCardItem = styled.li`
  list-style-type: none;
  width: 48%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    width: 33%;
  }
`
export const VideoThumbnailImage = styled.img`
  width: 100%;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
`

export const StatText = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  margin-right: 10px;
`
