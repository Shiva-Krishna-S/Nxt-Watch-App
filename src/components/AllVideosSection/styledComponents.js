import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
`
export const SearchInput = styled.input`
  width: 250px;
`
export const SearchButton = styled.button``

export const AllVideosListContainer = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
export const InProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`
export const AllVideosFailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FailureImage = styled.img`
  width: 50%;
  max-width: 650px;
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
export const RetryButton = styled.button``

export const NoSearchResultsView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoSearchResultsImage = styled.img`
  width: 50%;
  max-width: 650px;
`
export const NoSearchResultsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  text-align: center;
`
export const NoSearchResultsMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
`
