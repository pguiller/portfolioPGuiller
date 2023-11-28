import React from 'react';
import { Box, Container, SxProps, Theme, useTheme } from '@mui/material';
import { cLeftSideMenuStyles } from './styles';
import MenuList from 'src/pages/PortfolioPage/PortfolioMenuList/PortfolioMenuList';

interface CLongtextBoxProps {
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
}

const CLeftSideMenu: React.FC<CLongtextBoxProps> = ({ children, sx }) => {
  const theme = useTheme();

  return (
    <Box
      sx={[
        cLeftSideMenuStyles(theme).wrapper,
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box sx={cLeftSideMenuStyles(theme).card}>
        <MenuList />
      </Box>
      <Container sx={cLeftSideMenuStyles(theme).children}>{children}</Container>
    </Box>
  );
};

export default CLeftSideMenu;
