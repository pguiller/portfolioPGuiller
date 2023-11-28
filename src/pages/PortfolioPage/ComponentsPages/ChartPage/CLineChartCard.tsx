import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import { LineChartData } from 'src/components/UI/types';
import CLineChart from 'src/components/UI/CLineChart/CLineChart';

const CLineChartCard: React.FC = () => {
  const theme = useTheme();

  const lineChartData: LineChartData[] = [
    {
      label: 'Line 1',
      data: [0, 5, 2, 6, 3, 9.3],
    },
    {
      label: 'Line 2',
      data: [8, 2, 4, 9, 1, 5],
    },
    {
      label: 'Line 3',
      data: [4, 5, 9.5, 3, 5, 0],
    },
  ];

  const customColorsSuccess = [
    theme.palette.success.dark,
    theme.palette.success.main,
    theme.palette.success.darkest,
    theme.palette.success.light,
    theme.palette.success.lightest,
  ];

  return (
    <CInfosTitleWrapper
      title={'CLineChart'}
      documentation="https://mui.com/x/react-charts/lines/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CLineChart data={lineChartData} />
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CLineChart data={lineChartData} colors={customColorsSuccess} />
          <Typography variant="body2">Colors</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CLineChartCard;
