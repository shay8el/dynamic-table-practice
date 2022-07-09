import {colors} from '../styleUtills'
import styled from 'styled-components';
import Breadcrumbs from '@mui/material/Breadcrumbs';

const HeaderContainer = styled.div`
background-color: white;
text-align: left;
padding: 30px;
`;
const Method = styled.span`
color: ${colors.purple4};
font-size: 18px;
margin-right: 10px;
`;
const Title = styled.span`
color: ${colors.purple2};
font-size: 24px;
font-weight: bold;
`;
const StyledBreadcrumbs = styled(Breadcrumbs)`
&.MuiBreadcrumbs-root{
  padding: 15px 0;
  font-size: 14px;
  color: ${colors.purple2};
}
.MuiBreadcrumbs-separator{
  color: ${colors.purple2};
}
`
const Saperator = styled.div`
border-bottom: 1px ${colors.lightGray2} solid;
`
const Header = ({data}) => {
    return (
      <HeaderContainer>
        <Method>GET</Method>
        <Title>{data.path}</Title>
        <StyledBreadcrumbs separator="›">
          <b>All Apis</b>
          <b>{data.api}</b>
          <span>{data.path}</span>
        </StyledBreadcrumbs>
        <Saperator />
      </HeaderContainer>
    );
}
export default Header;
