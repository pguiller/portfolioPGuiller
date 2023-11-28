import { Switch, SxProps } from '@mui/material';
import React from 'react';

type CSwitchProps = {
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sx?: SxProps;
  disabled?: boolean;
  color?:
    | 'error'
    | 'success'
    | 'info'
    | 'warning'
    | 'default'
    | 'primary'
    | 'secondary';
};

const CSwitch = ({
  checked,
  onChange,
  sx,
  color = 'primary',
  disabled,
}: CSwitchProps) => (
  <Switch
    sx={[...(Array.isArray(sx) ? sx : [sx])]}
    checked={checked}
    onChange={onChange}
    color={color}
    disabled={disabled}
  />
);

export default CSwitch;
