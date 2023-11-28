import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CInfosCard from 'src/components/UI/CInfosCard/CInfosCard';
import PersonIcon from '@mui/icons-material/Person';

const CInfosCardCard: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper title={'CInfosCard'}>
      <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CInfosCard sx={{ width: '100%' }}>This is a card.</CInfosCard>
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CInfosCard sx={{ width: '100%' }} icon={<PersonIcon />}>
            This is a card.
          </CInfosCard>
          <Typography variant="body2">Basic button</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CInfosCard sx={{ width: '100%' }} isButton>
            This is a button.
          </CInfosCard>
          <Typography variant="body2">Button</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CInfosCard sx={{ width: '100%' }} isButton loading>
            This is a button.
          </CInfosCard>
          <Typography variant="body2">Loading</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CInfosCard sx={{ width: '100%' }} isButton icon={<PersonIcon />}>
            This is a button.
          </CInfosCard>
          <Typography variant="body2">Icon button</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CInfosCard
            sx={{ width: '100%' }}
            isButton
            icon={<PersonIcon />}
            disabled
          >
            This is a button.
          </CInfosCard>
          <Typography variant="body2">Button disabled</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CInfosCardCard;
