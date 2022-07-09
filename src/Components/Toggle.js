import {colors} from '../styleUtills'
import styled from 'styled-components';

const Toggle = styled.div`
cursor: pointer;
user-select: none;
padding: 4px 8px;
color: ${colors.purple2};
border: 2px ${colors.purple2} solid;
transition: 0.5s;
width: fit-content;
height: fit-content;
padding: 5px;
${({ active }) => active && `
background-color: ${colors.purple2};
color: white;
transition: 0.5s;
`}
`;

export default Toggle;
