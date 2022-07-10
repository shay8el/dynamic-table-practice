import {colors} from '../styleUtills'
import styled from 'styled-components';

const Toggle = styled.div`
cursor: pointer;
user-select: none;
padding: 4px 8px;
transition: 0.5s;
width: fit-content;
height: fit-content;
padding: 5px;
${({ color }) => {
    const toggleColor = color === 'secondary' ? colors.darkBlue : colors.purple2
    return (`
    color: ${toggleColor};
    border: 2px ${toggleColor} solid;
    `)
}}
${({ active, color }) => {
    const toggleColor = color === 'secondary' ? colors.darkBlue : colors.purple2
    return active && `
    background-color: ${toggleColor};
    color: white;
    transition: 0.5s;
    `
}}
`;

export default Toggle;
