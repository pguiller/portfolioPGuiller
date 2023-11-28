import React from 'react';
import { Box, useTheme } from '@mui/material';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CLongTextBoxCard from './CLongTextBoxCard';
import BubbleMenuCard from './BubbleMenuCard';
import CInfosCardCard from './CInfosCardCard';
import CStatusPillCard from './CStatusPillCard';

const UIPage: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper title="UI" isBigWrapper>
      <Box sx={componentsPagesStyles(theme).gridWrapper}>
        <CStatusPillCard />
        <BubbleMenuCard />
        <CInfosCardCard />
        <CLongTextBoxCard />
      </Box>
    </CInfosTitleWrapper>
  );
};

export default UIPage;
