import styled from 'styled-components';
import { EndpointMethodContext } from './EndpointMethodContext';
import React, { useContext } from 'react';

const TextContainer = styled.div`
width: fit-content;
`;

const TextCell = ({value}) => {
  const { searchParams } = useContext(EndpointMethodContext)
  const shouldShowHighlight = searchParams.lastSearched && searchParams.lastSearched !== ''
  let renderedParts
  if (shouldShowHighlight){
    const parts = shouldShowHighlight && value.split(searchParams.lastSearched)
    renderedParts = parts.map((part, index) => (
    <span key={index}>
    <span>{part}</span>
    {(index < parts.length -1) && <b>{searchParams.lastSearched}</b>}
    </span>))
  }
  
    return (
      <TextContainer>
        {shouldShowHighlight ? (<>{renderedParts}</>) : (<>{value}</>)}
      </TextContainer>
    );
}
export default TextCell;
