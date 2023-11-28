import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';

import CTable from 'src/components/UI/CTable/CTable';

const CTableCard: React.FC = () => {
  const theme = useTheme();

  const data = [
    {
      title: 'title1',
      data: '20%',
    },
    {
      title: 'title2',
      data: '10%',
    },
    {
      title: 'title3',
      data: '25%',
    },
    {
      title: 'title4',
      data: '5%',
    },
    {
      title: 'title5',
      data: '40%',
    },
  ];

  return (
    <CInfosTitleWrapper
      title={'CTableCard'}
      documentation="https://mui.com/material-ui/react-table/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CTable data={data} />
          <Typography variant="body2">Basic</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CTableCard;
