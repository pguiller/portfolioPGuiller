import { SxProps, Theme } from '@mui/material';

interface CInfosTitleWrapperStyles {
  // eslint-disable-next-line no-unused-vars
  wrapper: (isBigWrapper: boolean) => SxProps;
  titleWrapper: SxProps;
  contentWrapper: SxProps;
}

export const cInfosTitleWrapperStyles = (
  theme: Theme,
): CInfosTitleWrapperStyles => ({
  wrapper: (isBigWrapper) => ({
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    transition: isBigWrapper ? 'unset' : 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: isBigWrapper ? 'unset' : '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
  }),

  titleWrapper: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    padding: theme.spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  contentWrapper: {
    padding: theme.spacing(2),
  },
});
