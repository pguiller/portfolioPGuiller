import React from 'react';
import { cCommentaryFieldStyles } from './styles';
import { SxProps, Theme } from '@mui/material';
import CTextField from '../CTextField/CTextField';

interface CCommentaryFieldProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
  disabled?: boolean;
  sx?: SxProps<Theme>;
}

const CCommentaryField: React.FC<CCommentaryFieldProps> = ({
  value = '',
  onChange,
  disabled = false,
  sx,
}) => (
  <CTextField
    id={'commentary'}
    label="Commentaire"
    type={'text'}
    value={value}
    setValue={onChange}
    disabled={disabled}
    sx={[cCommentaryFieldStyles.textfield, ...(Array.isArray(sx) ? sx : [sx])]}
    multiline={true}
    maxRows={6}
  />
);

export default CCommentaryField;
