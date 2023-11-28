import { Box, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import CDatePicker from 'src/components/UI/CDatePicker/CDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { componentsPagesStyles } from '../styles';

const DatePickerCard: React.FC = () => {
  const theme = useTheme();

  const [date, setDate] = useState<Dayjs | null>(null);
  const [date2, setDate2] = useState<Dayjs | null>(null);
  const [date3, setDate3] = useState<Dayjs | null>(null);
  const [date4, setDate4] = useState<Dayjs | null>(null);

  return (
    <CInfosTitleWrapper
      title={'CDatePicker'}
      documentation="https://mui.com/x/react-date-pickers/date-picker/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CDatePicker value={date} setValue={setDate} label="Date" />
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CDatePicker
            value={date2}
            setValue={setDate2}
            disabled
            label="Date"
          />
          <Typography variant="body2">Disabled</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CDatePicker
            value={date3}
            setValue={setDate3}
            hasTodayButton
            label="Date"
          />
          <Typography variant="body2">Today</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CDatePicker
            value={date4}
            setValue={setDate4}
            minDate={dayjs()}
            label="Date"
          />
          <Typography variant="body2">Min date</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default DatePickerCard;
