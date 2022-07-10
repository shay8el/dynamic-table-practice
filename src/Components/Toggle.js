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
${({ active, color }) => {
    const toggleColor = color === 'secondary' ? colors.darkBlue : colors.purple2
    const defaultState = (`
    color: ${toggleColor};
    border: 2px ${toggleColor} solid;
    `)
    const activeState = (active && `
    background-color: ${toggleColor};
    color: white;
    transition: 0.5s;
    `)
    return defaultState + activeState
}}
`;

export default Toggle;
