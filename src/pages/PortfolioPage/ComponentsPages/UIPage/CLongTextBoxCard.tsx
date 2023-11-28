import { Box, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CLongTextBox from 'src/components/UI/CLongTextBox/CLongTextBox';
import CTextField from 'src/components/UI/CTextField/CTextField';
import { LOREM } from '../../loremText';

const CLongTextBoxCard: React.FC = () => {
  const theme = useTheme();
  const [maxLine, setMaxLine] = useState<number>(4);

  return (
    <CInfosTitleWrapper title={'CLongTextBox'}>
      <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CLongTextBox>
            <Typography>{LOREM}</Typography>
          </CLongTextBox>
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CTextField
            type="number"
            label="Max line count"
            value={maxLine}
            setValue={setMaxLine}
          />
          <CLongTextBox maxLineCount={maxLine}>
            <Typography>{LOREM}</Typography>
          </CLongTextBox>
          <Typography variant="body2">Max line count</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CLongTextBoxCard;
