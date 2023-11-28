import React from 'react';
import { Box, useTheme } from '@mui/material';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import DatePickerCard from './DatePickerCard';
import DateTimePickerCard from './DateTimePickerCard';

const DatePage: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper title="Date" isBigWrapper>
      <Box sx={componentsPagesStyles(theme).gridWrapper}>
        <DatePickerCard />
        <DateTimePickerCard />
      </Box>
    </CInfosTitleWrapper>
  );
};

export default DatePage;
