import React from 'react';
import { Box, useTheme } from '@mui/material';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CTextfieldCard from './CTextfieldCard';
import SpecialTextfieldCard from './SpecialTextfieldCard';
import CAutocompleteCard from './CAutocompleteCard';

const TextfieldPage: React.FC = () => {
  const theme = useTheme();

  return (
    <CInfosTitleWrapper title="Textfield" isBigWrapper>
      <Box sx={componentsPagesStyles(theme).gridWrapper}>
        <CTextfieldCard />
        <CAutocompleteCard />
        <SpecialTextfieldCard />
      </Box>
    </CInfosTitleWrapper>
  );
};

export default TextfieldPage;
