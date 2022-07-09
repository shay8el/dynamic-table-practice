import EndpointTable from './EndpointTable';
import { useState } from 'react';
import { EndpointMethodContext } from './EndpointMethodContext';
import styled from 'styled-components';
import SearchBar from './SearchBar'
import {scheme} from './TableScheme'

const INITIAL_SEARCH_STATE = {text: '', filters: { showPPIOnly: false }}

const BlurredTable = styled.div`
position: absolute;
padding-bottom: 0;
background-color: red;
`

const EndpointStructure = ({data}) => {
    // we convert our data to list in order to make the data easier to work with (build, search, etc...)
    const listData = Object.entries(data)
    const [filteredResults, setFilteredResults] = useState(listData);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useState(INITIAL_SEARCH_STATE);
    let gridTemplate = '';
    if (scheme){
        scheme.forEach(element => {
            gridTemplate += element.columnSize + 'fr '
        });
    }
    
    const resetSearchQuery = () => {
        setSearchParams(INITIAL_SEARCH_STATE)
        setIsLoading(false)
    }

    const contextShared = {
        initialData: listData,
        filteredResults,
        setFilteredResults,
        searchParams,
        setSearchParams,
        resetSearchQuery,
        scheme,
        gridTemplate,
        isLoading,
        setIsLoading
    }

    return (
        <div>
            <EndpointMethodContext.Provider value={contextShared}>
                <SearchBar />
                <EndpointTable/>
            </EndpointMethodContext.Provider>
        </div>
    )
}
export default EndpointStructure