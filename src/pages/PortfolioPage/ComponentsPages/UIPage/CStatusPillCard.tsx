import { Box, useTheme } from '@mui/material';
import React from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CStatusPill from 'src/components/UI/CStatusPill/CStatusPill';

const CStatusPillCard: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper
      title={'CStatusPill'}
      documentation="https://mui.com/material-ui/react-chip/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapper}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CStatusPill severity={'primary'}>Primary</CStatusPill>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CStatusPill severity={'info'}>Info</CStatusPill>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CStatusPill severity={'warning'}>Warning</CStatusPill>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CStatusPill severity={'error'}>Error</CStatusPill>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CStatusPill severity={'success'}>Success</CStatusPill>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CStatusPillCard;
