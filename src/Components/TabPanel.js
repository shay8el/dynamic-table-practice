import styled from 'styled-components';

const TabPanelContainer = styled.div`
  margin: 45px 30px;
`;
const TabPanel = ({ children, value, index, ...props }) => {
  return (
    <TabPanelContainer>
      {value === index && (
        <>
        {children}
        </>
      )}
    </TabPanelContainer>
  );
}
export default TabPanel;
