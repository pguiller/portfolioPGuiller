import React from 'react';
import { Box, Button, Divider, List, ListSubheader } from '@mui/material';
import PortfolioMenuListItem from './PortfolioMenuListItem';
import { useNavigate } from 'react-router';

const PortfolioMenuList: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <Box
            sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}
          >
            <Button sx={{ borderRadiux: 2 }} onClick={() => navigate('')}>
              Portfolio API
            </Button>
          </Box>
          <ListSubheader>Input</ListSubheader>
          <PortfolioMenuListItem title="Textfield" path="textfield" />
          <PortfolioMenuListItem title="Button" path="button" />
          <PortfolioMenuListItem title="Date" path="date" />
          <PortfolioMenuListItem title="Modal" path="modal" />
          <Divider />
          <ListSubheader>Data display</ListSubheader>
          <PortfolioMenuListItem title="UI" path="UI" />
          <PortfolioMenuListItem title="Chart" path="chart" />
          <PortfolioMenuListItem title="Table" path="table" />
        </List>
      </nav>
    </Box>
  );
};

export default PortfolioMenuList;
