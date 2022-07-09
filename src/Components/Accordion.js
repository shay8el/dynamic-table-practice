import React, { useState } from 'react';
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import styled from 'styled-components';
import {colors} from '../styleUtills'

const AccordionContainer = styled.div`
padding: 15px;
`;
const AccordionLabel = styled.div`
cursor: pointer;
display: flex;
align-items: center;
`;
const AccordionIcon = styled.div`
background-color: ${colors.lightGray};
border-radius: 50%;
width: 20px;
height: 20px;
-webkit-transform: rotate(0deg);
-ms-transform: rotate(0deg);
transform: rotate(0deg);
-webkit-transition: .3s;
-o-transition: .3s;
transition: .3s;
svg{
  margin-left: -2px;
  margin-top: -2px;
}
${({ open }) => open && `
-webkit-transform: rotate(90deg);
-ms-transform: rotate(90deg);
transform: rotate(90deg);
-webkit-transition: .3s;
-o-transition: .3s;
transition: .3s;
`}
`;
const AccordionLabelText = styled.div`
margin-left: 10px;
font-weight: bolder;
`;
const Items = styled.div`
margin-top: 10px;
`;
const Accordion = ({ label, children, ...props }) => { 
    const [isOpen, setIsOpen] = useState(true);
    const convertCamelCaseToRegular = (text) => {
        const result = text.replace(/([A-Z])/g, " $1")
        const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
        return finalResult
    }
    const title = convertCamelCaseToRegular(label)
    return (
      <AccordionContainer>
        <AccordionLabel onClick={()=>setIsOpen((prevValue) => !prevValue)}>
            <AccordionIcon open={isOpen}><ArrowRightRoundedIcon /></AccordionIcon>
            <AccordionLabelText>{title}</AccordionLabelText>
        </AccordionLabel>
        {isOpen &&
        <Items>
            {children}
        </Items>
        }
      </AccordionContainer>
    );
  }
  export default Accordion;
