import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import CInfosCard from 'src/components/UI/CInfosCard/CInfosCard';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { portfolioPageStyles } from './styles';
import { useNavigate } from 'react-router';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import DateRangeIcon from '@mui/icons-material/DateRange';
import TabIcon from '@mui/icons-material/Tab';
import CodeIcon from '@mui/icons-material/Code';
import BarChartIcon from '@mui/icons-material/BarChart';
import TableChartIcon from '@mui/icons-material/TableChart';

const PortfolioPage: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: theme.spacing(3),
      }}
    >
      <CInfosCard
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        }}
      >
        <Typography variant="h4">
          Bienvenue sur le portfolio de PGuiller.
        </Typography>
        <Typography sx={{ color: theme.palette.text.primary }}>
          {
            "Vous trouverez ici tous les composants et leurs applications. N'hésitez pas à aller voir dans le code de l'application pour en apprendre plus sur leur fonctionnement."
          }
        </Typography>
        <Typography sx={{ color: theme.palette.text.primary }}>
          {'Pour commencer cliquez sur un type de composant.'}
        </Typography>
      </CInfosCard>
      <CInfosTitleWrapper
        title="Input"
        sx={portfolioPageStyles(theme).navCardWrapper}
      >
        <CInfosCard
          sx={portfolioPageStyles(theme).navCard}
          icon={<TextFieldsIcon />}
          onClick={() => navigate('textfield')}
        >
          Textfield
        </CInfosCard>
        <CInfosCard
          sx={portfolioPageStyles(theme).navCard}
          icon={<TouchAppIcon />}
          onClick={() => navigate('button')}
        >
          Button
        </CInfosCard>
        <CInfosCard
          sx={portfolioPageStyles(theme).navCard}
          icon={<DateRangeIcon />}
          onClick={() => navigate('date')}
        >
          Date
        </CInfosCard>
        <CInfosCard
          sx={portfolioPageStyles(theme).navCard}
          icon={<TabIcon />}
          onClick={() => navigate('modal')}
        >
          Modal
        </CInfosCard>
      </CInfosTitleWrapper>
      <CInfosTitleWrapper
        title="Data display"
        sx={portfolioPageStyles(theme).navCardWrapper}
      >
        <CInfosCard
          sx={portfolioPageStyles(theme).navCard}
          icon={<CodeIcon />}
          onClick={() => navigate('ui')}
        >
          UI
        </CInfosCard>
        <CInfosCard
          sx={portfolioPageStyles(theme).navCard}
          icon={<BarChartIcon />}
          onClick={() => navigate('chart')}
        >
          Chart
        </CInfosCard>
        <CInfosCard
          sx={portfolioPageStyles(theme).navCard}
          icon={<TableChartIcon />}
          onClick={() => navigate('table')}
        >
          Table
        </CInfosCard>
      </CInfosTitleWrapper>
    </Box>
  );
};

export default PortfolioPage;
