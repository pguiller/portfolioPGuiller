import { SxProps, Theme } from '@mui/material';

interface CLongtextBoxStyles {
  wrapper: SxProps;
  card: SxProps;
  children: SxProps;
}

export const cLeftSideMenuStyles = (theme: Theme): CLongtextBoxStyles => ({
  wrapper: {
    height: 'max-content',
    minHeight: 'calc(100vh - 64px)',
    position: 'absolute',
    top: '64px',
    left: 0,
    display: 'flex',
    width: '100%',
  },

  card: {
    backgroundColor: theme.palette.background.paper,
    minWidth: '15vw',
    padding: theme.spacing(3),
  },

  children: {
    paddingLeft: '4vw!important',
    paddingRight: '4vw!important',
    marginBlock: theme.spacing(7),
    maxWidth: '100%!important',
    width: '100%',
  },
});
