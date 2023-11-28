import {
  Autocomplete,
  Box,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import CInfosTitleWrapper from 'src/components/UI/CInfosTitleWrapper/CInfosTitleWrapper';
import { componentsPagesStyles } from '../styles';
import CAutocomplete from 'src/components/UI/CAutocomplete/CAutocomplete';

const valueInit = {
  id: 0,
  name: 'John Smith',
};

const options = [
  {
    id: 0,
    name: 'John Smith',
  },
  {
    id: 1,
    name: 'John Mary',
  },
  {
    id: 2,
    name: 'Mike Smith',
  },
  {
    id: 3,
    name: 'James Martin',
  },
  {
    id: 4,
    name: 'Julia Amara',
  },
  {
    id: 5,
    name: 'Hymlia Amity',
  },
  {
    id: 6,
    name: 'Lukas Jannet',
  },
  {
    id: 7,
    name: 'Theo Gana',
  },
  {
    id: 8,
    name: 'Louisa Faya',
  },
];

const CAutocompleteCard: React.FC = () => {
  const theme = useTheme();

  const [valueSelected, setValueSelected] = useState(valueInit);
  const [inputSelected, setInputSelected] = useState('');
  const [valueSelected2, setValueSelected2] = useState([]);
  const [inputSelected2, setInputSelected2] = useState('');

  return (
    <CInfosTitleWrapper
      title={'CAutocomplete'}
      documentation="https://mui.com/material-ui/react-autocomplete/"
    >
      <Box sx={componentsPagesStyles(theme).componentsListWrapperColumn}>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <CAutocomplete
            onChange={(event: React.SyntheticEvent, value: any) => {
              if (value && typeof value === 'object' && `${value.name}`) {
                setValueSelected(
                  options.find((obj) => obj.id === value.id) ?? valueInit,
                );
              } else {
                setValueSelected(valueInit);
              }
            }}
            inputValue={inputSelected}
            onInputChange={(event, newInputValue) => {
              setInputSelected(newInputValue);
            }}
            value={valueSelected}
            items={options}
            labelInput="Autocomplete"
            name="Autocomplete"
            getOptionLabel={(option: any | string) =>
              typeof option === 'object' ? `${option.name}` : option
            }
          />
          <Typography variant="body2">Basic</Typography>
        </Box>
        <Box sx={componentsPagesStyles(theme).componentWrapper}>
          <Autocomplete
            freeSolo
            multiple
            fullWidth
            limitTags={2}
            id="multiple-limit-tags"
            options={options}
            value={valueSelected2}
            onChange={(event: any, newValue: any[]) => {
              if (newValue.length === 0) {
                setValueSelected2([]); // Définit un tableau vide de type never[]
              } else {
                // Filtrer les valeurs valides avant de les affecter
                const validValues: any[] = [];

                for (let i = 0; i < newValue.length; i++) {
                  if (
                    typeof newValue[i] !== 'string' &&
                    options.findIndex((opt) => opt.id === newValue[i].id) !== -1
                  ) {
                    validValues.push(newValue[i]);
                  }
                }
                setValueSelected2(validValues as any); // Affecte le tableau de valeurs valides
              }
            }}
            inputValue={inputSelected2}
            onInputChange={(event, newInputValue) => {
              setInputSelected2(newInputValue);
            }}
            getOptionLabel={(option) =>
              typeof option === 'object' ? option.name : option
            }
            filterOptions={(optionsFilter, state) =>
              optionsFilter.filter((option) =>
                option.name
                  .toLowerCase()
                  .includes(state.inputValue.toLowerCase()),
              )
            }
            renderInput={(params) => (
              <TextField {...params} label="Multiple" placeholder="Multiple" />
            )}
          />
          <Typography variant="body2">Multiple selection</Typography>
        </Box>
      </Box>
    </CInfosTitleWrapper>
  );
};

export default CAutocompleteCard;
