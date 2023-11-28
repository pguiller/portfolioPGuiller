import React from 'react';
import { Box, useTheme } from '@mui/material';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import ModalCard from './ModalCard';

const ModalPage: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper title="Modal" isBigWrapper>
      <Box sx={componentsPagesStyles(theme).gridWrapper}>
        <ModalCard />
      </Box>
    </CInfosTitleWrapper>
  );
};

export default ModalPage;
