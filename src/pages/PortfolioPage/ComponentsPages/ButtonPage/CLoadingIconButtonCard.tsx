import React, { useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CLoadingIconButton from 'src/components/UI/CLoadingIconButton/CLoadingIconButton';
import PersonIcon from '@mui/icons-material/Person';

const CLoadingIconButtonCard: React.FC = () => {
  const theme = useTheme();

  const handleLoading = (
    setLoadingFunc: React.Dispatch<React.SetStateAction<boolean>>,
    setSuccessFunc: React.Dispatch<React.SetStateAction<boolean>> | null,
    duration: number,
  ) => {
    setLoadingFunc(true);

    setTimeout(() => {
      setLoadingFunc(false);
      if (setSuccessFunc) {
        setSuccessFunc(true);
      }
    }, duration);
  };

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [loading3, setLoading3] = useState(false);
  const [loading4, setLoading4] = useState(false);
  const [loading5, setLoading5] = useState(false);
  const [success2, setSuccess2] = useState(false);

  return (
    <CInfosTitleWrapper
      title={'CLoadingIconButton'}
      documentation="https://mui.com/material-ui/api/icon-button/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapper}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CLoadingIconButton
            isLoading={loading}
            icon={<PersonIcon />}
            onClick={() => handleLoading(setLoading, null, 2000)}
          />
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CLoadingIconButton
            isLoading={loading2}
            icon={<PersonIcon />}
            onClick={() => handleLoading(setLoading2, setSuccess2, 2000)}
            isSuccess={success2}
          />
          <Typography variant="body2">Action succeeded</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CLoadingIconButton
            isLoading={false}
            icon={<PersonIcon />}
            onClick={() => true}
            disabled
          />
          <Typography variant="body2">Disabled</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CLoadingIconButton
            isLoading={loading3}
            icon={<PersonIcon />}
            onClick={() => handleLoading(setLoading3, null, 2000)}
            color="info"
          />
          <Typography variant="body2">Info</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CLoadingIconButton
            isLoading={loading4}
            icon={<PersonIcon />}
            onClick={() => handleLoading(setLoading4, null, 2000)}
            color="warning"
          />
          <Typography variant="body2">Warning</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CLoadingIconButton
            isLoading={loading5}
            icon={<PersonIcon />}
            onClick={() => handleLoading(setLoading5, null, 2000)}
            color="success"
          />
          <Typography variant="body2">Success</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CLoadingIconButtonCard;
