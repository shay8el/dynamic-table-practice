import {colors, tabHeight} from '../styleUtills'
import styled from 'styled-components';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabPanel from '../Components/TabPanel'
import Header from '../Components/Header'
import EndpointStructure from './EndpointStructure'

const EndpointPageContainer = styled.div`
    font-family: 'Roboto';
    font-size: 13px;
    background-color: ${colors.lightGray};
    color: ${colors.darkGray};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
`;
const MainContainer = styled.div`
    flex-grow: 1;
    padding-bottom: 15px;
    .MuiTabs-root	{
      min-height: ${tabHeight};
      height: ${tabHeight};
      box-shadow: 0px 6px 5px -5px rgb(149 157 165 / 20%);

      .MuiTab-root{
        text-transform: none;
        min-height: ${tabHeight};
        height: ${tabHeight};
      }
      .Mui-selected{
        color: ${colors.purple2};
      }
      .MuiTabs-indicator{
        background-color: ${colors.purple2};
      }
    }
`;
const TabsLabels = styled(Tabs)`
  padding: 0 30px;
  background-color: white;
`;

const EndpointPage = ({data}) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const handleTabChange = (event, tabIndex) => {
    setCurrentTabIndex(tabIndex);
  };
  return (
    <EndpointPageContainer>
        <Header data={data} />
        <MainContainer>
            <TabsLabels value={currentTabIndex} onChange={handleTabChange}>
                <Tab label='Request' />
                <Tab label='Response' />
            </TabsLabels>
            <TabPanel value={currentTabIndex} index={0}>
              <EndpointStructure data={data.request} />
            </TabPanel>
            <TabPanel value={currentTabIndex} index={1}>
              <EndpointStructure data={data.response} />
            </TabPanel>
        </MainContainer>
    </EndpointPageContainer>
  );
}

export default EndpointPage;
