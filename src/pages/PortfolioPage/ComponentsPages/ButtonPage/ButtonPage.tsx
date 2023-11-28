import { Box, useTheme } from '@mui/material';
import React from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CLoadingIconButtonCard from './CLoadingIconButtonCard';
import CIconTooltipCard from './CIconTooltipCard';
import CMenuButtonCard from './CMenuButtonCard';
import CSwitchCard from './CSwitchCard';

const ButtonPage: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper title="Button" isBigWrapper>
      <Box sx={componentsPagesStyles(theme).gridWrapper}>
        <CMenuButtonCard />
        <CLoadingIconButtonCard />
        <CSwitchCard />
        <CIconTooltipCard />
      </Box>
    </CInfosTitleWrapper>
  );
};

export default ButtonPage;
