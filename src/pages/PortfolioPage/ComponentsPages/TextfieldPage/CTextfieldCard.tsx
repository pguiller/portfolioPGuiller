import { Box, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CTextField from 'src/components/UI/CTextField/CTextField';

const CTextfieldCard: React.FC = () => {
  const theme = useTheme();

  const [value, setValue] = useState<string | null>('');

  return (
    <CInfosTitleWrapper
      title={'CTextfield'}
      documentation="https://mui.com/material-ui/react-text-field/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CTextField
            value={value}
            setValue={setValue}
            label="Textfield"
            fullWidth
          />
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CTextField
            value={''}
            setValue={setValue}
            label="Textfield"
            fullWidth
            disabled
          />
          <Typography variant="body2">Disabled</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CTextfieldCard;
