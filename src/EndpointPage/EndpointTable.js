import styled from 'styled-components';
import { EndpointMethodContext } from './EndpointMethodContext';
import React, { useContext } from 'react';
import Accordion from '../Components/Accordion';
import {colors} from '../styleUtills'

const TableContainer = styled.div`
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
background-color: white;
padding-bottom: 30px;
transition: 0.3s;
${({ loading }) => loading && `
filter:blur(3px);
transition: 0.3s;
`}

`;
const TableHeaderContainer = styled.div`
color: ${colors.purple1};
text-transform: uppercase;
background-color: white;
font-weight: bold;
padding: 15px 40px;
border-bottom: 1px  ${colors.lightGray2} solid;
div{
    width: fit-content;
}
${({ grid }) => grid && `
display: grid;
grid-template-columns: ${grid}
`}
`;
const TableRow = styled.div`
background-color: white;
padding: 15px;
box-sizing: border-box;
box-shadow: rgb(0 0 0 / 5%) 0 0 7px 3px;
margin: 5px;
align-items: center;
${({ grid }) => grid && `
display: grid;
grid-template-columns: ${grid}
`}
`;
const NoItems = styled.div`
font-weight: 400;
padding: 15px;
text-align: center;
`;

const TableHeader = () => {
    const { scheme, gridTemplate } = useContext(EndpointMethodContext);
    return (
    <TableHeaderContainer grid={gridTemplate}>
        {scheme.map((column, index)=>(
        <div key={index}>{column.headerTitle}</div>
        ))}
    </TableHeaderContainer>
);
}

const EndpointTable = ({data}) => {
    const { scheme, filteredResults, gridTemplate, isLoading } = useContext(EndpointMethodContext);

    return (
      <TableContainer loading={isLoading}>
         <TableHeader />
         { filteredResults.length > 0 ? filteredResults.map(([section, rows], sectionIndex) =>
            (
            <Accordion label={section} key={sectionIndex}>
                {rows.length > 0 ? (rows.map((row, sectionRowIndex)=>(
                    <TableRow grid={gridTemplate} key={sectionRowIndex}>
                    { scheme.map((column, index)=>{
                        const Element = column?.columnCellElement
                        const value = row[column.dataKey] || ''
                        const location = {sectionIndex, sectionRowIndex, dataKey: column.dataKey}
                        return (
                            <Element value={value} location={location} key={index}/>
                        )
                    })}
                    </TableRow>
                ))) : <NoItems> No items </NoItems>}
            </Accordion>
        )) : <NoItems> No results </NoItems>}
      </TableContainer>
    );
}
export default EndpointTable;
