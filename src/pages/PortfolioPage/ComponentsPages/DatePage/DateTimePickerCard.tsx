import { Box, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import { Dayjs } from 'dayjs';
import CDateTimePicker from 'src/components/UI/CDateTimePicker/CDateTimePicker';

const DateTimePickerCard: React.FC = () => {
  const theme = useTheme();

  const [date, setDate] = useState<Dayjs | null>(null);
  const [date2, setDate2] = useState<Dayjs | null>(null);
  const [date3, setDate3] = useState<Dayjs | null>(null);

  return (
    <CInfosTitleWrapper
      title={'CDateTimePicker'}
      documentation="https://mui.com/x/react-date-pickers/date-picker/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CDateTimePicker value={date} setValue={setDate} label="Date" />
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CDateTimePicker
            value={date2}
            setValue={setDate2}
            label="Date"
            disabled
          />
          <Typography variant="body2">Disabled</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CDateTimePicker
            value={date3}
            setValue={setDate3}
            label="Date"
            hasTodayButton
          />
          <Typography variant="body2">Today</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default DateTimePickerCard;
