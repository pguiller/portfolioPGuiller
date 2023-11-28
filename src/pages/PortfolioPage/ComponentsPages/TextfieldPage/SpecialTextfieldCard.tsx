import { Box, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CAmountTextfield from 'src/components/UI/CAmountTextfield/CAmountTextfield';
import CSearchbar from 'src/components/UI/CSearchbar/CSearchbar';
import CCommentaryField from 'src/components/UI/CCommentaryField/CCommentaryField';
import { LOREM } from '../../loremText';
import CImportTextfield from 'src/components/UI/CImportTextfield/CImportTextfield';

const SpecialTextfieldCard: React.FC = () => {
  const theme = useTheme();

  const [value, setValue] = useState<number>(0);
  const [value2, setValue2] = useState<string>('');
  const [value3, setValue3] = useState<string>(LOREM);

  const [fileName, setFileName] = useState<File | ''>('');
  const [file, setFile] = useState<File | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const handleFakeLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <CInfosTitleWrapper
      title={'Special CTextfield'}
      documentation="https://mui.com/material-ui/react-text-field/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CAmountTextfield
            id={'amount-text-field'}
            value={value}
            setValue={setValue}
            label="Amount textfield"
            fullWidth
            currency={'€'}
          />
          <Typography variant="body2">CAmountTextfield</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CSearchbar
            id={'searchbar'}
            value={value2}
            setValue={setValue2}
            fullWidth
          />
          <Typography variant="body2">Searchbar</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CImportTextfield
            isLoading={loading}
            value={fileName}
            setValue={setFileName}
            setFile={setFile}
            importFunction={() => {
              handleFakeLoading();
              file;
            }}
          />
          <Typography variant="body2">Import file</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CCommentaryField value={value3} onChange={setValue3} />
          <Typography variant="body2">Commentary</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default SpecialTextfieldCard;
