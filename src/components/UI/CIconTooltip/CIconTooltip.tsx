import React from 'react';

import { Box, IconButton, SxProps, Theme, Tooltip } from '@mui/material';

interface CMenuButtonProps {
  icon: React.ReactNode;
  tooltip: string;
  onClick: () => void;
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  sx?: SxProps<Theme>;
}

const CIconTooltip: React.FC<CMenuButtonProps> = ({
  icon,
  tooltip,
  onClick,
  color = 'default',
  sx,
}) => (
  <Box sx={[...(Array.isArray(sx) ? sx : [sx])]}>
    <Tooltip title={tooltip}>
      <IconButton onClick={onClick} color={color}>
        {icon}
      </IconButton>
    </Tooltip>
  </Box>
);

export default CIconTooltip;
