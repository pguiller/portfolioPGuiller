import { SxProps, Theme } from '@mui/material';

interface HomePageStyles {
  toolBar: SxProps;
  container: SxProps;
  pagesContainer: SxProps;
  menuContainer: SxProps;
  buttonIcon: SxProps;
  drawer: SxProps;
  userInfo: SxProps;
  switchTheme: SxProps;
  mainWrapper: SxProps;
  navCard: SxProps;
  navCardWrapper: SxProps;
}

export const portfolioPageStyles = (theme: Theme): HomePageStyles => ({
  toolBar: {
    display: 'flex',
    gap: 1,
    minHeight: theme.spacing(8),
    paddingInline: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
  },

  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& div:only-child': {
      marginLeft: 'auto',
    },
  },

  pagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(1),
  },

  menuContainer: {
    display: 'flex',
    alignItems: 'center',
    zIndex: 100,
  },

  buttonIcon: {
    color: 'white',
    padding: 1,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },

  drawer: {
    '& .MuiDrawer-paperAnchorLeft': {
      minWidth: 400,
    },
  },

  userInfo: {
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(0.5, 1),
    gap: theme.spacing(1),
    alignItems: 'center',
  },

  switchTheme: {
    display: 'flex',
    alignItems: 'center',
  },

  mainWrapper: {
    width: '100%',
    maxWidth: '100%!important',
    boxSizing: 'border-box',
    margin: 'auto',
    paddingLeft: '4vw!important',
    paddingRight: '4vw!important',
    marginBlock: theme.spacing(7),
    [theme.breakpoints.down('md')]: {
      paddingInline: '3vw',
    },
  },

  navCardWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
    },
  },

  navCard: {
    backgroundColor: theme.palette.background.paper,
    transition: 'color 0.3s ease, background-color 0.3s ease',
    color:
      theme.palette.mode === 'light' ? theme.palette.primary.main : 'white',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor:
        theme.palette.mode === 'light'
          ? theme.palette.grey[300]
          : theme.palette.primary.dark,
    },
  },
});
