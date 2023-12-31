import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  margin: 10px;
  border: 1px solid lightgrey;
  max-width: 500px;
  @media screen and (min-width: 576px) {
    margin: 15px;
  }
  @media screen and (min-width: 768px) {
    margin: 20px;
  }
`
export const SearchInput = styled.input`
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
  background-color: transparent;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#909090')};
`
export const SearchButton = styled.button`
  cursor: pointer;
  border: none;
  border-left: 1px solid lightgrey;
  height: 100%;
  width: 50px;
  background-color: ${props => (props.isDarkTheme ? '#383838' : '#cccccc')};
`

export const AllVideosListContainer = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media screen and (min-width: 576px) {
    margin: 15px;
    margin-top: 0;
  }
  @media screen and (min-width: 768px) {
    margin: 20px;
    margin-top: 0;
  }
`
export const InProgressContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 65vh;
  @media screen and (min-width: 768px) {
    min-height: 85vh;
  }
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
    min-height: 85vh;
    padding-top: 50px;
    padding-bottom: 50px;
  }
`
export const NoSearchResultsImage = styled.img`
  width: 50%;
  max-width: 450px;
  max-height: 350px;
  margin: 20px;
`
export const NoSearchResultsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 21px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`
export const NoSearchResultsMessage = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;
  color: ${props => (props.isDarkTheme ? '#64748b' : '#475569')};
`
