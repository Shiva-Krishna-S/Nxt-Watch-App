import styled from 'styled-components'

export const TrendingPageMainContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingPageResponsiveContainer = styled.div`
  display: flex;
  @media screen and (min-width: 768px) {
    height: 90vh;
  }
`

export const TrendingPageContentContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const TrendingSuccessViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const TrendingTopSection = styled.div`
  display: flex;
  align-items: center;
`
export const TrendingTitle = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  margin-left: 14px;
`
export const TrendingItemsList = styled.ul`
  padding-left: 0;
  display: flex;
  flex-direction: column;
`
export const InProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  @media screen and (min-width: 768px) {
    min-height: 90vh;
  }
`
export const TrendingFailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  padding-top: 30px;
  @media screen and (min-width: 768px) {
    min-height: 90vh;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
export const FailureImage = styled.img`
  width: 50%;
  max-width: 450px;
  max-height: 350px;
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  text-align: center;
`
export const FailureMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
`
export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
`
