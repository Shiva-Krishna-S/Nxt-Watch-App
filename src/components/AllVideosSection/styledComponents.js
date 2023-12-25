import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  margin-top: 10px;
  margin-right: 20px;
  border: 1px solid lightgrey;

  max-width: 500px;
  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`
export const SearchInput = styled.input`
  color: #0f172a;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  border: none;
  outline: none;
  padding-left: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-right: 16px;
  flex-grow: 1;
`
export const SearchButton = styled.button`
  cursor: pointer;
  border: none;
  border-left: 1px solid lightgrey;
  height: 100%;
  width: 50px;
`

export const AllVideosListContainer = styled.ul`
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
export const InProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  @media screen and (min-width: 768px) {
    min-height: 90vh;
  }
`
export const AllVideosFailureView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
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
  cursor: pointer;
  outline: none;
`

export const NoSearchResultsView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  padding-top: 30px;
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    min-height: 70vh;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
export const NoSearchResultsImage = styled.img`
  width: 50%;
  max-width: 450px;
  max-height: 350px;
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
