import Tag from '../Components/Tag';
import { EndpointMethodContext } from './EndpointMethodContext';
import React, { useContext } from 'react';
import HighlightedText from './HighlightedText'


const TagCell = ({value}) => {
  const { searchParams } = useContext(EndpointMethodContext)
    return (
      <Tag>
        <HighlightedText value={value} search={searchParams.lastSearched} />
      </Tag>
    );
}
export default TagCell;
