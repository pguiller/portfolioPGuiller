import { SxProps, Theme } from '@mui/material';

interface CSelectStyles {
  wrapper: SxProps;
  // eslint-disable-next-line no-unused-vars
  select: (isFirefox: boolean) => SxProps;
  selectIconsWrapper: SxProps;
}

export const cSelectStyles = (theme: Theme): CSelectStyles => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-end',

    '& legend': {
      height: 'unset',
      '& > span': {
        opacity: 1,
      },
    },
  },

  select: (isFirefox) => ({
    width: isFirefox ? '-moz-available' : '-webkit-fill-available',
  }),

  selectIconsWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
});
