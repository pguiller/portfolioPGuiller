import React from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router';

interface MenuItemsProps {
  title: string;
  path: string;
}

const PortfolioMenuListItem: React.FC<MenuItemsProps> = ({ title, path }) => {
  const navigate = useNavigate();

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={() => navigate(path)}>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
  );
};

export default PortfolioMenuListItem;
