import { Box, useTheme } from '@mui/material';
import React from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CIconTooltip from 'src/components/UI/CIconTooltip/CIconTooltip';
import PersonIcon from '@mui/icons-material/Person';

const CIconTooltipCard: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper
      title={'CIconTooltip'}
      documentation="https://mui.com/material-ui/react-tooltip/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapper}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CIconTooltip
            icon={<PersonIcon />}
            tooltip={'Tooltip text'}
            onClick={() => true}
          />
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CIconTooltip
            icon={<PersonIcon />}
            tooltip={'Tooltip primary'}
            onClick={() => true}
            color="primary"
          />
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CIconTooltip
            icon={<PersonIcon />}
            tooltip={'Tooltip info'}
            onClick={() => true}
            color="info"
          />
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CIconTooltip
            icon={<PersonIcon />}
            tooltip={'Tooltip warning'}
            onClick={() => true}
            color="warning"
          />
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CIconTooltip
            icon={<PersonIcon />}
            tooltip={'Tooltip error'}
            onClick={() => true}
            color="error"
          />
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CIconTooltip
            icon={<PersonIcon />}
            tooltip={'Tooltip success'}
            onClick={() => true}
            color="success"
          />
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CIconTooltipCard;
