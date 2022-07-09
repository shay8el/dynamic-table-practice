import {colors} from '../styleUtills'
import styled from 'styled-components';

const TagContainer = styled.div`
background-color: ${colors.tagBackground};
color: ${colors.tagText};
padding: 4px 8px;
width: fit-content;
height: fit-content;
`;

const Tag = ({value}) => <TagContainer>{value}</TagContainer>

export default Tag;
