import styled from 'styled-components';
import InputBox from './InputBox'
import {colors} from '../styleUtills'
import React, { useContext } from 'react';
import { EndpointMethodContext } from './EndpointMethodContext';
import CircularProgress from '@mui/material/CircularProgress';

const SearchBarContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const ResetFilter = styled.div`
font-size: small;
color: ${colors.purple2};
float: right;
margin-top: -45px;
cursor: pointer;
&:hover{
  color: ${colors.purple1};
}
`;

const ApplyButton = styled.button`
background-color: ${colors.purple2};
background-image: linear-gradient(45deg, ${colors.purple2} 0%, ${colors.purple1}  51%, ${colors.purple2}  100%);
color: white;
padding: 0 60px;
transition: 0.5s;
background-size: 200% auto;
cursor: pointer;
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
border: none;
outline:none;
font-weight: bold;
&:hover{
  background-position: right center;
  color: #fff;
  text-decoration: none;
}
.MuiCircularProgress-root{
  color: white;
}
`;

const FAKE_LOADING_SECCONDS = 1.5
const SearchBar = () => {
  const { searchParams, initialData, setFilteredResults, resetSearchQuery, isLoading, setIsLoading } = useContext(EndpointMethodContext);

  const onSearch = () => {
    setIsLoading(true)
    setTimeout(()=>{
      const results = getSearchResult()
      setFilteredResults(results)
      resetSearchQuery()
    }, FAKE_LOADING_SECCONDS * 1000)
  }

  const getSearchResult = () => {
    const textToSearch = searchParams.text
    const searchResult = []
    initialData.forEach(([section, rows]) => {
    const rowsFilterd = rows.filter((row) => row.name.indexOf(textToSearch) > -1).filter((row) => {
      const shouldFilterPPI = searchParams.filters.showPPIOnly
      return (!shouldFilterPPI) || (shouldFilterPPI && row.pii)
    })
    if (rowsFilterd.length > 0){
        searchResult.push([section, rowsFilterd])
    }
    });
    return searchResult
  }

  const onResetFilters = () => {
    setFilteredResults(initialData)
    resetSearchQuery(true)
  }

  return (
    <>
    <SearchBarContainer>
      <InputBox onSearch={onSearch} />
      <ApplyButton onClick={onSearch}> {isLoading ? <CircularProgress size={20} /> : 'Apply'} </ApplyButton>
    </SearchBarContainer>
    <ResetFilter onClick={onResetFilters}>Reset filters</ResetFilter>
    </>
  );
}
export default SearchBar;
