import styled from 'styled-components';
import { EndpointMethodContext } from './EndpointMethodContext';
import React, { useContext } from 'react';
import HighlightedText from './HighlightedText'

const TextContainer = styled.div`
width: fit-content;
`;

const TextCell = ({value}) => {
  const { searchParams } = useContext(EndpointMethodContext)
  
    return (
      <TextContainer>
        <HighlightedText value={value} search={searchParams.lastSearched} />
      </TextContainer>
    );
}
export default TextCell;
