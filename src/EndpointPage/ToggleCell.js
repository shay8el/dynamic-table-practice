import Toggle from '../Components/Toggle';
import React, { useContext } from 'react';
import { EndpointMethodContext } from './EndpointMethodContext';

const ToggleCell = ({value, location}) => {
  const { filteredResults, setFilteredResults } = useContext(EndpointMethodContext);
  const {sectionIndex, sectionRowIndex, dataKey} = location;
  const handleToggleChange = () => {
    const clone = [...filteredResults]
    clone[sectionIndex][1][sectionRowIndex][dataKey] = !(clone[sectionIndex][1][sectionRowIndex][dataKey])
    setFilteredResults(clone)
  }
  return (
    <Toggle active={value} onClick={handleToggleChange}>
      {dataKey}
    </Toggle>
  );
}
export default ToggleCell;
