import { Box, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import CSwitch from 'src/components/UI/CSwitch/CSwitch';
import { componentsPagesStyles } from '../styles';

const CSwitchCard: React.FC = () => {
  const theme = useTheme();

  const [checked, setChecked] = useState<boolean>(true);
  const [checked2, setChecked2] = useState<boolean>(true);
  const [checked3, setChecked3] = useState<boolean>(true);
  const [checked4, setChecked4] = useState<boolean>(true);

  return (
    <CInfosTitleWrapper
      title={'CSwitch'}
      documentation="https://mui.com/material-ui/react-switch/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapper}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CSwitch checked={checked} onChange={() => setChecked(!checked)} />
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CSwitch checked={false} onChange={() => true} disabled />
          <Typography variant="body2">Disabled</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CSwitch checked={true} onChange={() => true} disabled />
          <Typography variant="body2">Disabled checked</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CSwitch
            checked={checked2}
            onChange={() => setChecked2(!checked2)}
            color="info"
          />
          <Typography variant="body2">Info</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CSwitch
            checked={checked3}
            onChange={() => setChecked3(!checked3)}
            color="warning"
          />
          <Typography variant="body2">Warning</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CSwitch
            checked={checked4}
            onChange={() => setChecked4(!checked4)}
            color="success"
          />
          <Typography variant="body2">Success</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CSwitchCard;
