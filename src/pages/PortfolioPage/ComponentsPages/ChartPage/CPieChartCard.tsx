import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CPieChart from 'src/components/UI/CPieChart/CPieChart';
import { PieChartData } from 'src/components/UI/types';

const CPieChartCard: React.FC = () => {
  const theme = useTheme();

  const pieChartData: PieChartData[] = [
    {
      label: 'Label 1',
      value: 25,
    },
    {
      label: 'Label 2',
      value: 13,
    },
    {
      label: 'Label 3',
      value: 48,
    },
    {
      label: 'Label 4',
      value: 189,
    },
    {
      label: 'Label 6',
      value: 10,
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
      title={'CPieChart'}
      documentation="https://mui.com/x/react-charts/pie/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CPieChart data={pieChartData} />
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CPieChart data={pieChartData} hasTotal animation />
          <Typography variant="body2">Total + animation</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CPieChart data={pieChartData} colors={customColorsSuccess} />
          <Typography variant="body2">Colors</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CPieChartCard;
