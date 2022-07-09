import React, { useContext } from 'react';
import { EndpointMethodContext } from './EndpointMethodContext';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import {colors} from '../styleUtills'

const InputBoxContainer = styled.div`
  background-color: white;
  padding: 10px;
  box-shadow: 1px;
  display: flex;
  flex-grow: 1;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const SearchTextInput = styled.input`
  border: none;
  margin-left: 5px;
  flex-grow: 1;
  &:focus {
    outline: none;
    box-shadow: 0.2rem 0.8rem 1.6rem var(black);
  }
`;
const FilterCheckboxInput = styled.input`
margin-right: 10px;
`;
const StyledIcon = styled(SearchIcon)`
height: 20px;
color: ${colors.gray}
`;
const FiltersContainer = styled.div`
font-size: small;
border-left: 1px ${colors.lightGray2} solid;
display: flex;
align-items: center;
padding: 0 20px;
`;

const InputBox = ({onSearch}) => {
  const { searchParams, setSearchParams } = useContext(EndpointMethodContext);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }
  const handleQueryChange = (e) => {
    if(e.target.name === 'filter-ppi'){
      setSearchParams({...searchParams, filters: {...searchParams.filters, showPPIOnly: e.target.checked}})
    } else if(e.target.name === 'text-search') {
      setSearchParams({...searchParams, text: e.target.value})
    }
  }
  return (
      <InputBoxContainer>
        <StyledIcon />
        <SearchTextInput name='text-search' type='text' value={searchParams.text} onKeyDown={handleKeyDown} onChange={handleQueryChange} placeholder='Search' />
        <FiltersContainer>
            <FilterCheckboxInput name='filter-ppi' type='checkbox' checked={searchParams.filters.showPPIOnly} onChange={handleQueryChange}  />
                show PII only
        </FiltersContainer>
      </InputBoxContainer>
    );
}
export default InputBox;
