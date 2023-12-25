import styled from 'styled-components'

export const SavedVideosPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SavedVideosPageResponsiveContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    height: 90vh;
  }
`
export const SavedVideosNoResponseView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  padding-top: 30px;
  @media screen and (min-width: 768px) {
    min-height: 90vh;
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
`
export const SavedVideosNoResponseMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
`
export const SavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const SavedVideosTopSection = styled.div`
  display: flex;
  align-items: center;
`
export const SavedVideosTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  margin-left: 14px;
`
export const SavedVideosList = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
`
