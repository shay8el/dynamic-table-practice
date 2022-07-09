import {colors} from '../styleUtills'
import styled from 'styled-components';

const TextContainer = styled.div`
width: fit-content;
`;

const TextCell = ({value}) => {
    return (
      <TextContainer>
        {value}
      </TextContainer>
    );
}
export default TextCell;
