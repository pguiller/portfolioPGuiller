import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CMenuButton from 'src/components/UI/CMenuButton/CMenuButton';
import PersonIcon from '@mui/icons-material/Person';

const CMenuButtonCard: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper
      title={'CMenuButton'}
      documentation="https://www.framer.com/motion/component/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapper}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CMenuButton icon={<PersonIcon />}></CMenuButton>
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CMenuButton rotate={180} icon={<PersonIcon />}></CMenuButton>
          <Typography variant="body2">Rotation</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CMenuButton severity="info" icon={<PersonIcon />}></CMenuButton>
          <Typography variant="body2">Info</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CMenuButton severity="warning" icon={<PersonIcon />}></CMenuButton>
          <Typography variant="body2">Warning</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CMenuButton severity="success" icon={<PersonIcon />}></CMenuButton>
          <Typography variant="body2">Success</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CMenuButtonCard;
