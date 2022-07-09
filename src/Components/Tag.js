import {colors} from '../styleUtills'
import styled from 'styled-components';

const TagContainer = styled.div`
background-color: ${colors.tagBackground};
color: ${colors.tagText};
padding: 4px 8px;
width: fit-content;
height: fit-content;
`;

const Tag = ({children}) => <TagContainer>{children}</TagContainer>

export default Tag;
