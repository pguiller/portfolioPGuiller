import React from 'react';
import { Box, useTheme } from '@mui/material';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CPieChartCard from './CPieChartCard';
import CLineChartCard from './CLineChartCard';

const ChartPage: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper title="Chart" isBigWrapper>
      <Box sx={componentsPagesStyles(theme).gridWrapper}>
        <CPieChartCard />
        <CLineChartCard />
      </Box>
    </CInfosTitleWrapper>
  );
};

export default ChartPage;
