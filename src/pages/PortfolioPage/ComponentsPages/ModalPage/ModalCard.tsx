import { Box, Button, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CModal from 'src/components/UI/CModal/CModal';

const ModalCard: React.FC = () => {
  const theme = useTheme();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isModalOpen2, setIsModalOpen2] = useState<boolean>(false);
  const [isModalOpen3, setIsModalOpen3] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

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

  return (
    <>
      <CInfosTitleWrapper
        title={'CModal'}
        documentation="https://mui.com/material-ui/react-modal/"
      >
        <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
          <Box sx={componentsPagesStyles(theme).componentWrapper}>
            <Button variant="contained" onClick={() => setIsModalOpen(true)}>
              Open Modal
            </Button>
            <Typography variant="body2">Basic</Typography>
          </Box>
          <Box sx={componentsPagesStyles(theme).componentWrapper}>
            <Button variant="contained" onClick={() => setIsModalOpen2(true)}>
              Open Modal
            </Button>
            <Typography variant="body2">Submit</Typography>
          </Box>
          <Box sx={componentsPagesStyles(theme).componentWrapper}>
            <Button variant="contained" onClick={() => setIsModalOpen3(true)}>
              Open Modal
            </Button>
            <Typography variant="body2">Error</Typography>
          </Box>
        </Box>
      </CInfosTitleWrapper>
      <CModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        modalTitle={'This is a modal title'}
        error={false}
        errorMessage={''}
      >
        <Box>This is the modal content.</Box>
      </CModal>
      <CModal
        isOpen={isModalOpen2}
        onClose={() => setIsModalOpen2(false)}
        modalTitle={'This is a modal title'}
        error={false}
        errorMessage={''}
        hasSubmitButton
        buttonTitle="Valider"
        buttonIsLoading={loading}
        buttonOnClick={() => handleLoading(setLoading, null, 2000)}
      >
        <Box>This is the modal content.</Box>
      </CModal>
      <CModal
        isOpen={isModalOpen3}
        onClose={() => setIsModalOpen3(false)}
        modalTitle={'This is a modal title'}
        error
        errorMessage={'This is an error message.'}
      >
        <Box>This is the modal content.</Box>
      </CModal>
    </>
  );
};

export default ModalCard;
