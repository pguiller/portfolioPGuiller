import React from 'react';
import { Box, useTheme } from '@mui/material';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CTableCard from './CTableCard';
import DataTableCard from './DataTableCard';

const TablePage: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper title="Table" isBigWrapper>
      <Box sx={componentsPagesStyles(theme).fullWidthWrapper}>
        <CTableCard />
        <DataTableCard />
      </Box>
    </CInfosTitleWrapper>
  );
};

export default TablePage;
