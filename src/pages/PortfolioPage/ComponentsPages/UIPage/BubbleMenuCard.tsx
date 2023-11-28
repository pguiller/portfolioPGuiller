import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import BubbleMenu from 'src/components/UI/BubbleMenu/BubbleMenu';
import { LOREM } from '../../loremText';
import PersonIcon from '@mui/icons-material/Person';

const BubbleMenuCard: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper
      title={'BubbleMenu'}
      documentation="https://www.framer.com/motion/animation/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapper}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <BubbleMenu icon={<PersonIcon />} title="BubbleMenu title">
            <Typography>{LOREM}</Typography>
          </BubbleMenu>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default BubbleMenuCard;
