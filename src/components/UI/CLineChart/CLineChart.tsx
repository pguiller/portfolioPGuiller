import React from 'react';
import { Box, SxProps, Theme, useTheme } from '@mui/material';
import { CurveType, LineChart } from '@mui/x-charts';
import { LineChartData } from '../types';

import { cLineChartStyles } from './styles';

interface CLineChartProps {
  data: LineChartData[];
  colors?: string[];
  sx?: SxProps<Theme>;
}

const CLineChart: React.FC<CLineChartProps> = ({ data, colors, sx }) => {
  const theme = useTheme();

  const lineColors: string[] = colors || [
    theme.palette.primary.main,
    theme.palette.primary.dark,
    theme.palette.primary.darkest,
    theme.palette.primary.light,
    theme.palette.primary.lightest,
  ];

  const series = data.map((item: LineChartData) => ({
    id: item.label.toLowerCase().replace(' ', '-'),
    curve: 'catmullRom' as CurveType,
    label: item.label,
    data: item.data,
    showMark: false,
    area: true,
  }));

  const sxClasses = {
    seriesAreaSx: series.map((item, index) => ({
      [`& .MuiAreaElement-series-${item.label
        .toLowerCase()
        .replace(' ', '-')}`]: {
        fill: `${lineColors[index % lineColors.length]}20`,
      },
    })),
  };

  const concatenatedSx = sxClasses.seriesAreaSx.reduce(
    (acc, current) => Object.assign(acc, current),
    {},
  );

  return (
    <Box sx={[cLineChartStyles().wrapper, ...(Array.isArray(sx) ? sx : [sx])]}>
      <LineChart
        width={500}
        height={300}
        colors={lineColors}
        series={series}
        xAxis={[{ data: [1, 2, 3, 4, 5, 6] }]}
        legend={{
          direction: 'row',
          position: {
            vertical: 'bottom',
            horizontal: 'middle',
          },
        }}
        sx={{
          '--ChartsLegend-rootOffsetX': '20px',
          '--ChartsLegend-rootOffsetY': '30px',
          '--ChartsLegend-itemWidth': '160px',
          '.MuiLineElement-root, .MuiMarkElement-root': {
            strokeWidth: 3,
          },
          ...concatenatedSx,
        }}
      />
    </Box>
  );
};

export default CLineChart;
