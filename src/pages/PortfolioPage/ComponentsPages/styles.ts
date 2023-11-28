import { SxProps, Theme } from '@mui/material';

interface ComponentsPagesStyles {
  gridWrapper: SxProps;
  fullWidthWrapper: SxProps;
  componentsListWrapper: SxProps;
  componentsListWrapperColumn: SxProps;
  componentWrapper: SxProps;
}

export const componentsPagesStyles = (theme: Theme): ComponentsPagesStyles => ({
  gridWrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(2),
  },

  fullWidthWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },

  componentsListWrapper: {
    display: 'flex',
    gap: theme.spacing(2),
  },

  componentsListWrapperColumn: {
    display: 'flex',
    gap: theme.spacing(2),
    flexDirection: 'column',
  },

  componentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gridTemplateColumns: '1fr 1fr',
    gap: theme.spacing(1),
    textAlign: 'center',
    width: '100%',
  },
});
